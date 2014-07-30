//iterate over address fields in database
//identify empty address fields
//if address field is empty, use lat/long to populate it 
//     -reverse geocaching to grab address

function codeLatLng() {
  console.log("This is running");
  var geocoder = new google.maps.Geocoder();
  var locationArray = getCoordinates();
  // for (var i = 0; i < locationArray.length; i++) {
  //   var lat = locationArray[i][0];
  //   var lng = locationArray[i][1];
  //   var latlng = new google.maps.LatLng(lat, lng);
  //   geocoder.geocode({'latLng': latlng}, function(results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       if (results[1]) {

  //       }
  //     } else {
  //       alert("Geocoder failed due to: " + status);
  //     }
  //   });
  // };
}

codeLatLng();

function getCoordinates() {
  $.ajax({
    url: "/rat_sightings.json",
    dataType: "JSON",
    success: function(response){
      var latLong = [];
      response.forEach(function(obj){
        latLong.push([obj.latitude, obj.longitude])
      });
      console.log(latLong);
    },
    error: function(){alert("failure!");}
  });
}

// $.ajax({
//   url: "/lists.json",
//   dataType: "JSON",
//   success: function(response){
//     response.forEach(function(obj){
//       that.createList(obj);
//     });
//   },
//   error: function(){alert("failure!");}
// });

// $.ajax({
//   url: "/lists/" + listId,
//   type: "DELETE",
//   dataType: "JSON",
//   data: {list: {id: listId}},
//   success: function(){
//     $deletedList.closest(".list").remove();
//     List.delete(listId);
//   },
//   error: function(){alert("failure!");}
// });