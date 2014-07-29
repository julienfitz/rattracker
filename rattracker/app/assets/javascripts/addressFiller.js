//iterate over address fields in database
//identify empty address fields
//if address field is empty, use lat/long to populate it 
//     -reverse geocaching to grab address


(function codeLatLng() {
  var geocoder = new google.maps.Geocoder();
  var lat = parseFloat(latlngStr[0]);
  var lng = parseFloat(latlngStr[1]);
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {

      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
})()

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