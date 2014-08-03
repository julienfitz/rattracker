function submitListener() {
  var $submit = $('input[type="submit"]'),
      $address = $('#rat_sightings_address');
  $submit.click(function(event) {
    eraseError();
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
      failsValidation();
    }
  });
}

var config = {
  writable: true,
  enumerable: true,
  configurable: true
};

var xy;

function createCoordinates(results){
  xy = Object.create(null);
  xy['latitude'] = results['geometry']['location']['k'];
  xy['longitude'] = results['geometry']['location']['B'];
}


function geocodeToRails(results) {
  var add_comp = results["address_components"];

  $.ajax({
    url: '/rat_sightings',
    type: 'POST',
    dataType: 'JSON',
    data: {zipcode: add_comp[add_comp.length - 1]['long_name']},
    error: function(response){
      eval(response.responseText);

      createCoordinates(results);
      var centerAt = new google.maps.LatLng(xy.latitude, xy.longitude);
      map.setCenter(centerAt);
      map.setZoom(15);
    }

  });
}

function failsValidation() {
  $.ajax({
    url: '/rat_sightings',
    type: 'POST',
    dataType: 'JSON',
    data: {notice: "That address was invalidd"},
    error: function(response){
      eval(response.responseText);
    }
  });
}

function eraseError() {
  $("#error").remove();
}

$(function init() {
  submitListener();
  eraseError();
});