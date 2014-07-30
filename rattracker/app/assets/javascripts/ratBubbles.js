// want to get bubble chart with each bubble a zip code
// each bubble's size determined by how many rat sightings in that zip code

d3.csv("Rat_Sightings.csv", function(data){
    // code goes here
var canvas = d3.select("p")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

var svg = d3.select('.bubble-chart')
          .append('svg')
          .attr('width', 1000)
          .attr('height', 1000);

function animate(data) {
  var node = svg.selectAll('.node')
            .data(data, function (d) {return d.name;});

  var enter = node.enter();

  enter.append('circle')
  .attr('class','node')
  .style('fill','lightgreen')
  .attr('r', 0)
  .attr('cx', function (d,i) {return 100 * i + 100;})
  .attr('cy', 100);

  var update = node.transition()



                .attr('r', function (d) {return d.value;});


  var exit = node.exit();
  exit.remove();
}
    animate(data.zip); //still have to figure out how to make one bubble = all rat
    //sightings in that zip
});