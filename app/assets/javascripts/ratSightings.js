$(window).load(function(){

  var map = new google.maps.Map(d3.select("#map-canvas").node(), {
    zoom: 15,
    center: new google.maps.LatLng(40.7199792,-73.9725163),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  function mapGenerator(){
    var coords = [];

    $.ajax({
      url: "/rat_sightings.json",
      dataType: "JSON",
      success: function(response){
        for(var i = 0; i < response.length; i++){
          coords.push([response[i].latitude, response[i].longitude, response[i].created_date, response[i].location_type, response[i].zip, response[i].address]);
          }
        overlayMap(coords);
      }, 
      error: function(){alert("failure!");}
    });
  }

  function overlayMap(rats){
    var overlay = new google.maps.OverlayView();
      
    // Add the container when the overlay is added to the map.
  overlay.onAdd = function() {
    var layer = d3.select(this.getPanes().overlayMouseTarget).append("div")
        .attr("class", "rats");
 
    // Draw each marker as a separate SVG element.
    // We could use a single SVG, but what size would it have?
    overlay.draw = function() {
      var projection = this.getProjection(),
          padding = 10;
 
      var marker = layer.selectAll("svg")
          .data(d3.entries(rats))
          .each(transform) // update existing markers
        .enter().append("svg:svg")
          .each(transform)
          .attr("class", "marker");
 
      // Add a circle.
      marker.append("svg:circle")
          .attr("r", 4.5)
          .attr("cx", padding)
          .attr("cy", padding);
 
      // Add a label.
      marker.append("svg:text")
          .attr("x", padding + 7)
          .attr("y", padding)
          .attr("dy", ".31em")
          .attr("class","rats_text")
          .text(function(d) { return d.value[2]; });

      function transform(d) {
        d = new google.maps.LatLng(d.value[0], d.value[1]);
        d = projection.fromLatLngToDivPixel(d);
        
        return d3.select(this)
            .style("left", (d.x - padding) + "px")
            .style("top", (d.y - padding) + "px");
      }
    };
  };
  overlay.setMap(map);
  }
  mapGenerator();
});