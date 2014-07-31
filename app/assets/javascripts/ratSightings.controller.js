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
  console.log(address);
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    console.log(results);
    debugger
    if (status == google.maps.GeoCoderStatus.OK) {
      geocodeToRails(results);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function geocodeToRails(results) {
  $.ajax({
    url: '/rat_sightings',
    type: 'POST',
    dataType: 'json',
    success: function(response) {
      console.log('Sent to Rails!');
    },
    error: function(){alert('Failure!');}
  });
}

$(function init() {
  submitListener();
});