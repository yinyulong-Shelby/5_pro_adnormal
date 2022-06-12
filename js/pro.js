// 负责指数的计算以及后续优化后的重新计算
/**
 * 
 * @param {* 原始数据} initialdata 
 * @param {* 所有日期的日期数据} dayli 
 * @param {* 起始时间点} selday 
 * @param {*} name 
 * @param {*} dataname 
 * @param {*} datavalue 
 * @param {*} ad 
 * @param {*} ff 
 */
function pro(initialdata, dayli, selday, name, dataname, datavalue, ad, ff) {
    // console.log(name, dataname, datavalue)
    var a = 5
    var edaname = ''
    if (dataname == '基期价格') {
        edaname = 'base'
    }
    else if (dataname == '当日平均价格') {
        edaname = 'price'
    }
    else if (dataname == '权重') {
        edaname = 'weight'
    }
    var dd = {}
    var dt = {}
    // sday: 起始时间在所有时间点的顺序
    var sday = dayli.indexOf(selday)
    // console.log(sday)
    count = 0
    // dd: 按照时间列表的顺序创建数组的字典
    // dd: { 时间列表index: [ 商品信息字典列表 ] }
    for (j in dayli) {
        jj = []
        dd[j] = jj;
    }

    //将原始数据计算为最底层指数
    for (i in initialdata) {
        for (j in dayli) {

            if ((initialdata[i].date == dayli[j]) && (initialdata[i].date != undefined) && (initialdata[i].flag == "")) {
                var temo = {};
                var temo1 = {}
                temo["name"] = initialdata[i].name
                // 名字转换成id
                temo['id'] = NAMELIST[temo["name"]]
                temo['price'] = parseFloat(initialdata[i].price)
                temo['baseprice'] = parseFloat(initialdata[i].base)
                temo['weight'] = (parseFloat(initialdata[i].weight3)) / 100
                temo['secweight'] = (parseFloat(initialdata[i].weight2)) / 100
                temo['firweight'] = (parseFloat(initialdata[i].weight1)) / 100
                if (temo['baseprice'] != 0) {
                    temo['index'] = temo['price'] / temo['baseprice']
                }
                else {
                    temo['index'] = 0
                }
                temo["uncertainty"] = a / 10
                // console.log(temo)
                var b = (JSON.stringify(temo) == "{}")

                if (b == false) {
                    // 按时间顺序储存商品数据
                    dd[j].push(temo)
                }
            }
        }

    }

    //不同指数类型计算周期和取基期不同
    if ((ff == 1 || ff == 4) && ad == 0) {
        var pri1 = []
        // 总时间长度为357
        for (var i = 0; i < 357; i++) {
            var pri2 = []
            // 遍历dd的每个时间段数据
            for (var j = 0; j < dd[i].length; j++) {
                pri2[j] = dd[i][j].price
            }
            pri1[i] = pri2
        }
        // 按周求每种商品的价格均值
        for (var j = 0; j < 33; j++) {
            var sum = 0
            for (var i = 0; i < 357; i++) {
                sum = sum + pri1[i][j]
                // 按周求均值
                if ((i + 1) % 7 == 0) {
                    for (var k = -6; k < 1; k++) {
                        dd[k + i][j].price = sum / 7
                    }
                    sum = 0
                }
            }
        }
    }
    // 按29个时间节点段求每种商品的价格均值
    if ((ff == 2 || ff == 5) && ad == 0) {
        var pri1 = []
        for (var i = 0; i < 357; i++) {
            var pri2 = []
            for (var j = 0; j < dd[i].length; j++) {
                pri2[j] = dd[i][j].price
            }
            pri1[i] = pri2
        }
        for (var j = 0; j < 33; j++) {
            var sum = 0
            for (var i = 0; i < 357; i++) {
                sum = sum + pri1[i][j]
                if ((i + 1) % 29 == 0) {
                    for (var k = -28; k < 1; k++) {
                        dd[k + i][j].price = sum / 29
                    }
                    sum = 0
                }
            }
        }
    }

    //优化视图修改参数传到这里进行原始数据的修改
    if (ad != 0) {
        // console.log(dd[sday], dd, sday)
        // 筛选数据，修改其相应的值
        dd[sday].find(function (x) { return x.name == name; })[edaname] = parseFloat(datavalue)
        dd[sday].find(function (x) { return x.name == name; })['baseprice'] = dd[sday].find(function (x) { return x.name == name; }).baseprice
        if (dd[sday].find(function (x) { return x.name == name; }).baseprice == 0) {
            dd[sday].find(function (x) { return x.name == name; })['index'] = 0;
        }
        else {
            dd[sday].find(function (x) { return x.name == name; })['index'] = dd[sday].find(function (x) { return x.name == name; }).price / dd[sday].find(function (x) { return x.name == name; }).baseprice
        }
        for (var i = 0; i < initialdata.length; i++) {
            if (initialdata[i]['name'] == name && initialdata[i]['date'] == selday) {
                initialdata[i]['price'] = datavalue.toString()
                console.log(initialdata[i])
            }
        }
    }
    NEW_NEWDATA = JSON.parse(JSON.stringify(initialdata))

    //初始化计算(第一次加载系统)
    if (ad == 0) {
        DD = JSON.parse(JSON.stringify(dd))
        // arr：dd的一级keys列表
        var arr = Object.keys(dd)
        var ar = Object.keys(dd[0])
        // 获取数组长度le
        var le = arr.length - 3;
        var de = {}
        for (i = 0; i < le; i++) {
            for (k = 0; k < Object.keys(dd[i]).length; k++) {
                var nn = dd[i][k]['id']

                if (de[nn] == undefined) {
                    de[nn] = [];
                }
                // de：{ id: [ 该商品的时序index指数列表 ] }
                de[nn].push(dd[i][k]['index']);
            }
        }
        var dhb = {}
        ddw = JSON.parse(JSON.stringify(dd[0]))
        hd = JSON.parse(JSON.stringify(dd[0]))
        for (i = 0; i < 357; i++) {
            dhb[i] = JSON.parse(JSON.stringify(ddw));
            for (j = 0; j < 33; j++) {
                // id 转 name
                var iid = IDLIST[Object.keys(de)[j]]
                if (i == 0) {
                    dhb[i].find(function (x) { return x.name == iid; })['index'] = de[Object.keys(de)[j]][i]
                }
                else {
                    // 后面的指数都是 该项index / 上一项的index
                    dhb[i].find(function (x) { return x.name == iid; })['index'] = de[Object.keys(de)[j]][i] / de[Object.keys(de)[j]][i - 1]
                }

            }
        }

        var arr = Object.keys(dd)
        var ar = Object.keys(dd[0])
        var len = arr.length - 3;
        // we: { id: [ index时序列表 ] }
        var we = {}
        // 按照7个时间节点为一段时间周期
        for (i = 0; i < len / 7; i++) {
            for (j = 0; j < 7; j++) {
                for (k = 0; k < Object.keys(dd[j + i * 7]).length; k++) {
                    var nn = dd[j + i * 7][k]['id']
                    if (we[nn] == undefined) {
                        we[nn] = [];
                    }
                    we[nn].push(dd[j + i * 7][k]['index']);
                }
            }
        }
        // wee: { id: [ 该商品每7天一个周期的index平均值，length：51 ] }
        var wee = {}
        var k = 0;
        for (i in we) {
            var kk = Object.keys(we)[k];
            if (wee[kk] == undefined) {
                wee[kk] = [];
            }
            for (m = 0; m < 51; m++) {
                var sum = 0;
                for (j = 0; j < 7; j++) {
                    sum = sum + we[i][j + m * 7];
                }
                sum = sum / 7
                wee[kk].push(sum);
            }
            k++;
        }
        // ww: {i: 时间顺序: [ 商品字典 ]}
        var ww = {}
        var whb = {}
        dw = JSON.parse(JSON.stringify(dd[0]))
        hw = JSON.parse(JSON.stringify(dd[0]))
        for (i = 0; i < 51; i++) {
            ww[i] = JSON.parse(JSON.stringify(dw));
            for (j = 0; j < 33; j++) {
                var iid = IDLIST[Object.keys(wee)[j]]
                ww[i].find(function (x) { return x.name == iid; })['index'] = JSON.parse(JSON.stringify(wee[Object.keys(wee)[j]][i]))
            }
        }
        // console.log(wee)
        // whb：{时间序列: [ 每个商品的信息字典, index:除第一个，后面都是求前后index比 ] }
        for (i = 0; i < 51; i++) {
            whb[i] = JSON.parse(JSON.stringify(hw));
            for (j = 0; j < 33; j++) {
                var iid = IDLIST[Object.keys(wee)[j]]
                if (i == 0) {
                    whb[i].find(function (x) { return x.name == iid; })['index'] = wee[Object.keys(wee)[j]][i]
                }
                else {
                    whb[i].find(function (x) { return x.name == iid; })['index'] = wee[Object.keys(wee)[j]][i] / wee[Object.keys(wee)[j]][i - 1]
                }
            }
        }
        // 以29个时间节点为一段
        var arr = Object.keys(dd)
        var ar = Object.keys(dd[0])
        var lenn = arr.length - 12;
        var me = {}
        for (i = 0; i < lenn / 29; i++) {
            for (j = 0; j < 29; j++) {
                for (k = 0; k < Object.keys(dd[j + i * 29]).length; k++) {
                    var nn = dd[j + i * 29][k]['id']
                    if (me[nn] == undefined) {
                        me[nn] = [];
                    }
                    me[nn].push(dd[j + i * 29][k]['index']);
                }
            }
        }
        var mee = {}
        var k = 0;
        for (i in me) {
            var kk = Object.keys(me)[k];
            if (mee[kk] == undefined) {
                mee[kk] = [];
            }
            for (m = 0; m < 12; m++) {
                var sum = 0;
                for (j = 0; j < 29; j++) {
                    sum = sum + me[i][j + m * 29];
                }
                sum = sum / 29
                mee[kk].push(sum);
            }
            k++;
        }
        var mm = {}
        var mhb = {}
        dm = JSON.parse(JSON.stringify(dd[0]))
        hm = JSON.parse(JSON.stringify(dd[0]))
        for (i = 0; i < 12; i++) {
            mm[i] = JSON.parse(JSON.stringify(dm));
            for (j = 0; j < 33; j++) {
                var iid = IDLIST[Object.keys(mee)[j]]
                mm[i].find(function (x) { return x.name == iid; })['index'] = mee[Object.keys(mee)[j]][i]
            }
        }
        for (i = 0; i < 12; i++) {
            mhb[i] = JSON.parse(JSON.stringify(hm));
            for (j = 0; j < 33; j++) {
                var iid = IDLIST[Object.keys(mee)[j]]
                if (i == 0) {
                    mhb[i].find(function (x) { return x.name == iid; })['index'] = mee[Object.keys(mee)[j]][i]
                }
                else {
                    mhb[i].find(function (x) { return x.name == iid; })['index'] = mee[Object.keys(mee)[j]][i] / mee[Object.keys(mee)[j]][i - 1]
                }

            }
        }
        
        if (ff == 0) {
            dt = JSON.parse(JSON.stringify(dd))
        }
        else if (ff == 1) {
            dt = JSON.parse(JSON.stringify(ww))
        }
        else if (ff == 2) {
            dt = JSON.parse(JSON.stringify(mm))
        }
        else if (ff == 3) {
            dt = JSON.parse(JSON.stringify(dhb))
        }
        else if (ff == 4) {
            dt = JSON.parse(JSON.stringify(whb))
        }
        else if (ff == 5) {
            dt = JSON.parse(JSON.stringify(mhb))
        }
    }
    //修改参数后的再计算
    else {
        dt = JSON.parse(JSON.stringify(dd))
    }

    // dt 里面的数据都是最底层数据
    //上层指数计算
    var sec = []
    var fir = []
    var sum = []
    // 计算上一级销售额
    for (i in dt) {
        var se = {}; // 第3级
        var fi = {}; // 第2级
        var ta = {}; // 第1级
        var sumsalee = 0;
        for (j in dt[i]) {
            var idd = dt[i][j]['id']
            if (idd == null) break;
            var ids = idd[0] + idd[1] + idd[2];
            var idf = idd[0]
            if (se[ids] == undefined) {
                se[ids] = {}
                se[ids]['basesalee'] = 0
            }
            se[ids]['basesalee'] += dt[i][j].basesalee
            if (fi[idf] == undefined) {
                fi[idf] = {}
                fi[idf]['basesalee'] = 0
            }
            fi[idf]['basesalee'] += dt[i][j].basesalee
            sumsalee += dt[i][j].basesalee
        }
        ta['basesalee'] = sumsalee
        sec.push(se)
        fir.push(fi)
        sum.push(ta)
    }
    //计算权重
    var ds = {}
    // 获取权重
    for (i in dt) {
        // var se = {};
        // var fi = {};
        // var ta = {};
        for (j in dt[i]) {
            // console.log(i,sec[i])
            var id = dt[i][j]['id']
            if (id == null) break;
            var sid = id[0] + id[1] + id[2]
            sec[i][sid]['weight'] = dt[i][j]['secweight']
            fir[i][id[0]]['weight'] = dt[i][j]['firweight']
        }

    }

    //计算二级调整权重之和
    for (i in dt) {
        for (j in dt[i]) {
            var id = dt[i][j].id
            if (id == null) break;
            var ids = id[0] + id[1] + id[2];
            if (sec[i][ids]['sumweight'] == undefined) {
                // sec[i][ids] = {}
                sec[i][ids]['sumweight'] = 0
            }
            if (dt[i][j].index != 0) {
                sec[i][ids]['sumweight'] += dt[i][j].weight;
            }
        }
    }
    //计算二级指数
    for (i in dt) {
        for (j in dt[i]) {
            var id = dt[i][j].id
            if (id == null) break;
            var ids = id[0] + id[1] + id[2] + '';
            var idf = id[0]
            if (sec[i][ids]['index'] == undefined || isNaN(sec[i][ids]['index']) == true) {
                // sec[i][ids] = {}
                sec[i][ids]['index'] = 0
            }
            if (dt[i][j].index != 0) {
                dt[i][j].relweight = dt[i][j].weight / sec[i][ids]['sumweight'];
            }
            else {
                dt[i][j].relweight = 0;
            }
            // 二级指数是三级指数按照其在所有三级指数中的权重比例计算得到的
            sec[i][ids]['index'] += dt[i][j].index * dt[i][j].relweight

        }

    }
    //计算一级调整权重之和
    for (i in sec) {
        for (j in sec[i]) {
            var idl = j
            var ids = idl[0]
            if (!isNaN(parseInt(ids))) {
                if (fir[i][ids]['sumweight'] == undefined) {
                    //     // sec[i][ids] = {}
                    fir[i][ids]['sumweight'] = 0
                }
                if (sec[i][j].index != 0 || sec[i][j].index != NaN) {
                    fir[i][ids]['sumweight'] += sec[i][j].weight
                }
                else {
                    fir[i][ids]['sumweight'] += 0
                }
            }
        }
    }

    //计算一级指数
    for (i in sec) {
        for (j in sec[i]) {
            if (sec[i][j].index != 0) {
                var idl = j
                var ids = idl[0]
                if (!isNaN(parseInt(ids))) {
                    if (fir[i][ids]['index'] == undefined) {
                        // sec[i][ids] = {}
                        fir[i][ids]['index'] = 0
                    }
                    sec[i][j]['relweight'] = sec[i][j].weight / fir[i][ids].sumweight
                    if (fir[i][ids].sumweight == 0) {
                        sec[i][j]['relweight'] = 0
                    }
                    fir[i][ids]['index'] += sec[i][j].index * sec[i][j].relweight

                }

            }
        }

    }
    //计算总调整权重之和
    for (i in fir) {
        for (j in fir[i]) {
            var idl = j
            var ids = idl[0]
            if (sum[i]['sumweight'] == undefined) {
                // sec[i][ids] = {}
                sum[i]['sumweight'] = 0
            }
            if (fir[i][j].index != 0) {
                sum[i]['sumweight'] += fir[i][j].weight
            }
            else {
                sum[i]['sumweight'] += 0
            }
        }
    }
    //计算总指数
    for (i in fir) {
        for (j in fir[i]) {
            if (fir[i][j].index != 0) {
                var idl = j
                var ids = idl[0]
                if (sum[i]['index'] == undefined) {
                    // sec[i][ids] = {}
                    sum[i]['index'] = 0
                }
                fir[i][j]['relweight'] = fir[i][j].weight / sum[i].sumweight
                if (sum[i].sumweight == 0) {
                    fir[i][j]['relweight'] = 0
                }
                sum[i]['index'] += fir[i][j].index * fir[i][j].relweight
            }
            else {
                var idl = j
                var ids = idl[0]
                if (sum[i]['index'] == undefined) {
                    // sec[i][ids] = {}
                    sum[i]['index'] = 0
                }
                fir[i][j]['relweight'] = 0
                if (sum[i].sumweight == 0) {
                    fir[i][j]['relweight'] = 0
                }
                sum[i]['index'] += 0
            }
        }

    }
    THR = JSON.parse(JSON.stringify(dt))
    SEC = JSON.parse(JSON.stringify(sec))
    FIR = JSON.parse(JSON.stringify(fir))
    ALL = JSON.parse(JSON.stringify(sum))

    // 按层次关系把计算结果塞入object(JSON结构的)
    var nodelistc = {}
    var teml = []
    var teml2 = []
    for (i in IDLIST) {
        if (i.length == 1) {
            var temo = {}
            temo["name"] = IDLIST[i]
            temo["index"] = 0
            temo["weight"] = 0
            temo["base"] = 0
            temo['reweight'] = 0
            temo["uncertainty"] = a / 3
            temo["children"] = []
            teml.push(temo)
            nodelistc["children"] = teml;
        }
        else if (i.length == 3) {
            var j = i + "";
            var temo = {}
            temo["name"] = IDLIST[i];
            temo["index"] = 0
            temo["weight"] = 0
            temo['reweight'] = 0
            temo["base"] = 0
            temo["uncertainty"] = a / 5
            temo["children"] = [];
            nodelistc["children"].find(function (x) { return x.name == IDLIST[j[0]]; })["children"].push(temo)
        }
        else if (i.length == 5) {
            var j = i + "";
            var temo = {}
            var mm = j[0] + j[1] + j[2];
            temo["name"] = IDLIST[i];
            temo["index"] = 0
            temo["weight"] = 0
            temo['reweight'] = 0
            temo["base"] = 0
            temo["uncertainty"] = a / 10
            temo['price'] = 0
            // temo['basesalel'] = 0
            // temo['basesalee'] = 0
            nodelistc["children"].find(function (x) { return x.name == IDLIST[j[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].push(temo)
        }
    }
    // 获取时间序列
    var date1 = day(FL);
    var h = 0;
    var te = date1[h];
    var treelist = {}
    nodelist = JSON.parse(JSON.stringify(nodelistc))
    for (i in dt) {
        for (j in dt[i]) {
            var id = dt[i][j].id
            if (id == null) break;
            var ids = id[0] + id[1] + id[2]
            friname = IDLIST[id[0]]
            secname = IDLIST[ids]
            thrname = dt[i][j].name
            // console.log(dt[i][j])
            if (friname != '一级类别' && friname != "") {
                var friid = NAMELIST[friname] + ''
                var idf = friid[0];
                var frindex = parseFloat(fir[i][id[0]].index)
                // var fribas = parseFloat(fir[i][id[0]].basesalee)
                var friweight = parseFloat(fir[i][id[0]].weight)
                var frireweight = parseFloat(fir[i][id[0]].relweight)
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["index"] = 100 * frindex
                // nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["base"] = fribas
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["weight"] = friweight
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["reweight"] = frireweight
            }
            if (secname != '二级类别' && secname != "") {
                var secid = NAMELIST[secname] + ""
                var idf = secid[0];
                var mm = secid[0] + secid[1] + secid[2]
                var secindex = parseFloat(sec[i][ids].index)
                // var secbas = parseFloat(sec[i][ids].basesalee)
                var secweight = parseFloat(sec[i][ids].weight)
                var secreweight = parseFloat(sec[i][ids].relweight)
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["index"] = 100 * secindex
                // nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["base"] = secbas
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["weight"] = secweight
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["reweight"] = secreweight
            }
            var thrid = NAMELIST[thrname] + '';
            var idf = thrid[0];
            var mm = thrid[0] + thrid[1] + thrid[2]
            var thrindex = parseFloat(dt[i][j].index)
            var thrbas = parseFloat(dt[i][j].baseprice)
            var thrweight = parseFloat(dt[i][j].weight)
            var thrreweight = parseFloat(dt[i][j].relweight)
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["index"] = 100 * thrindex
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["base"] = thrbas
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["weight"] = thrweight
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["reweight"] = thrreweight
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["price"] = parseFloat(dt[i][j].price)
        }
        te = date1[h]
        nodelist.name = "总类"
        nodelist["uncertainty"] = a / 2
        nodelist["index"] = sum[i]["index"] * 100;
        if (te != undefined) {
            // 按照时间储存树状图数据
            treelist[te] = nodelist;
        }
        h++;
        nodelist = JSON.parse(JSON.stringify(nodelistc))
    } temo["uncertainty"] = a / 2
   
    //优化时点show按钮TEMP为1(即暂时展示，没有真正修改GLOBAL_DATA)，点apply按钮TEMP为0*(即把GLOBAL_DATA修改了)
    if (TEMP == 0) {
        GLOBAL_DATA = JSON.parse(JSON.stringify(treelist))
        // 绘制堆叠图
        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
        // 绘制树图
        drawtree(GLOBAL_DATA, CURRENT_DATE, CURRENT_NAME, NAMELIST)
    }
    else if (TEMP == 1) {
        var tempda = JSON.parse(JSON.stringify(treelist))
        // console.log(tempda)
        drawstack(CURRENT_NAME, tempda, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
    }
    // 移除Anomaly View里面的svg元素
    d3.select("#right21body").selectAll("svg").remove()
    // 
    heat('总', CURRENT_DATE)
}