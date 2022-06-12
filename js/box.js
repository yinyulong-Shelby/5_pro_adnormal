function boxplot(name, type, daa,val, ref){
    var ty='Price'
    var tt='price'
  var date=[]
  if(TYPE==0){
    date =[  "2018/12/1", "2018/12/2", "2018/12/3", "2018/12/4", "2018/12/5","2018/12/6", "2018/12/7", "2018/12/8", "2018/12/9", "2018/12/10", 
"2018/12/11", "2018/12/12", "2018/12/13", "2018/12/14", "2018/12/15","2018/12/16", "2018/12/17", "2018/12/18", "2018/12/19", "2018/12/20", 
"2018/12/21", "2018/12/22", "2018/12/23", "2018/12/24", "2018/12/25", "2018/12/26", "2018/12/27", "2018/12/28", "2018/12/29", "2018/12/30", "2018/12/31",
"2019/1/1", "2019/1/2", "2019/1/3", "2019/1/4", "2019/1/5","2019/1/6", "2019/1/7", "2019/1/8", "2019/1/9", "2019/1/10", 
"2019/1/11", "2019/1/12", "2019/1/13", "2019/1/14", "2019/1/15","2019/1/16", "2019/1/17", "2019/1/18", "2019/1/19", "2019/1/20", 
"2019/1/21", "2019/1/22", "2019/1/23", "2019/1/24", "2019/1/25", "2019/1/26", "2019/1/27", "2019/1/28", "2019/1/29", "2019/1/30", "2019/1/31",
"2019/2/1", "2019/2/2", "2019/2/3", "2019/2/4", "2019/2/5","2019/2/6", "2019/2/7",  "2019/2/9", "2019/2/10", 
"2019/2/11", "2019/2/12", "2019/2/13", "2019/2/14", "2019/2/15","2019/2/16", "2019/2/17", "2019/2/18", "2019/2/19", "2019/2/20", 
"2019/2/21", "2019/2/22", "2019/2/23", "2019/2/24", "2019/2/25", "2019/2/26", "2019/2/27", "2019/2/28",
 "2019/3/2", "2019/3/3", "2019/3/4", "2019/3/5","2019/3/6", "2019/3/7", "2019/3/8", "2019/3/9", "2019/3/10", 
"2019/3/11", "2019/3/12", "2019/3/13", "2019/3/14", "2019/3/15","2019/3/16", "2019/3/17", "2019/3/18", "2019/3/19", "2019/3/20", 
"2019/3/21", "2019/3/22", "2019/3/23", "2019/3/24", "2019/3/25", "2019/3/26", "2019/3/27", "2019/3/28", "2019/3/29", "2019/3/30", "2019/3/31",
"2019/4/1", "2019/4/2", "2019/4/3", "2019/4/4", "2019/4/5","2019/4/6", "2019/4/7", "2019/4/8", "2019/4/9", "2019/4/10", 
"2019/4/11", "2019/4/12", "2019/4/14", "2019/4/15","2019/4/16", "2019/4/17", "2019/4/18", "2019/4/19", "2019/4/20", 
"2019/4/21", "2019/4/22", "2019/4/23", "2019/4/24", "2019/4/25", "2019/4/26", "2019/4/27", "2019/4/28", "2019/4/29", "2019/4/30",
"2019/5/1", "2019/5/2", "2019/5/3", "2019/5/4", "2019/5/5","2019/5/6", "2019/5/7", "2019/5/8", "2019/5/9", "2019/5/10", 
"2019/5/11", "2019/5/12", "2019/5/13", "2019/5/14", "2019/5/15","2019/5/16", "2019/5/17", "2019/5/18", "2019/5/19", "2019/5/20", 
"2019/5/21", "2019/5/22", "2019/5/23", "2019/5/24", "2019/5/25", "2019/5/26", "2019/5/27", "2019/5/28", "2019/5/29", "2019/5/30", "2019/5/31",
"2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5","2019/6/6", "2019/6/7", "2019/6/8", "2019/6/10", 
"2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15","2019/6/16", "2019/6/17", "2019/6/18", "2019/6/19", "2019/6/20", 
"2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28", "2019/6/29", "2019/6/30", 
"2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5","2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9", "2019/7/10", 
"2019/7/11", "2019/7/12","2019/7/13", "2019/7/14", "2019/7/15","2019/7/16", "2019/7/17", "2019/7/18", "2019/7/19", "2019/7/20", 
"2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28", "2019/7/29", "2019/7/30", "2019/7/31",
"2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5","2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9", "2019/8/10", 
"2019/8/11", "2019/8/12","2019/8/13", "2019/8/14", "2019/8/15","2019/8/16", "2019/8/17", "2019/8/18", "2019/8/19", "2019/8/20", 
"2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28", "2019/8/29", "2019/8/30", "2019/8/31",
"2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5","2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9", "2019/9/10", 
"2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15","2019/9/16", "2019/9/17", "2019/9/18", "2019/9/19", "2019/9/20", 
"2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25", "2019/9/26", "2019/9/27", "2019/9/28", "2019/9/29", "2019/9/30",
"2019/10/1", "2019/10/2", "2019/10/3", "2019/10/4", "2019/10/5","2019/10/6", "2019/10/7", "2019/10/8", "2019/10/9", "2019/10/10", 
"2019/10/11", "2019/10/12", "2019/10/13", "2019/10/14", "2019/10/15","2019/10/16", "2019/10/17", "2019/10/18", "2019/10/19", "2019/10/20", 
"2019/10/21", "2019/10/22", "2019/10/23", "2019/10/24", "2019/10/25", "2019/10/26", "2019/10/27", "2019/10/28", "2019/10/29", "2019/10/30", "2019/10/31",
"2019/11/1", "2019/11/2", "2019/11/3", "2019/11/4", "2019/11/5","2019/11/6", "2019/11/7", "2019/11/8", "2019/11/9", "2019/11/10", 
"2019/11/11", "2019/11/12", "2019/11/13", "2019/11/14", "2019/11/15","2019/11/16", "2019/11/17", "2019/11/18", "2019/11/19", "2019/11/20", 
"2019/11/21", "2019/11/22", "2019/11/23", "2019/11/24", "2019/11/25", "2019/11/26", "2019/11/27"]
  }
  else
{
date = ["2018/3/1", "2018/3/2", "2018/3/3", "2018/3/4", "2018/3/5", "2018/3/6", "2018/3/7", "2018/3/8",
"2018/3/9", "2018/3/10", "2018/3/11", "2018/3/12", "2018/3/13", "2018/3/14", "2018/3/15", "2018/3/16", "2018/3/17",
"2018/3/18", "2018/3/19", "2018/3/20", "2018/3/21", "2018/3/22", "2018/3/23", "2018/3/24", "2018/3/25", "2018/3/26",
"2018/3/27", "2018/3/28", "2018/3/29", "2018/3/30", "2018/3/31", "2018/4/1", "2018/4/2", "2018/4/3", "2018/4/4", "2018/4/5",
"2018/4/6", "2018/4/7", "2018/4/8", "2018/4/9", "2018/4/10", "2018/4/11", "2018/4/12", "2018/4/13", "2018/4/14", "2018/4/15",
"2018/4/16", "2018/4/17", "2018/4/18", "2018/4/19", "2018/4/20"];
  }
  function hsv(H){
    var c=1
    var x=1-Math.abs((H/60)%2-1)
    if(0<=H&&H<60){
      return "rgb("+c*255+","+Math.round(x*255)+","+0+")"
    }
    else if(60<=H&&H<120){
      return "rgb("+Math.round(x*255)+","+c*255+","+0+")"
    }
    else if(120<=H&&H<180){
      return "rgb("+0+","+c*255+","+Math.round(x*255)+")"
    }
    else if(180<=H&&H<240){
      return "rgb("+0+","+Math.round(x*255)+","+c*255+")"
    }
    else if(240<=H&&H<300){
      return "rgb("+Math.round(x*255)+","+0+","+c*255+")"
    }
    else if(300<=H&&H<360){
      return "rgb("+c*255+","+0+","+Math.round(x*255)+")"
    }
    }
// set the dimensions and margins of the graph
var h = document.getElementById("box").clientHeight;
var w = document.getElementById("box").clientWidth;
var height = h/2
var width = w/2
var barWidth = 30;
var groupCount=[]
var aa = JSON.parse(JSON.stringify(daa))
var viodata=[]
for(i=0;i<date.length;i++){
  var vd={}
  var ch
    c1 = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })[tt]
    c2 = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['reweight']
    if(type==0||type==1){
      ch=c1
    }
    else if(type==2){
      ch=c1*c2
    }
    groupCount[i]=ch
    vd.num=ch
    vd.type='index'
    viodata.push(vd)
}


