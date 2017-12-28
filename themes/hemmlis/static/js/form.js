$(document).ready(function(){
  
  var getFormData = function($form){
    var unindexedArray = $form.serializeArray();
    var indexedArray = {};

    $.map(unindexedArray, function(input){
        indexedArray[input['name']] = input['value'];
    });

    return indexedArray;
  };

  var form = $('#lease-form');
  var monthly = $('#monthlyCost');
  var fees = $('#feeCost');
  var payPeriod = $('#payPeriod');

  var paymentPeriod = 1;

  form.find('input').on('change', function() {
    var periodCost = 0;
    var totalFee = 0;

    var calculateTotal = function($el, total) {
      var check = $el.parent('label').prev('input').get(0);
      if(check && check.checked) {
        total = total + $el.data('price');
      }
    };
    
    $('[data-price]').each(() => calculateTotal($(this), periodCost));
    $('[data-fee]').each(() => calculateTotal($(this), totalFee));

    paymentPeriod = $('[name=payment]').filter(':checked').val();
    console.log(periodCost, paymentPeriod);

    monthly.text(periodCost * paymentPeriod);
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