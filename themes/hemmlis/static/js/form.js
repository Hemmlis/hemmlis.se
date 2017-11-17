$(document).ready(function(){
  
  function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
  }
    
  var form = $('#lease-form');

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