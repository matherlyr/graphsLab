var penPromise= d3.json("classData.json")
var success=function(data)
    {
        console.log(data);

        var points= getGradesByDay(0,data)
        
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
                yScale.range ([screen.height, 0])
                
                drawPoints(points, xScale, yScale)
                
            }
        
        var drawPoints = function(points, xScale, yScale)
            {
                d3.select("svg")
                .selectAll("circle")
                .data(points)
                .enter()
                .append("circle")
                .attr("cx", function (p){return xScale(p.x)})
                .attr("cy", function (p){return yScale(p.y)})
                .attr("r", 4)
            }
        
        
        setup(points)
        
        drawPoints(points)
        
        

        
        d3.select("#button1").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(0,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            
                            })
        
        d3.select("#button2").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(1,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })

        
        
        
        
    }


var fail=function(data)
    {
        console.log("fail");

    }
penPromise.then(success, fail);

var getGradesByDay= function(day,data)
    {
        var points =data.map(function(pen, i)
                   {
                        return {
                            x:i,
                            y:pen.quizes[day].grade
                        }
                    })
        return points
        
    }


var removePoints =function()
{
    d3.selectAll("points *")
    .remove()
            
}
