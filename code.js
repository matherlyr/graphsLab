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
        
        d3.select("#button3").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(2,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button3").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(2,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        d3.select("#button3").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(2,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button4").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(3,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button5").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(4,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button6").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(5,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button7").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(6,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button8").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(7,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        d3.select("#button9").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(8,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button10").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(9,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        d3.select("#button11").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(10,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        d3.select("#button11").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(10,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        d3.select("#button12").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(11,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button13").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(12,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button14").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(13,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button15").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(14,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button16").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(15,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button17").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(16,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button18").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(17,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button19").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(18,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button20").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(19,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        d3.select("#button21").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(20,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button22").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(21,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button23").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(22,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button24").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(23,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button25").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(24,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button26").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(25,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button27").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(26,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button28").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(27,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button29").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(28,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button30").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(29,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button31").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(30,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })
        
        d3.select("#button32").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(31,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })

        
        d3.select("#button33").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(32,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })

        
        d3.select("#button34").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(33,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })

        
        d3.select("#button35").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(34,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })

        
        d3.select("#button36").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(35,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })

        
        d3.select("#button37").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(36,data)
                                console.log(points)
                                setup(points)
                                console.log("setup checkmark")
                                drawPoints(points)
                                console.log("drawing checkmark")
                            })

        
        d3.select("#button38").on("click", function()
                            {
                                removePoints()
                                console.log("click")
                                var points=getGradesByDay(37,data)
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
    d3.selectAll("svg *")
    .remove()
            
}