// Prepare the data for the box plots
var boxPlotData = [];

var obj = {};
obj["key"] = 0;
obj["counts"] = groupCount;
var gc=JSON.parse(JSON.stringify(groupCount))
gc.sort()
// var sorted=groupCount.sort()
obj["quartile"] = boxQuartiles(gc);
var IQR = obj["quartile"][2]-obj["quartile"][0]
var localMin = obj["quartile"][0]-1.5*IQR
var localMax = obj["quartile"][2]+1.5*IQR
obj["whiskers"] = [localMin, localMax];
boxPlotData.push(obj);


// Compute an ordinal xScale for the keys in boxPlotData
var xScale = d3.scalePoint()
.domain([0,1])
.rangeRound([0, height*1.5-15])
.padding([0.5]);

// Compute a global y scale based on the global counts
// var ran=d3.max(groupCount)-d3.min(groupCount)
// var mid=d3.max(groupCount)+d3.min(groupCount)/2
var min = localMin
var max = localMax
// var botmin = 0
// if(min<=10){
//   botmin = min-1
// }
// else if(min<=20){
//   botmin = min-2
// }
// else{
//   botmin = min-6
// }
console.log(min,max)
// if(type==0){
//   if(ran>=10){
//     min = d3.min(groupCount)-10;
//     max = d3.max(groupCount)+10;
//   }
//   else if(ran>=5&&ran<10){
//     min = d3.min(groupCount)-5;
//     max = d3.max(groupCount)+5;
//   }
//   else if(ran<5){
//     min = d3.min(groupCount)-2;
//     max = d3.max(groupCount)+2;
//   }
// }
// else{
//   if(ran>=100){
//     min = d3.min(groupCount)-80;
//     max = d3.max(groupCount)+80;
//   }
//   else if(ran>=50&&ran<100){
//     min = d3.min(groupCount)-60;
//     max = d3.max(groupCount)+60;
//   }
//   else if(ran<50){
//     min = d3.min(groupCount)-40;
//     max = d3.max(groupCount)+40;
//   }
  
