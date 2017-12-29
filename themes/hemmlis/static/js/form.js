$(document).ready(function(){
  
  var getFormData = function($form){
    var unindexedArray = $form.serializeArray();
    var indexedArray = {};

    $.map(unindexedArray, function(input){
        indexedArray[input['name']] = input['value'];
    });

    return indexedArray;
  };

  var calculateTotal = function($el, total, dataAttribute) {
    var check = $el.parent('label').prev('input').get(0);
    return check && check.checked ? total + $el.data(dataAttribute) : total;
  };

  var shortOptions = $('[data-subscription=short]');
  var longOptions = $('[data-subscription=long]');
  shortOptions.hide();
    
  var form = $('#lease-form');
  var monthly = $('#monthlyCost');
  var fees = $('#feeCost');
  var payPeriod = $('#payPeriod');

  var paymentPeriod = 1;

  form.find('input').on('change', function() {
    var periodCost = 0;
    var totalFee = 0;
    var selectedSubscription = $('[name=subscription]').filter(':checked').val();
    if(selectedSubscription === 'long') {
      shortOptions.hide();
      longOptions.show();
    }
    else {
      longOptions.hide();
      shortOptions.show(); 
    }
    
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
      console.log(response);
    }

    var failure = function(response) {
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