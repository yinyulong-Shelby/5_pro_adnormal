function par(name, date, da) {
  var zz = JSON.parse(JSON.stringify(da))
  var id = NAMELIST[name] + ''

  //数据获取，并整理结构
  var margin = { top: 10, right: 10, bottom: 10, left: 10 };
  var width = document.getElementById("right22body").clientWidth - 20;
  var set = zz[date]
  var data = {}
  var lineda = {}
  if (id == '0') {
    data['name'] = id
    data['value'] = '8'
    data['line'] = INDLIST[id]
    lineda[id] = INDLIST[id]
    data['children'] = []
    for (var i = 1; i < set['children'].length; i++) {
      var id1 = NAMELIST[set['children'][i]['name']]
      if (parseFloat(ABRES[id1][date]) != 0) {
        var temp1 = {}
        temp1['name'] = id1
        temp1['value'] = ''
        temp1['line'] = INDLIST[id1]
        lineda[id1] = INDLIST[id1]
        temp1['children'] = []
        for (var j = 0; j < set['children'][i]['children'].length; j++) {
          var id2 = NAMELIST[set['children'][i]['children'][j]['name']] + ''
          if (ABRES[id2][date] != 0) {
            var temp2 = {}
            temp2['name'] = id2
            temp2['value'] = ''
            temp2['line'] = INDLIST[id2]
            lineda[id2] = INDLIST[id2]
            temp2['children'] = []
            for (var k = 0; k < set['children'][i]['children'][j]['children'].length; k++) {
              var id3 = NAMELIST[set['children'][i]['children'][j]['children'][k]['name']] + ''
              if (ABRES[id3][date] != 0) {
                var temp3 = {}
                temp3['name'] = id3
                temp3['value'] = ''
                temp3['line'] = INDLIST[id3]
                lineda[id3] = INDLIST[id3]
                temp2['children'].push(temp3)
              }
            }
            temp1['children'].push(temp2)
          }
        }
        data['children'].push(temp1)
      }

    }
    for (var i = 0; i < data['children'].length; i++) {
      var val1 = 8 / data['children'].length
      data['children'][i]['value'] = val1.toString()
      for (var j = 0; j < data['children'][i]['children'].length; j++) {
        var val2 = val1 / data['children'][i]['children'].length
        data['children'][i]['children'][j]['value'] = val2.toString()
        for (var k = 0; k < data['children'][i]['children'][j]['children'].length; k++) {
          var val3 = val2 / data['children'][i]['children'][j]['children'].length
          data['children'][i]['children'][j]['children'][k]['value'] = val3.toString()
        }
      }
    }
  }
  else if (id.length == 1 && id != '0') {
    data['name'] = id
    data['value'] = '8'
    data['line'] = INDLIST[id]
    lineda[id] = INDLIST[id]
    data['children'] = []
    var set1 = set['children'].find(function (x) { return x.name == name; })
    for (var i = 0; i < set1['children'].length; i++) {
      var id1 = NAMELIST[set1['children'][i]['name']]
      if (parseFloat(ABRES[id1][date]) != 0) {
        var temp1 = {}
        temp1['name'] = id1
        temp1['value'] = ''
        temp1['line'] = INDLIST[id1]
        lineda[id1] = INDLIST[id1]
        temp1['children'] = []
        for (var j = 0; j < set1['children'][i]['children'].length; j++) {
          var id2 = NAMELIST[set1['children'][i]['children'][j]['name']] + ''
          if (ABRES[id2][date] != 0) {
            var temp2 = {}
            temp2['name'] = id2
            temp2['value'] = ''
            temp2['line'] = INDLIST[id2]
            lineda[id2] = INDLIST[id2]
            temp2['children'] = []
            temp1['children'].push(temp2)
          }
        }
        data['children'].push(temp1)
      }

    }
    for (var i = 0; i < data['children'].length; i++) {
      var val1 = 8 / data['children'].length
      data['children'][i]['value'] = val1.toString()
      for (var j = 0; j < data['children'][i]['children'].length; j++) {
        var val2 = val1 / data['children'][i]['children'].length
        data['children'][i]['children'][j]['value'] = val2.toString()
      }
    }
  }
  else if (id.length == 3) {
    data['name'] = id
    data['value'] = '8'
    data['line'] = INDLIST[id]
    lineda[id] = INDLIST[id]
    data['children'] = []
    var set1 = set['children'].find(function (x) { return x.name == IDLIST[id.substring(0, 1)]; })['children'].find(function (x) { return x.name == name; })
    for (var i = 0; i < set1['children'].length; i++) {
      var id1 = NAMELIST[set1['children'][i]['name']]
      if (parseFloat(ABRES[id1][date]) != 0) {
        var temp1 = {}
        temp1['name'] = id1
        temp1['value'] = ''
        temp1['line'] = INDLIST[id1]
        lineda[id1] = INDLIST[id1]
        temp1['children'] = []
        data['children'].push(temp1)
      }

    }
    for (var i = 0; i < data['children'].length; i++) {
      var val1 = 8 / data['children'].length
      data['children'][i]['value'] = val1.toString()
    }
  }

  //绘图
  let tooltip1 = d3.select('body')
    .append('div')
    .attr("id", "draw")
    .attr("width", "50")
    .attr("height", "100")
    .style('position', 'absolute')
    .style('z-index', '30')
    .style('color', 'black')
    .style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
    .style('font-size', '16px')
    .style('font-weight', 'bold')
    .text('')

  d3.select("#right22body").selectAll("svg").remove()
  var height = document.getElementById("right22body").clientHeight - 30;
  let partition = d3.partition()
    .size([width, height])
  let color = d3.scaleOrdinal(d3.schemeCategory10)
  let hierarchyData = d3.hierarchy(data)
  // 数据转化,取所有节点的数组
  let partitionData = partition(hierarchyData).descendants()
  // 绘图
  let svg = d3.select('#right22body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  let g = svg.selectAll('g')
    .data(partitionData)
    .enter()
    .append('g')
    .attr('id', function (d, i) { return 'g' + i; })

  g.append('rect')
    .attr('x', function (d) { console.log(d); return d.x0 + 5 })
    .attr('y', function (d) { return d.y0 + 5 })
    .attr('width', function (d) { return d.x1 - d.x0 - 10 })
    .attr('height', function (d) { return d.y1 - d.y0 - 10 })
    .attr('id', function (d, i) { return 'rect' + i; })
    .style('stroke', function (d) { return COLLIST[d.data.name] })
    .style('stroke-width', '2px')
    .attr('rx', '15')
    .style('fill', 'none')
  g.append('text')
    .attr('x', function (d) { return d.x0 + (d.x1 - d.x0) / 2 })
    .attr('y', function (d) { return d.y1 - 10 })
    // .attr('dx', function (d) { return (d.x1 - d.x0) / 2 }) // 文字水平居中
    // .attr('dy', function (d) { return d.y1-d.y0-10 }) // 文字垂直居中,有点瑕疵
    .attr('font-size', '12px') // 文字按深度缩小
    .attr("text-anchor", "middle")
    .text(function (d) { return ELIST[IDLIST[d.data.name]] })

  var da = []
  for (var k in ABRES[0]) {
    da.push(k)
  }
  for (i = 0; i < Object.keys(lineda).length; i++) {
    var pos = Object.keys(lineda)[i]
    var rr = d3.select('#rect' + i)['_groups'][0][0]
    var x0 = parseFloat(rr.getAttribute('x'))
    var y0 = parseFloat(rr.getAttribute('y'))
    var width = parseFloat(rr.getAttribute('width'))
    var height = parseFloat(rr.getAttribute('height'))
    let yScale = d3.scaleLinear().domain([-10, 250]).range([y0 + height, y0])
    let xScale = d3.scaleLinear().domain([0, 358]).range([x0 + 10, x0 + width - 10])
    var line = d3.line()
      .x(function (d, i) { return xScale(i) })
      .y(function (d) { return yScale(d) })
      .curve(d3.curveBasis)
    var newg = d3.select('#g' + i).selectAll('circle')
      .data(lineda[pos])
      .enter()
    newg.append('path')
      .attr('d', function (d) { return line(lineda[pos]) })
      .attr('stroke-width', '1')
      .attr('stroke', '#ccc')
      .attr('fill', 'none')
    newg.append('circle')
      .attr('cx', function (d, i) { return xScale(parseInt(i)) })
      .attr('cy', function (d, i) { return yScale(parseFloat(d)) })
      .attr('r', function (d, i) {
        if (DA[i] == CURRENT_DATE) {
          return '3'
        }
        else {
          return '1'
        }
      })
      .attr('fill', function (d, i) {
        if (ABRES[pos][da[i - 2]] != 0) {
          // console.log(da[0],da[i])
          return 'red'
        }
        else {
          return 'none'
        }
      })
      .on("mouseover", function (d, i) {

        if (ABRES[pos][da[i - 2]] != 0) {
          return tooltip1.style('visibility', 'visible').text("O " + "date: " + DA[i] + '\n' + "index: " + d.toFixed(2) + '%')
        }
        else {
          return tooltip1.style('visibility', 'hidden')
        }


      })
      .on('mousemove', function (d, i) {
        return tooltip1.style('top', (event.pageY - 10) + 'px').style('left', (event.pageX + 10) + 'px')
      })
      .on('mouseout', function (d, i) {

        return tooltip1.style('visibility', 'hidden')
      })
    // .attr('width',function(d){return d.x1-d.x0})
    // .attr('height',function(d){return d.y1-d.y0})
  }

}