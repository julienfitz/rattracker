function submitListener() {
  var $submit = $('input[type="submit"]'),
      $address = $('#rat_sightings_address');
  $submit.click(function(event) {
    codeAddress($address.val());
    $address.val('');
    event.preventDefault();
  });
};

function codeAddress(address) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      geocodeToRails(results[0]);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function geocodeToRails(results) {
  console.log(results);
  $.ajax({
    url: '/rat_sightings',
    type: 'POST',
    dataType: 'JSON',
    data: {zipcode: results['address_components'][8]['long_name']},
    error: function(response){
      eval(response.responseText);
    }

  });
}

$(function init() {
  submitListener();
});