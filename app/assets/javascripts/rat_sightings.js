$(document).ready(function () {
        var coords = [];
        function queryDb() {
          
          $.ajax({
            url: "/rat_sightings.json",
            dataType: "JSON",
            success: function(response){
              for(var i = 0; i < 100; i++){
                coords.push([response[i].latitude, response[i].longitude, response[i].created_date, response[i].location_type, response[i].zip, response[i].address]);
                }
                console.log(coords)
                mapGenerator();
            }, 
            error: function(){alert("failure!");}
          });
        }

        queryDb();
     });   

    //     var map = new google.maps.Map(d3.select("#map-canvas").node(), {
    //           zoom: 12,
    //           center: new google.maps.LatLng(40.7199792,-73.9725163),
    //           mapTypeId: google.maps.MapTypeId.ROADMAP
    //         });

    //     function mapGenerator(){
    //         d3.json("/app/assets/javascripts/rats.json", function(data) {
    //           var overlay = new google.maps.OverlayView();
             
    //           // Add the container when the overlay is added to the map.
    //           overlay.onAdd = function() {
    //             var layer = d3.select(this.getPanes().overlayLayer).append("div")
    //                 .attr("class", "rats");
             
    //             // Draw each marker as a separate SVG element.
    //             // We could use a single SVG, but what size would it have?
    //             overlay.draw = function() {
    //               var projection = this.getProjection(),
    //                   padding = 10;
             
    //               var marker = layer.selectAll("svg")
    //                   .data(d3.entries(data))
    //                   .each(transform) // update existing markers
    //                 .enter().append("svg:svg")
    //                   .each(transform)
    //                   .attr("class", "marker");
             
    //               // Add a circle.
    //               marker.append("svg:circle")
    //                   .attr("r", 4.5)
    //                   .attr("cx", padding)
    //                   .attr("cy", padding);
             
    //               // Add a label.
    //               marker.append("svg:text")
    //                   .attr("x", padding + 7)
    //                   .attr("y", padding)
    //                   .attr("dy", ".31em")
    //                   .text(function(d) { return d.key; });
             
    //               function transform(d) {
    //                 d = new google.maps.LatLng(d.value[1], d.value[0]);
    //                 d = projection.fromLatLngToDivPixel(d);
    //                 return d3.select(this)
    //                     .style("left", (d.x - padding) + "px")
    //                     .style("top", (d.y - padding) + "px");
    //               }
    //             };
    //           };
             
    //           // Bind our overlay to the map…
    //           overlay.setMap(map);
    //         });
    //      }
    //     });
    //  