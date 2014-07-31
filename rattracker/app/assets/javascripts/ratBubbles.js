var BEVERAGES = [
  {"name":"tea","value":74},
  {"name":"whiskey","value":5},
  {"name":"beer","value":54},
  {"name":"gatorade","value":3},
  {"name":"coffee","value":86},
  {"name":"fanta","value":6},
  {"name":"wine","value":38}
];

////////// v code goes below   v  /////////////////////////////////////////////

var bubble = d3.layout.pack()
  .sort(null)
  .size([800, 800])
  .padding(1.5);

var svg = d3.select('.bubble-chart')
  .append('svg')
  .attr('width', 800)
  .attr('height', 800);

var color = d3.scale.category10();

function animate(data) {

  var bubbleData = bubble.nodes({children: data})
    .filter(function(d) { return !d.children; });

  var node = svg.selectAll('.node')
    .data(bubbleData, function(d) { return d.name; });

  var enter = node.enter();
  enter.append('circle')
    .attr('class', 'node')
    .attr('r', 0)
    .style('fill', function(d) { return color(d.name); });

  enter.append('text')
    .attr('class', 'node')
    .attr('r', 0)
    .style('fill', 'lightgreen');

  var update = node.transition();
  update.attr('r' , function(d) { return d.r; })
    .attr('cy', function(d) { return d.y; })
    .attr('cx', function(d) { return d.x; });

  var exit = node.exit();
  exit.transition()
    .attr('r', 0)
    .remove();
}

animate(BEVERAGES);

////////// ^ code goes above  ^  /////////////////////////////////////////////

setTimeout(function() {
  BEVERAGES[0].value = 90;            // changes value of tea to 100
  animate(BEVERAGES);
}, 1000);

setTimeout(function() {
  BEVERAGES[2].value = 20;            // changes value of beer to 100
  animate(BEVERAGES);
}, 1000);

setTimeout(function() {
  BEVERAGES[4].value = 3;            // changes value of coffe to 3
  animate(BEVERAGES);
}, 1500);

setTimeout(function() {
  BEVERAGES.pop();                 // removes wine from JSON
  animate(BEVERAGES);
}, 2000);

setTimeout(function() {
  BEVERAGES.push({name: "kombucha", value: 50});     // adds kombucha in
  animate(BEVERAGES);
}, 2500);

setTimeout(function() {
  BEVERAGES.push({name: "wine", value: 60});    // adds wine back
  animate(BEVERAGES);
}, 3000);

setTimeout(function() {
  BEVERAGES[3].value = 40;             // changes value of gatorade to 50
  animate(BEVERAGES);
}, 3500);

setTimeout(function() {
  BEVERAGES[4].value = 10;             // coffee is now 10
  animate(BEVERAGES);
}, 3750);

setTimeout(function() {
  BEVERAGES[0].value = 15;             // tea is now 15
  animate(BEVERAGES);
}, 4000);



// // want to get bubble chart with each bubble a zip code
// // each bubble's size determined by how many rat sightings in that zip code

// function getData() {
  
//   $.ajax({
//     url: "/rat_sightings.json",
//     dataType: "JSON",
//     success: function(response){
//       console.log("success!");
//     }, 
//     error: function(){alert("failure!");}
//   });
// }


// d3.json("rat_sightings.json", function (data){
//     // code goes here
// var canvas = d3.select("p")
//   .append("svg")
//   .attr("width", 1000)
//   .attr("height", 1000);

// var svg = d3.select('.bubble-chart')
//           .append('svg')
//           .attr('width', 1000)
//           .attr('height', 1000);

// function animate(data) {
//   var node = svg.selectAll('.node')
//             .data(data, function (d) {return d.name;});

//   var enter = node.enter();

//   enter.append('circle')
//   .attr('class','node')
//   .style('fill','lightgreen')
//   .attr('r', 0)
//   .attr('cx', function (d,i) {return 100 * i + 100;})
//   .attr('cy', 100);

//   var update = node.transition()



//                 .attr('r', function (d) {return d.value;});


//   var exit = node.exit();
//   exit.remove();
// }
//     animate(data.zip); //still have to figure out how to make one bubble = all rat
//     //sightings in that zip
// });