$(document).ready(function() {

  var searchParams = new URLSearchParams(window.location.search);

  var wantSofa = searchParams.get('sofa');
  var wantBed = searchParams.get('wideBed');
  var wantChair = searchParams.get('officeChair');
  var collection = searchParams.get('collection');
  var homeDelivery = searchParams.get('homeDelivery');

  $('#sofa').prop('checked', wantSofa === 'on' ? true : false);
  $('#wideBed').prop('checked', wantBed === 'on' ? true : false);
  $('#officeChair').prop('checked', wantChair === 'on' ? true : false);
  $('#homeDelivery').prop('checked', homeDelivery === 'on' ? true : false);
  $('#collection').prop('value', collection);
  
  var getFormData = function($form){
    var unindexedArray = $form.serializeArray();
    var indexedArray = {};

    $.map(unindexedArray, function(input) {
      var value = input['value'] === undefined ? '' : input['value'];
      indexedArray[input['name']] = value === 'on' ? 'x' : value;
    });

    return indexedArray;
  };

  var calculateTotal = function($el, total, dataAttribute) {
    var check = $el.parent('label').prev('input').get(0);
    return check && check.checked ? total + $el.data(dataAttribute) : total;
  };

  var hider = function($el) {
    var name = $el.data('show');
    var check = $('[value=' + name + ']').get(0);
    var show = check && check.checked;
    return show ? $el.removeClass('is-hidden') : $el.addClass('is-hidden');
  };

  var selectedSubscription = $('[name=subscription]').filter(':checked').val();

  $('[data-show]').each(function() {
    hider($(this));
  });
    
  var form = $('#lease-form');
  var monthly = $('#monthlyCost');
  var fees = $('#feeCost');
  var payPeriod = $('#payPeriod');

  var paymentPeriod = 1;

  var updateCalculations = function() {
    var periodCost = 0;
    var totalFee = 0;

    var newlySelectedSubscription = $('[name=subscription]').filter(':checked').val();

    if(newlySelectedSubscription !== selectedSubscription) {
      $('#paypermonth').prop('checked', true);
      selectedSubscription = newlySelectedSubscription;
    }

    $('[data-show]').each(function() {
      hider($(this));
    });
    
    $('[data-price]').each(function() {
      periodCost = calculateTotal($(this), periodCost, 'price');
    });

    $('[data-fee]').each(function() {
      totalFee = calculateTotal($(this), totalFee, 'fee');
    });

    paymentPeriod = $('[name=payment]').filter(':checked').val();
    var paymentPeriodName = $('[name=payment]').filter(':checked').data('name');

    periodCost = periodCost * paymentPeriod;

    monthly.text(periodCost);
    payPeriod.text(paymentPeriodName);
    fees.text(totalFee);
  };

  updateCalculations();

  form.find('input').on('change', updateCalculations);

  var successUrl = form.data('success-url');
  var errorUrl = form.data('error-url');

  form.on('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    form.attr('aria-busy', "true");
    
    var success = function(response) {
      form.attr('aria-busy', "false");
      window.location.href = successUrl;
    }

    var failure = function(response) {
      form.attr('aria-busy', "false");
      if(response.responseText === 'Not available') {
        alert('The collection you tried to order has been snatched by someone else!');
        return;
      }
      window.location.href = errorUrl + '?error=' + response.responseText;
    }

    var requestOptions = {
      url: 'http://localhost:8000/index.php?endpoint=order',
      method: 'POST',
      dataType: 'json',
      data: getFormData(form)
    };

    $.ajax(requestOptions)
      .done(success)
      .fail(failure);
  
  });

});
