$(document).ready(function(){
  
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

  var shortOptions = $('[data-subscription=short]');
  var longOptions = $('[data-subscription=long]');
  var selectedSubscription = $('[name=subscription]').filter(':checked').val();

  $('[data-show]').each(function() {
    hider($(this));
  });
    
  var form = $('#lease-form');
  var monthly = $('#monthlyCost');
  var fees = $('#feeCost');
  var payPeriod = $('#payPeriod');

  var paymentPeriod = 1;

  form.find('input').on('change', function() {
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
  });

  form.on('submit', function(event) {
    
    event.preventDefault();

    var success = function(response) {
      if(response.result === 'success') {
        window.location.href = '/form/success';
      }
      else {
        window.location.href = '/form/error';
        console.log(response);
      }
    }

    var failure = function(response) {
      window.location.href = '/form/error';
      console.log(response);
    }

    var requestOptions = {
      url: 'https://script.google.com/macros/s/AKfycbywfBBvSCkxAI81pjHoxdlTPFw7XE6uci9gmq2r8t-C8kO32_gK/exec',
      method: 'GET',
      dataType: 'json',
      data: getFormData(form)
    };

    $.ajax(requestOptions)
      .done(success)
      .fail(failure);
  
  });

});