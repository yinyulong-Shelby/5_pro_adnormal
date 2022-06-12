function drawtree(data, daa, na, namelist) {
	var mcolor1 = ["#ff5e63", "#6e40aa", "#417de0", "#aff05b", "#efa72f"];
	function hsv(H, V) {
		var c = V * 0.5//V*S
		var x = c * (1 - Math.abs((H / 60) % 2 - 1))
		var m = V - c//V-C
		if (0 <= H && H < 60) {
			return "rgb(" + (c + m) * 255 + "," + (x + m) * 255 + "," + (0 + m) * 255 + ")"
		}
		else if (60 <= H && H < 120) {
			return "rgb(" + (x + m) * 255 + "," + (c + m) * 255 + "," + (0 + m) * 255 + ")"
		}
		else if (120 <= H && H < 180) {
			return "rgb(" + (0 + m) * 255 + "," + (c + m) * 255 + "," + (x + m) * 255 + ")"
		}
		else if (180 <= H && H < 240) {
			return "rgb(" + (0 + m) * 255 + "," + (x + m) * 255 + "," + (c + m) * 255 + ")"
		}
		else if (240 <= H && H < 300) {
			return "rgb(" + (x + m) * 255 + "," + (0 + m) * 255 + "," + (c + m) * 255 + ")"
		}
		else if (300 <= H && H < 360) {
			return "rgb(" + (c + m) * 255 + "," + (0 + m) * 255 + "," + (x + m) * 255 + ")"
		}
	}
	var i = 0,
		duration = 400,
		root;
	d3.select("#left3body").selectAll("svg").remove()
	var width = document.getElementById("left3body").clientWidth - 10;

	var height = 1150;
	var margin = { top: 30, right: 20, bottom: 30, left: 25 },
		barHeight = 20,
		barSpace = 0,
		barWidth = (width - margin.left - margin.right) * 0.8;

	var diagonal = d3.linkHorizontal()
		.x(function (d) { return d.y; })
		.y(function (d) { return d.x; });

	var svg = d3.select("#left3body").append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		//数据读取
	d3.json("data\\cai.json", function (error, flare) {
		d3.json("data\\tea.json", function (error, tea) {
			if (error) throw error;

			if (TYPE == 0) {
				root = d3.hierarchy(flare);
				root.x0 = 0;
				root.y0 = 0;
				function collapse(d) {
					if (d.children) {
						d._children = d.children;
						d._children.forEach(collapse);
						d.children = null;
					}
				}
				// 折叠根节点的每个孩子
				root.children.forEach(collapse);
				update(root);

			}
			else {
				root = d3.hierarchy(tea);
				root.x0 = 0;
				root.y0 = 0;
				update(root);
			}

		});
	});

	//树图的点击交互事件
	function update(source) {
		//Compute the flattened node list.
		var nodes = root.descendants();
		var height = Math.max(1000, nodes.length * barHeight + margin.top + margin.bottom);

		//Compute the "layout". TODO https://github.com/d3/d3-hierarchy/issues/67
		var index = -1,
			count = 0;
		root.eachBefore(function (n) {
			count += barSpace;
			n.style = "node_" + n.depth;
			n.x = ++index * barHeight + count;
			n.y = n.depth * 20;
		});

		// Update the nodes…
		var node = svg.selectAll(".node")
			.data(nodes, function (d) { return d.id || (d.id = ++i); });

		var nodeEnter = node.enter().append("g")
			.attr("class", function (d) { return "node node_" + d.depth + " " + getClass(d); })
			.attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
			.style("opacity", 0);

		//Enter any new nodes at the parent's previous position.
		var c1 = c2 = c3 = c4 = c5 = 0
		nodeEnter.append("circle")
			.attr("r", 6)
			.style("stroke", function (d) {
				var z = NAMELIST[ELIST[d.data.name]] + "";
				if (z == '0') {
					return '#ccc'
				}
				if (d.depth != 3) {
					var c = COLLIST[z]
					return c;
				}
			})
			.style("stroke-width", 2)
			.style("fill", function (d) {
				var z = NAMELIST[ELIST[d.data.name]] + "";
				if (z == '0' || d.depth != 3) {
					return 'white'
				}



				if (z.length == 5 && d.depth == 3) {
					var c = COLLIST[z]
					return c;
				}

			})
			.on("click", click);

		nodeEnter.append("text")
			.attr("dy", 5.5)
			.attr("dx", 10)
			.attr("font-size", "12px")
			.attr("font-weight", "bold")
			.attr('fill', '#5f696d')
			.text(function (d) { return d.data.name; });

		nodeEnter.append("text")
			.attr("dy", 3.5)
			.attr("dx", barWidth)
			.attr("font-family", "FontAwesome")
			.attr("class", "fa")




		//Transition nodes to their new position.
		nodeEnter.transition()
			.duration(duration)
			.attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; })
			.style("opacity", 1);

		node.transition()
			.duration(duration)
			.attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; })
			.style("opacity", 1)


		// Transition exiting nodes to the parent's new position.
		node.exit().transition()
			.duration(duration)
			.attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
			.style("opacity", 0)
			.remove();

		//Update the links…
		var link = svg.selectAll(".link")
			.data(root.links(), function (d) { return d.target.id; });

		//Enter any new links at the parent's previous position.
		link.enter().insert("path", "g")
			.attr("id", "tre")
			.attr("class", function (d) {
				return "link link_" + d.target.depth + " " + getClass(d.target);
			})
			.attr("d", function (d) {
				var o = { x: source.x0, y: source.y0 };
				return elbow({ source: o, target: o });
			})
			.transition()
			.duration(duration)
			.attr("d", elbow);

		//Transition links to their new position.
		link.transition()
			.duration(duration)
			.attr("d", elbow);

		//Transition exiting nodes to the parent's new position.
		link.exit().transition()
			.duration(duration)
			.attr("d", function (d) {
				var o = { x: source.x, y: source.y };
				return elbow({ source: o, target: o });
			})
			.remove();

		//Stash the old positions for transition.
		root.each(function (d) {
			d.x0 = d.x;
			d.y0 = d.y;
		});

	}

	// Toggle children on click.
	var lastClickD = null;
	function click(d) {
		if (d.children) {
			console.log(1, d)
			d._children = d.children;
			d.children = null;
			CURRENT_NAME = ELIST[d.data.name];
			CURRENT_ID = NAMELIST[ELIST[d.data.name]] + '';


			d3.select('#cn').text(function () {
				return 'Current Product: ' + d.data.name;
			})
			aa(day(FL));
			if (NAMELIST[CURRENT_NAME].length == 5) {
			}
			if (ABS == 0) {
				drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
			}
			else {
				heatline(GLOBAL_DATA, CURRENT_NAME);
			}
			var tempcho = CHOSENLIST
			CHOSENLIST = []
			var deletecon = []
			var deletelen = d.data.children.length
			for (var i = 0; i < deletelen; i++) {
				var na = ELIST[d.data.children[i].name]
				deletecon.push(NAMELIST[na])
			}
			var flag = 0
			var cnt = 0
			for (var i = 0; i < tempcho.length + deletelen - 1; i++) {
				if (tempcho[cnt] == deletecon[flag]) {
					if (flag == 0) {
						CHOSENLIST.push(CURRENT_ID)
					}
					flag++
					cnt++
				}
				else {
					CHOSENLIST.push(tempcho[cnt])
					cnt++
				}
			}
			heat(CURRENT_NAME, CURRENT_DATE)
		} else {
			console.log(2, d)
			d.children = d._children;
			d._children = null;
			CURRENT_NAME = ELIST[d.data.name];
			CURRENT_ID = NAMELIST[ELIST[d.data.name]] + '';

			d3.select('#cn').text(function () {
				return 'Current Product: ' + d.data.name;
			})
			if (NAMELIST[CURRENT_NAME].length == 5) {

			}
			aa(day(FL));
			if (ABS == 0) {
				drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
			}
			else {
				heatline(GLOBAL_DATA, CURRENT_NAME);
			}

			var tempcho = CHOSENLIST
			CHOSENLIST = []
			var appendcon = []
			var appendlen = d.children.length
			for (var i = 0; i < appendlen; i++) {
				var na = ELIST[d.children[i].data.name]
				appendcon.push(NAMELIST[na])
			}
			var flag = -1
			var cnt = 0
			for (var i = 0; i < tempcho.length + appendlen - 1; i++) {
				if (tempcho[cnt] == CURRENT_ID) {
					flag = 0
					cnt++
				}
				if (flag >= 0 && flag < appendlen) {
					CHOSENLIST.push(appendcon[flag])
					flag++
				}
				else {
					CHOSENLIST.push(tempcho[cnt])
					cnt++
				}
			}
			heat(CURRENT_NAME, CURRENT_DATE)
	
		}

		update(d);
	}

	function getClass(d) {
		if (d.data.class) {
			return d.data.class
		} else {
			return "";
		}
	}
	function elbow(d) {
		return "M" + d.source.y + "," + d.source.x
			+ "H" + d.source.y
			+ "V" + d.target.x
			+ "H" + d.target.y;
	}
	function col(d) {
		return d._children ? "rgb(241, 160, 160)" : d.children ? "rgb(241, 160, 160)" : "rgb(186, 241, 160)";
	}

	function strokeColor(d) {
		return "#709daf7c";
	}
}