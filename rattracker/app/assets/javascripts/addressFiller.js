// //iterate over address fields in database
// //identify empty address fields
// //if address field is empty, use lat/long to populate it 
// //     -reverse geocaching to grab address

// function codeLatLng() {
//   console.log("This is running");
//   var coordinates = getCoordinates();
//   // var locationArray = parseCoordinates(coordinates);
//   console.log(coordinates);
  
// }

// function revgeocode(locationArray){
//   var geocoder = new google.maps.Geocoder();
//   for (var i = 0; i < 5; i++) {
//     var lat = locationArray[i][0];
//     var lng = locationArray[i][1];
//     var latlng = new google.maps.LatLng(lat, lng);
//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         // if (results[1]) {
//           console.log(results[0]);
//           console.log(results[1]);
//           console.log(results[2]);
//         // }
//       } else {
//         alert("Geocoder failed due to: " + status);
//       }
//     });
//   }
// }

// function parseCoordinates(coordinates){
  
//   var latLong = [];
//   for(var i = 0; i < coordinates.length; i++){
//     latLong.push([coordinates[i].latitude, coordinates[i].longitude]);
//   }
//   console.log("parsing coordinates");
//   revgeocode(latLong);
// }

// function getCoordinates() {
  
//   $.ajax({
//     url: "/rat_sightings.json",
//     dataType: "JSON",
//     success: function(response){
//       parseCoordinates(response);
//     }, 
//     error: function(){alert("failure!");}
//   });
// }

// $(document).ready( function() { codeLatLng();});

// // $.ajax({
// //   url: "/lists.json",
// //   dataType: "JSON",
// //   success: function(response){
// //     response.forEach(function(obj){
// //       that.createList(obj);
// //     });
// //   },
// //   error: function(){alert("failure!");}
// // });

// // $.ajax({
// //   url: "/lists/" + listId,
// //   type: "DELETE",
// //   dataType: "JSON",
// //   data: {list: {id: listId}},
// //   success: function(){
// //     $deletedList.closest(".list").remove();
// //     List.delete(listId);
// //   },
// //   error: function(){alert("failure!");}
// // });