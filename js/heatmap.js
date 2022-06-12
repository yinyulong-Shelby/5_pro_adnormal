function heat(name, da) {

	//绘制颜色比例尺
	d3.select("#right21head").selectAll("svg").remove()
	var width = document.getElementById("right21body").clientWidth - 20;
	var legendSvg = d3.select('#right21head')
		.append('svg')
		.attr('width', width)
		.attr('height', 40)
		.append('g')
	var defs = legendSvg.append("defs");

	var off = []
	for (var i = 0; i < 11; i++) {
		off[i] = 10 * i.toString() + '%'
	}
	var col = ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#FFFAFA", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]
	var linearGradient = defs.append("linearGradient")
		.attr("id", "linearColor")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "0%")
		.selectAll('stop')
		.data(off)
		.enter().append('stop')
		.attr('offset', function (d, i) {
			return d
		})
		.attr('stop-color', function (d, i) {
			return col[i]
		});

	var colorRect = legendSvg.append("rect")
		.attr("x", width / 2 - 100)
		.attr("y", 15)
		.attr("width", 200)
		.attr("height", 15)
		.style("fill", "url(#linearColor)");

	legendSvg.append('text')
		.attr('class', 'legendTitle')
		.attr('x', width / 2 - 120)
		.attr('y', 27.5)
		.style('text-anchor', 'middle')
		.style('font-size', '12px')
		.text("-0.1");
	legendSvg.append('text')
		.attr('class', 'legendTitle')
		.attr('x', width / 2 + 115)
		.attr('y', 27.5)
		.style('text-anchor', 'middle')
		.style('font-size', '12px')
		.text("0.1");
	legendSvg.append("rect")
		.attr("x", width / 2 + 150)
		.attr("y", 15)
		.attr("width", 30)
		.attr("height", 15)
		.style("fill", "#000");
	legendSvg.append('text')
		.attr('class', 'legendTitle')
		.attr('x', width / 2 + 185)
		.attr('y', 27.5)
		.style('text-anchor', 'start')
		.style('font-size', '12px')
		.text(">0.1 or <-0.1");

		
	var chart = null
	var selectStart = null
	var selectEnd = null
	var invertHighlightRows = false
	var width = document.getElementById("right21body").clientWidth - 100;
	var height = document.getElementById("right21body").clientHeight;
	d3.select("#right21body").selectAll("svg").remove()
	var date = day(FL)
	var aa = JSON.parse(JSON.stringify(GLOBAL_DATA))
	console.log(da)
	var len;
	var st;
	var i
	var ti;
	var form
	var datalist = []

	//针对不同指数类型可能需要调整展示时间长度(我暂时没有做这个)
	// if(FL==0||FL==3){
	// 	len=40
	// 	ti=40
	// 	form="%m/%d"
	len = 40
	for (var i = 0; i < date.length; i++) {
		if (da == date[i]) {
			st = i
			break
		}
	}
	if (st <= 20) {
		st = 0
	}
	else {
		st = st - 20
	}
	for (var i = 0; i < CHOSENLIST.length; i++) {
		datalist.push(ABRES[CHOSENLIST[i]])
	}
	console.log(datalist)
	// }
	// else if(FL==1||FL==4){
	// 	len=26
	// 	ti=13
	// 	form="%m/%d"
	// 	if(sd=='12'||sd=='1/'||sd=='2/'||sd=='3/'||sd=='4/'||sd=='5/'){
	// 		st=0
	// 	}
	// 	else{
	// 		for(i=0;i<date.length;i++){
	// 			if(date[i]=='2019/6/4'){
	// 				st=i
	// 				break;
	// 			}
	// 		}
	// 	}


	// }
	// else if(FL==2||FL==5){
	// 	len=12
	// 	st=0
	// 	ti=12
	// 	form="%y/%m"
	// }

	console.log(ABRES)
	var nn = NAMELIST[name] + "";
	var val = []
	var type = []
	var daa = []
	for (var i = 0; i < CHOSENLIST.length; i++) {
		type.push(SLIST[IDLIST[CHOSENLIST[i]]])
	}
	for (var i = 0; i < datalist.length; i++) {
		var temp = []
		for (var j = st; j < st + len; j++) {
			daa.push(date[j])
			temp.push(datalist[i][date[j]])
		}
		val[i] = temp
	}

	function select(cell) {
		if (!selectStart) {
			selectStart = cell
			chart.setHighlight([{ "start": selectStart, "end": selectStart }])
			chart.updateHighlight()
		} else if (!selectEnd) {
			selectEnd = cell
			chart.setHighlight([{ "start": selectStart, "end": selectEnd }])
			chart.updateHighlight()
		} else {
			selectStart = cell
			selectEnd = null
			chart.setHighlight([{ "start": selectStart, "end": selectStart }])
			chart.updateHighlight()
		}
	}

	function hover(cell) {
		if (selectStart && !selectEnd) {
			if (cell[0] > selectStart[0]) { // column is higher
				chart.setHighlight([{ "start": selectStart, "end": cell }])
				chart.updateHighlight()
			} else if (cell[0] == selectStart[0]) { // same column
				if (!invertHighlightRows) { // not invert rows
					if (cell[1] >= selectStart[1]) { // row is higher or equal
						chart.setHighlight([{ "start": selectStart, "end": cell }])
						chart.updateHighlight()
					} else {
						chart.setHighlight([{ "start": selectStart, "end": selectStart }])
						chart.updateHighlight()
					}
				} else { // invert rows
					if (cell[1] <= selectStart[1]) { // row is lower or equal
						chart.setHighlight([{ "start": selectStart, "end": cell }])
						chart.updateHighlight()
					} else {
						chart.setHighlight([{ "start": selectStart, "end": selectStart }])
						chart.updateHighlight()
					}
				}
			} else {
				chart.setHighlight([{ "start": selectStart, "end": selectStart }])
				chart.updateHighlight()
			}
		}
	}


	function onClick(d, i, j) {
		console.info("Clicked on range " + data.rows[j] + ", time " + data.columns[i] + ", count " + d)
		select([i, j])
	}

	function onMouseOver(d, i, j) {
		document.getElementById("details").innerHTML = "time: " + data.columns[i] + ", range: " + data.rows[j] + ", count: " + d
		hover([i, j])
	}
	let parseTime = d3.timeParse('%Y/%m/%d')
	chart = d3.heatmap(daa, type, ST, ED, ti, form)
		.title("")
		.subtitle("")
		// .legendLabel("Count")
		.width(width)
		.legendTickFormat(d3.format('.0f'))
		.xAxisScale([])
		.yAxisScale([])
		.xAxisLabels([])
		.yAxisLabels([])
		.highlightColor('#936EB5')
		.highlightOpacity('0.4')
		// .onClick(onClick)
		// .onMouseOver(onMouseOver)
		.invertHighlightRows(invertHighlightRows)
		.gridStrokeOpacity(0.5)
		.colorScale(d3.scaleLinear()
			.domain([-0.1, -0.08, -0.06, -0.02, -0.01, 0, 0.01, 0.02, 0.06, 0.08, 0.1])
			.range(["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#FFFAFA", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]))
		.margin({
			top: 30,
			right: 40,
			bottom: 15,
			left: 10
		})
		.legendElement("#main")
		.legendHeight(400)
		.legendMargin({
			top: 0,
			right: 0,
			bottom: 0,
			left: (width - Math.min(width * 0.8, 400)) / 2
		})


	d3.select("#right21body")
		.datum(val)
		.call(chart)
	console.log(val)
}