// }
// var dis=0;
// if(type==0||type==1){
//   dis=(mid-min)*ra/30
// }
// else{
//   dis=(mid-min)*ra/20
// }
// var domin=min+dis
// var domax=max-dis;
var yScale = d3.scaleLinear()
.domain([max,min])
.range([0, height*1.5]);
// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
d3.select("#box").selectAll("svg").remove()
var svg = d3.select("#box") .append("svg")
.attr("width",w)
.attr("height",h)
       
var transform = d3.zoomIdentity;
// append a group for the box plot elements

// Build and Show the X scale. It is a band scale like for a boxplot: each group has an dedicated RANGE on the axis. This range has a length of x.bandwidth




// Draw the box plot vertical lines
var g = svg.append("g").attr("transform", function(d){  return("translate(0 ,25)") } )
var verticalLines = g.selectAll(".verticalLines")
.data(boxPlotData)
.enter()
.append("line")
.attr("x1", function(datum) { return xScale(datum.key); })
.attr("y1", function(datum) { return yScale(datum.whiskers[0]); })
.attr("x2", function(datum) { return xScale(datum.key); })
.attr("y2", function(datum) { return yScale(datum.whiskers[1]); })
.attr("stroke", "#000")
.attr("stroke-width", 1)
.attr("fill", "none")
.text("111")

