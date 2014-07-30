function RatSightingsController () {

}

RatSightingsController.prototype.submitListener = function() {
  var $submit = $('input[type="submit"]'),
      $address = $('#rat_sightings_zip').val();
  $submit.submit(function() {
    formattedAddress = codeAddress($address);
    console.log(formattedAddress);
  });
}

RatSightingsController.prototype.init = function() {
  this.submitListener();
}

function codeAddress(address) {
  var formattedAddress;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    if (status == google.maps.GeoCoderStatus.OK) {
      formattedAddress = results;
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  return formattedAddress;
}