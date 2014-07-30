$(document).ready( function() { codeLatLng();});

function codeLatLng() {
  console.log("This is running");
  var coordinates = getCoordinates();  
}

function revgeocode(locationArray){
  var geocoder = new google.maps.Geocoder();
  for (var i = 0; i < 2000; i++) {
    var lat = locationArray[i][0];
    var lng = locationArray[i][1];
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results) {
          saveData(results);
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
}

function parseCoordinates(coordinates){
  var latLong = [];
  for(var i = 0; i < 2000; i++){
    latLong.push([coordinates[i].latitude, coordinates[i].longitude]);
  }
  console.log("parsing coordinates");
  revgeocode(latLong);
}

function getCoordinates() {
  $.ajax({
    url: "/rat_sightings.json",
    dataType: "JSON",
    success: function(response){
      parseCoordinates(response);
    }, 
    error: function(){alert("failure!");}
  });
}

function saveData(results) {
  geoAddress = parseAddress(results);
  $.ajax({
    url: "/rat_sightings",
    type: 'POST',
    dataType: 'JSON',
    data: {rat_sighting: {address: geoAddress}},
    success: function() {console.log("Address has been parsed");},
    error: function() {alert("Save failed");}
  });
}

function parseAddress(results) {
  return results.split(",")[0];
}