// Draw the boxes of the box plot, filled and on top of vertical lines

var data=[]
for(i=0;i<groupCount.length;i++){
      var da=[]
      da[0]=0
      da[1]=groupCount[i]
      da[2]=date[i]
      data.push(da)
}

var rects = g.selectAll("rect")
            .data(boxPlotData)
            .enter()
            .append("rect")
            .attr("height", function(datum) {
              var quartiles = datum.quartile;
              var height =  yScale(quartiles[0]) - yScale(quartiles[2]); 
              console.log(height)     
              return height;
              })
            .attr("width", barWidth)
            .attr("x", function() { return xScale(0) - barWidth/2; })
            .attr("y", function(datum) { return yScale(datum.quartile[2]); })
            .attr("fill", 
              'transparent')
            .attr("stroke", "#000")
            .attr("stroke-width", 1);
var horizontalLineConfigs = [
// Top whisker
{
x1: function(datum) { return xScale(datum.key) - barWidth/2 },
y1: function(datum) { return yScale(datum.whiskers[0]) },
x2: function(datum) { return xScale(datum.key) + barWidth/2 },
y2: function(datum) { return yScale(datum.whiskers[0]) },
x3: function(datum) { return xScale(datum.key)+35 + barWidth/2 },
y3: function(datum) { return yScale(datum.whiskers[0]) },
text: function(datum) { return (datum.whiskers[0]).toFixed(2) },
},
// Median line
{
x1: function(datum) { return xScale(datum.key) - barWidth/2 },
y1: function(datum) { return yScale(datum.quartile[1]) },
x2: function(datum) { return xScale(datum.key) + barWidth/2 },
y2: function(datum) { return yScale(datum.quartile[1]) },
x3: function(datum) { return xScale(datum.key)+35 + barWidth/2 },
y3: function(datum) { return yScale(datum.quartile[1]) },
text: function(datum) { return (datum.quartile[1]).toFixed(2) },
},
//Q1
{
  x1: function(datum) { return xScale(datum.key) - barWidth/2 },
  y1: function(datum) { return yScale(datum.quartile[0]) },
  x2: function(datum) { return xScale(datum.key) + barWidth/2 },
  y2: function(datum) { return yScale(datum.quartile[0]) },
  x3: function(datum) { return xScale(datum.key)-40 + barWidth/2 },
  y3: function(datum) { return yScale(datum.quartile[0]) },
  text: function(datum) { return (datum.quartile[0]).toFixed(2) },
  },
//Q3
{
  x1: function(datum) { return xScale(datum.key) - barWidth/2 },
  y1: function(datum) { return yScale(datum.quartile[2]) },
  x2: function(datum) { return xScale(datum.key) + barWidth/2 },
  y2: function(datum) { return yScale(datum.quartile[2]) },
  x3: function(datum) { return xScale(datum.key)-40 + barWidth/2 },
  y3: function(datum) { return yScale(datum.quartile[2]) },
  text: function(datum) { return (datum.quartile[2]).toFixed(2) },
  },
// Bottom whisker
{
x1: function(datum) { return xScale(datum.key) - barWidth/2 },
y1: function(datum) { return yScale(datum.whiskers[1]) },
x2: function(datum) { return xScale(datum.key) + barWidth/2 },
y2: function(datum) { return yScale(datum.whiskers[1]) },
x3: function(datum) { return xScale(datum.key)+35 + barWidth/2 },
y3: function(datum) { return yScale(datum.whiskers[1]) },
text: function(datum) { return (datum.whiskers[1]).toFixed(2) },
}
];

