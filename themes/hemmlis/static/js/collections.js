$(document).ready(function() {

    var success = function(response) {
      console.log(response);
      $.each(response, function(a, collection, c){
        var id = Object.keys(collection)[0];
        var inStock = collection[id];
        var collectionEl = $.find('#'+id)[0];
        $(collectionEl).addClass(inStock ? 'inStock' : 'outStock');
      })
    }

    var failure = function(response) {
      console.log(response);
    }

    var requestOptions = {
      url: 'http://localhost:8000/index.php?endpoint=collections',
      method: 'GET',
      dataType: 'json'
    };

    $.ajax(requestOptions)
      .done(success)
      .fail(failure);
  
});
