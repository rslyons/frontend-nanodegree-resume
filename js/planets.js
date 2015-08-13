var planets = {
	"planets":[
		{
			"order": "2",
			"name": "Venus",
			"radius": ".9489",
			"orbit": ".723",
			"brightness_sqrt": "100",
			"color": "steelblue"
		},
		{
			"order": "3",
			"name": "Earth",
			"radius": "1",
			"orbit": "1",
			"brightness_sqrt": "0",
			"color": "darkblue"
		},
		{
			"order": "4",
			"name": "Mars",
			"radius": ".5312",
			"orbit": "1.524",
			"brightness_sqrt": "40.18",
			"color": "red"
		},
		{
			"order": "5",
			"name": "Jupiter",
			"radius": "11.19",
			"orbit": "5.203",
			"brightness_sqrt": "40.74",
			"color": "orange",
			"image": "./images/jupiter.png"
		},
		{
			"order": "1",
			"name": "Mercury",
			"radius": ".3824",
			"orbit": ".387",
			"brightness_sqrt": "32.51",
			"color": "gray"
		},
		{
			"order": "6",
			"name": "Saturn",
			"radius": "9.407",
			"orbit": "9.54",
			"brightness_sqrt": "5.345",
			"color": "yellow"
		},
		{
			"order": "7",
			"name": "Uranus",
			"radius": "4.007",
			"orbit": "19.18",
			"brightness_sqrt": ".9078",
			"color": "steelblue"
		},
		{
			"order": "8",
			"name": "Neptune",
			"radius": "3.888",
			"orbit": "30.06",
			"brightness_sqrt": ".2924",
			"color": "steelblue"
		}
	]
};

planets.toggle=1;

planets.display = function() {
	var svg = d3.select("#planet-svg");

	// Bind the planet data to the SVG
	var p=svg.selectAll("circle")
		.data(planets.planets);

	// Now put an initial title on the chart
	svg.append("text")
		.attr("id","chart_title")
        .attr("x", (600))             
        .attr("y", 50)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Planet size and distance (click planets to see brightness)")
    ;


//    var defs = svg.append('svg:defs');
//    for (var i=0; i<planets.planets.length; i++) {
//	    defs.append('svg:pattern')
//	        .attr('id', planets.planets[i].name)
//	        //.attr('patternUnits', 'userSpaceOnUse')
//	        .attr('width', planets.planets[i].radius*10)
//	        .attr('height', planets.planets[i].radius*10)
//	        .append('svg:image')
//	        .attr('xlink:href', planets.planets[i].image)
//	        .attr('x', 0)
//	        .attr('y', 0)
//	        .attr('width', planets.planets[i].radius*10)
//	        .attr('height', planets.planets[i].radius*10)
//	    ;    	
//    }

    // Add the display circles for each planet
	p.enter().append("circle")
		.attr("cy",200)
		.attr("cx", function(d) {return d.orbit*30+80})
		.attr("r", function(d) {return d.radius*5})
		.style("fill", function(d) {return d.color})
		//.style("fill",function(d) {return "url(#"+d.name+")"})
		.on("click", function() {planets.update(planets.toggle)})
	;

	for (var i in planets.planets) {
		var yi = 300;
		if (planets.planets[i].order <= 4) {
			yi = yi - 20*(4-planets.planets[i].order);
		};
		svg.append("text")
			.attr("y",yi)
			.attr("x",planets.planets[i].orbit*30+80)
			.attr("text-anchor", "middle") 
			.style("font-size", "16px") 
	       	.style("text-decoration", "underline") 
			.style("color","black")
			.text(planets.planets[i].name)
		;		
	};

	// And add a title to each planet, to display during hover
	//p.append("title").text(function(d) {return d.name});

};

planets.update = function(i) {
	console.log("i "+i);
	var svg = d3.select("#planet-svg");

	var p=svg.selectAll("circle")
		.data(planets.planets);

	if (i===1) {
		svg.select("#chart_title").remove();

		svg.append("text")
			.attr("id","chart_title")
    	    .attr("x", (600))             
        	.attr("y", 50)
	        .attr("text-anchor", "middle")  
    	    .style("font-size", "16px") 
        	.style("text-decoration", "underline")  
	        .text("Brightness from Earth")
	    ;

		p.transition().duration(2000).attr("r",function(d) {return d.brightness_sqrt*3});
	} else {
		svg.select("#chart_title").remove();

		svg.append("text")
			.attr("id","chart_title")
    	    .attr("x", (600))             
        	.attr("y", 50)
	        .attr("text-anchor", "middle")  
    	    .style("font-size", "16px") 
        	.style("text-decoration", "underline")  
	        .text("Size and Distance")
	    ;

		p.transition().duration(2000).attr("r",function(d) {return d.radius*5});
	}

	p.exit().transition().duration(2000).remove();
	planets.toggle=i*-1;
};

planets.display();