for(var i=0; i < horizontalLineConfigs.length; i++) {
var lineConfig = horizontalLineConfigs[i];

// Draw the whiskers at the min for this series
var horizontalLine = g.selectAll(".whiskers")
.data(boxPlotData)
.enter()
.append("line")
.attr("x1", lineConfig.x1)
.attr("y1", lineConfig.y1)
.attr("x2", lineConfig.x2)
.attr("y2", lineConfig.y2)
.attr("stroke", "#000")
.attr("stroke-width", 1)
.attr("fill", "none");
g.selectAll(".whiskers")
.data(boxPlotData)
.enter()
.append("text")
          .attr("class", "box")
          .attr("dy", ".3em")
          .attr("dx", ".3em")
          .attr("x", lineConfig.x3)
          .attr("y", lineConfig.y3)
          .style('font-size','12px')
          .attr("text-anchor", function(d, i) { return i & 1 ? "start" : "end"; })
          .text(lineConfig.text)
}

var botline = g.append('line')
.attr("x1", -w/2)
.attr("y1", yScale(min)+10)
.attr("x2", w)
.attr("y2", yScale(min)+10) 
.attr("stroke", function(){return COLLIST[NAMELIST[name]]})
.attr("stroke-width", 2)
.attr("fill", "none"); 
g.append("text")
.attr('id','va')
.attr("dy", ".3em")
.attr("dx", ".3em")
.attr("x", xScale(0))
.attr("y",  yScale(min)+20)
.style('font-size','12px')
.attr('fill',function(){return COLLIST[NAMELIST[name]]})
.attr("text-anchor", "middle")
.text(val+'￥') 
g.append("text")
.attr('id','va1')
.attr("dy", ".3em")
.attr("dx", ".3em")
.attr("x", xScale(0))
.attr("y",  -15)
.style('font-size','12px')
.attr('fill',function(){return COLLIST[NAMELIST[name]]})
.attr("text-anchor", "middle")
.text(ELIST[name]) 
var cirref = g.append("circle")
      .attr("fill", 'none')
      .attr("stroke", '#ccc')
      .attr("stroke-width", '4')
      .attr("stroke-dasharray", '5,5')
      .attr("cx", xScale(0))
      .attr("cy",yScale(ref))
      .attr("r", 8)
var cenline = g.append('line')
.attr('id','ct')
.attr("x1", xScale(0))
.attr("y1", yScale(min)+10)
.attr("x2", xScale(0))
.attr("y2", yScale(val)) 
.attr("stroke", function(){return COLLIST[NAMELIST[name]]})
.attr("stroke-width", 2)
.attr("fill", "none")
.call(d3.drag()
        .on("start",started)
        .on("drag",dragged)
        .on("end",ended)
    )
var cirreal = g.append('circle')
.attr('id','ci')
.attr('cx',xScale(0))
.attr('cy',yScale(val))
.attr('r',6)
.attr("fill", function(){return COLLIST[NAMELIST[name]]})
.call(d3.drag()
        .on("start",started)
        .on("drag",dragged)
        .on("end",ended)
    )


function boxQuartiles(d) {
return [
  d3.quantile(d, .25),
  d3.quantile(d, .5),
  d3.quantile(d, .75)
];
}

// Perform a numeric sort on an array
function sortNumber(a,b) {
return a - b;
}
function started(d){
        
}
function dragged(d){

    const {
            x,
            y
        } = d3.event
        d3.select(this)
            .attr('cy', y)
        console.log(d3.select('#box').selectAll('text'))
         var linegroup=d3.select('#box').selectAll('line')['_groups'][0]
         var ll = linegroup[linegroup.length-1]
         d3.select(ll).attr('y2',y)
         var textgroup =d3.select('#box').selectAll('text')['_groups'][0]
         console.log(textgroup)
         var tt = textgroup[textgroup.length-2]
         var val2 = d3.select(ll).attr('y2')
         var val = yScale.invert(val2).toFixed(2)
         d3.select(tt).text(val.toString()+'￥')
         VAL = val
}
function ended(d){
    // var na = d.cname
    // var id = parseInt(d3.select(this).attr('id'))
    // var len = datalist.length
    // var tt =d3.select('#right22body').selectAll('text')['_groups'][0][id+len]
    // var va =d3.select(tt).text()
    // var res = parseFloat(va.substring(0,va.length-1))
    // pro(NEW_NEWDATA, date, CURRENT_DATE, d.cname, '当日平均价格', res , 1, FL);

}    
}

    