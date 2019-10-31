var penPromise= d3.json(src="penguins/classData.json")
var success=function(data)
    {
        console.log(data);

        var points =data.map(function(pen, i)
                   {
                        return {
                            x:i,
                            y:pen.quizes[0].grade
                        }
                    })
        console.log(points)
        
        var screen = {width:500, height:500}
        
        var setup= function(points)
            {
                d3.select("svg")
                .attr("height", screen.height)
                .attr("width", screen.width)
                
                var xScale=d3.scaleLinear()
                xScale.domain([d3.min(points,function(p){return p.x}) ,
                               d3.max(points,function(p){return p.x})])
                xScale.range ([0,screen.width])
                
                var yScale=d3.scaleLinear()
                yScale.domain([d3.min(points,function(p){return p.y}) , d3.max(points,function(p){return p.y})])
                yScale.range ([screen.width, 0])
                
                drawPoints(points)
                
            }
        
        var drawPoints = function(points)
            {
                d3.select("svg")
                .selectAll("circle")
                .data(points)
                .enter()
                .append("circle")
                .attr("cx", function (p){return p.x})
                .attr("cy", function (p){return p.y})
                .attr("r", 4)
            }
        
        setup(points)
        
        drawPoints(points)
        
        
        
    }


var fail=function(data)
    {
        console.log("fail");

    }
penPromise.then(success, fail);

