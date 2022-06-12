
function loll(name, dt, daa, tit) {

        var date = day(FL)
        var bef;
        if (dt != date[0]) {
                for (i in date) {
                        if (dt == date[i]) {
                                bef = date[i - 1];
                        }
                }
        }

        //取数据，格式处理
        var ind, wei, bas, basel, basee, pri, chi = 0, nam;
        var data = [];
        var bb = JSON.parse(JSON.stringify(daa))
        var nn = NAMELIST[name] + "";
        var kk;
        if (TYPE == 0) {
                kk = 5;
        } else {
                kk = 6
        }

        if (nn == 0) {
                var occ = [];
                for (i = 1; i <= kk; i++) {
                        var count = bb[dt]["children"][i]["children"].length;
                        var cc;
                        var ccc;
                        var oc = [];
                        for (j = 0; j < count; j++) {
                                cc = bb[dt]["children"][i]
                                ["children"][j]["children"].length;
                                ccc = bb[dt]["children"][i]
                                ["children"][j]["children"];
                                var ctt = []
                                mm = cc
                                for (k = 0; k < mm; k++) {
                                        ctt.push(ccc[k]);
                                }
                                oc = oc.concat(ctt);

                                chi = chi + cc;
                        }
                        occ = occ.concat(oc);
                }
        }
        if (nn.length == 1) {
                var count = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].length;
                var cc;
                var ccc;
                var oc = [];
                for (i = 0; i < count; i++) {
                        cc = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"][i]["children"].length;
                        ccc = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"][i]["children"];
                        var ctt = []
                        mm = cc
                        for (k = 0; k < mm; k++) {

                                //       if(ccc[k].index==0){
                                //         cc = cc-1;
                                //       }
                                //       else if(ccc[k].index!=0){
                                ctt.push(ccc[k]);
                                //       }
                        }
                        oc = oc.concat(ctt);
                        chi = chi + cc;
                }
        }
        if (nn.length == 3) {
                chi = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"].length;
                ch = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"]
                mm = chi
                for (k = 0; k < mm; k++) {

                        //       if(ch[k].index==0){
                        //         chi = chi-1;
                        //       }

                }
        }
        if (nn.length == 5) {
                chi = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"].length;
                ch = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"]
                mm = chi
                for (k = 0; k < mm; k++) {

                        //       if(ch[k].index==0){
                        //         chi = chi-1;
                        //       }

                }
        }
        CH = chi;
        var cut = 0;
        for (var j = 0; j < chi; j++) {
                var da = {};
                da.id = j + 1 + "";
                if (NAMELIST[name] == 0 && occ[j].index != null) {
                        da.nam = occ[j].name;
                        da.enam = ELIST[da.nam]
                        da.ind = occ[j].index.toFixed(2)
                        da.wei = (occ[j].reweight * 100).toFixed(2);
                        da.bas = occ[j].base.toFixed(2);
                        // basel = occ[j].basesalel;
                        // basee = occ[j].basesalee / 10000;
                        da.pri = occ[j].price.toFixed(2);
                        if (da.ind == null) {
                                da.ind = 0;
                        }
                        if (da.pri == null) {
                                da.pri = 0;
                        }
                        if (dt != date[0]) {

                                var com = GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]]; }).index;
                                // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                                if (com < parseFloat(da.ind)) {
                                        if (parseFloat(da.ind) - com > 2.5) {
                                                da.exm = "/img/sss.png";
                                        }
                                        else if (parseFloat(da.ind) - com <= 2.5) {
                                                da.exm = "/img/ss.png";
                                        }

                                }
                                else if (com > parseFloat(da.ind)) {
                                        if (com - parseFloat(da.ind) > 2.5) {
                                                da.exm = "/img/lll.png";
                                        }
                                        else if (com - parseFloat(da.ind) <= 2.5) {
                                                da.exm = "/img/ll.png";
                                        }
                                }
                                else if (com == parseFloat(da.ind)) {
                                        da.exm = "/img/cp.png";
                                }
                        }
                        else {
                                da.exm = "/img/cp.png";
                        }


                }
                if (nn.length == 1 && NAMELIST[name] != 0 && oc[j].index != null) {
                        da.nam = oc[j].name;
                        da.enam = ELIST[da.nam]
                        da.ind = oc[j].index.toFixed(2)
                        da.wei = (oc[j].reweight * 100).toFixed(2);
                        da.bas = oc[j].base.toFixed(2);
                        // basel = occ[j].basesalel;
                        // basee = occ[j].basesalee / 10000;
                        da.pri = oc[j].price.toFixed(2);
                        if (da.ind == null) {
                                da.ind = 0;
                        }
                        if (da.pri == null) {
                                da.pri = 0;
                        }
                        if (dt != date[0]) {

                                var com = GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]]; }).index;
                                // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                                if (com < parseFloat(da.ind)) {
                                        if (parseFloat(da.ind) - com > 2) {
                                                da.exm = "/img/sss.png";
                                        }
                                        else if (parseFloat(da.ind) - com <= 2) {
                                                da.exm = "/img/ss.png";
                                        }

                                }
                                else if (com > parseFloat(da.ind)) {
                                        if (com - parseFloat(da.ind) > 2) {
                                                da.exm = "/img/lll.png";
                                        }
                                        else if (com - parseFloat(da.ind) <= 2) {
                                                da.exm = "/img/ll.png";
                                        }
                                }
                                else if (com == parseFloat(da.ind)) {
                                        da.exm = "/img/cp.png";
                                }
                        }
                        else {
                                da.exm = "/img/cp.png";
                        }
                }
                if (nn.length == 3
                        && bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].index != null) {
                        da.nam = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].name;
                        da.ind = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].index.toFixed(2)
                        da.wei = (bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].reweight * 100).toFixed(2);
                        da.bas = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].base.toFixed(2);
                        da.enam = ELIST[da.nam]
                        // basel = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        // ["children"][j].basesalel;
                        // basee = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        // ["children"][j].basesalee / 10000;
                        da.pri = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].price.toFixed(2);
                        if (da.ind == null) {
                                da.ind = 0;
                        }
                        if (da.pri == null) {
                                da.pri = 0;
                        }
                        if (dt != date[0]) {

                                var com = GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]]; }).index;
                                // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                                if (com < parseFloat(da.ind)) {
                                        if (parseFloat(da.ind) - com > 2) {
                                                da.exm = "/img/sss.png";
                                        }
                                        else if (parseFloat(da.ind) - com <= 2) {
                                                da.exm = "/img/ss.png";
                                        }

                                }
                                else if (com > parseFloat(da.ind)) {
                                        if (com - parseFloat(da.ind) > 2) {
                                                da.exm = "/img/lll.png";
                                        }
                                        else if (com - parseFloat(da.ind) <= 2) {
                                                da.exm = "/img/ll.png";
                                        }
                                }
                                else if (com == parseFloat(da.ind)) {
                                        da.exm = "/img/cp.png";
                                }
                        }
                        else {
                                da.exm = "/img/cp.png";
                        }
                }
                if (nn.length == 5
                        && bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].index != null) {
                        da.nam = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].name;
                        da.enam = ELIST[da.nam]
                        da.ind = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].index.toFixed(2)
                        da.wei = (bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].reweight * 100).toFixed(2);
                        da.bas = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].base.toFixed(2);
                        // basel = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        // ["children"][j].basesalel;
                        // basee = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        // ["children"][j].basesalee / 10000;
                        da.pri = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                        ["children"][j].price.toFixed(2);
                        if (da.ind == null) {
                                da.ind = 0;
                        }
                        if (da.pri == null) {
                                da.pri = 0;
                        }
                        if (dt != date[0]) {

                                var com = GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]]; }).index;
                                // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                                if (com < parseFloat(da.ind)) {
                                        if (parseFloat(da.ind) - com > 2) {
                                                da.exm = "/img/sss.png";
                                        }
                                        else if (parseFloat(da.ind) - com <= 2) {
                                                da.exm = "/img/ss.png";
                                        }

                                }
                                else if (com > parseFloat(da.ind)) {
                                        if (com - parseFloat(da.ind) > 2) {
                                                da.exm = "/img/lll.png";
                                        }
                                        else if (com - parseFloat(da.ind) <= 2) {
                                                da.exm = "/img/ll.png";
                                        }
                                }
                                else if (com == parseFloat(da.ind)) {
                                        da.exm = "/img/cp.png";
                                }
                        }
                        else {
                                da.exm = "/img/cp.png";
                        }
                }



                if (da.nam != undefined) {
                        data.push(da);
                        da.id = cut;
                        cut++;
                }
        }
        datt = data
        OLDSJ = JSON.parse(JSON.stringify(data))

        var datalist = []
        for (i = 0; i < datt.length; i++) {
                var temp = {}
                temp['name'] = datt[i]['enam']
                temp['cname'] = datt[i]['nam']
                if (tit == 0) {
                        temp['value'] = parseFloat(datt[i]['pri']).toFixed(2)
                }
                else if (tit == 1) {
                        temp['value'] = parseFloat(datt[i]['ind']).toFixed(2)
                }
                else if (tit == 2) {
                        temp['value'] = parseFloat(datt[i]['wei']).toFixed(2)
                }
                else if (tit == 3) {
                        temp['value'] = parseFloat(datt[i]['bas']).toFixed(2)
                }
                datalist.push(temp)
        }

        //绘图
        var margin = { top: 0, right: 0, bottom: 0, left: 0 };
        var height = 1000;
        var width = document.getElementById("right12body").clientWidth - 5;
        d3.select("#right12body").selectAll("svg").remove()
        var svg = d3.select("#right12body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

        var y = d3.scalePoint()
                .domain(d3.range(data.length))
                .rangeRound([margin.top, height - margin.bottom])
                .padding(1)

        var yAxis = g => g
                .attr("transform", `translate(120,0)`)
                .call(d3.axisLeft(y).tickFormat(i => data[i]['enam']).tickSize(0).tickPadding(6))
                .call(g => g.selectAll(".tick text").filter(i => data[i]['enam'])
                        .attr("text-anchor", "end")
                        .style('font-size', '12px')
                        .attr('fill', i => COLLIST[NAMELIST[data[i]['nam']]])
                        .attr("x", -6))

        svg.append("g")
                .attr("stroke", "#ccc")
                .attr("stroke-width", 2)
                .selectAll("line")
                .data(datalist)
                .enter()
                .append("line")
                .attr('id', (d, i) => i)
                .attr("x1", 120)
                .attr("x2", function (d) {
                        var va = parseFloat(d.value)
                        if (tit == 0) {
                                return va * 2 + 120
                        }
                        else if (tit == 1) {
                                return va / 1.4 + 120
                        }
                        else if (tit == 2) {
                                return va * 1.4 + 120
                        }
                        else if (tit == 3) {
                                return va * 2 + 120
                        }
                })
                .attr("y1", (d, i) => y(i))
                .attr("y2", (d, i) => y(i))


        svg.append("g")
                .call(yAxis);

        svg.append("g")
                .selectAll("circle")
                .data(datalist)
                .enter()
                .append("circle")
                .attr('id', (d, i) => i)
                .attr("fill", d => COLLIST[NAMELIST[d.cname]])
                .attr("cx", function (d) {
                        var va = parseFloat(d.value)
                        if (tit == 0) {
                                return va * 2 + 120
                        }
                        else if (tit == 1) {
                                return va / 1.4 + 120
                        }
                        else if (tit == 2) {
                                return va * 1.4 + 120
                        }
                        else if (tit == 3) {
                                return va * 2 + 120
                        }
                })
                .attr("cy", (d, i) => y(i))
                .attr("r", function (d) {
                        if (ABS == 1) {
                                var id = NAMELIST[d.cname] + ''
                                if (ABRES[id][CURRENT_DATE] != 0) {
                                        return 10
                                }
                                else {
                                        return 6;
                                }
                        }
                        else {
                                return 6
                        }
                })


        svg.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .selectAll("text")
                .data(datalist)
                .enter()
                .append("text")
                .attr('id', (d, i) => i)
                .attr("text-anchor", d => d.value < 0 ? "end" : "start")
                .attr("x", function (d) {
                        var va = parseFloat(d.value)
                        if (tit == 0) {
                                return va * 2 + 130
                        }
                        else if (tit == 1) {
                                return va / 1.4 + 130
                        }
                        else if (tit == 2) {
                                return va * 1.4 + 130
                        }
                        else if (tit == 3) {
                                return va * 2 + 130
                        }
                })
                .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .style('font-size', '12px')
                .text(function (d) {
                        if (tit == 0) {
                                return d.value + '￥'
                        }
                        else if (tit == 1) {
                                return d.value + '%'
                        }
                        else if (tit == 2) {
                                return d.value + '%'
                        }
                        else if (tit == 3) {
                                return d.value + '￥'
                        }
                })
                .on('click', function (d) {
                        if (tit == 0) {
                                var aa = JSON.parse(JSON.stringify(GLOBAL_DATA))
                                var pos;
                                var name = d.cname;
                                NAA = name
                                var pr;
                                var ys = [];
                                for (var i = 0; i < date.length; i++) {
                                        if (date[i] == CURRENT_DATE) {
                                                pos = i + 1;
                                                break;
                                        }
                                }
                                // console.log(pos);
                                if (pos <= 10) {
                                        for (i = 0; i < pos - 1; i++) {
                                                pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[i] = pr;
                                        }
                                        for (i = pos; i <= 20; i++) {
                                                // console.log(aa[date[i]])
                                                pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[i - 1] = pr;

                                        }
                                }
                                else {
                                        var k = 0;
                                        for (i = pos - 10; i < pos; i++) {
                                                pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[k] = pr;
                                                k++;
                                        }
                                        for (i = pos + 1; i <= pos + 10; i++) {
                                                pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                                                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[k] = pr;
                                                k++;
                                        }
                                }
                                // console.log(ys);
                                var ref = fit(ys, pos);
                                boxplot(d.cname, 0, GLOBAL_DATA, d.value, ref)
                                d3.select('#box').style('visibility', 'visible')
                        }

                })
}