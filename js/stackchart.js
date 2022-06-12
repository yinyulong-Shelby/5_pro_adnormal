//切换时间长度，以匹配不同类型的指数 
function day(ff) {
  if (TYPE == 0) {
    if (ff == 0) {
      date1 = ["2018/12/1", "2018/12/2", "2018/12/3", "2018/12/4", "2018/12/5", "2018/12/6", "2018/12/7", "2018/12/8", "2018/12/9", "2018/12/10",
        "2018/12/11", "2018/12/12", "2018/12/13", "2018/12/14", "2018/12/15", "2018/12/16", "2018/12/17", "2018/12/18", "2018/12/19", "2018/12/20",
        "2018/12/21", "2018/12/22", "2018/12/23", "2018/12/24", "2018/12/25", "2018/12/26", "2018/12/27", "2018/12/28", "2018/12/29", "2018/12/30", "2018/12/31",
        "2019/1/1", "2019/1/2", "2019/1/3", "2019/1/4", "2019/1/5", "2019/1/6", "2019/1/7", "2019/1/8", "2019/1/9", "2019/1/10",
        "2019/1/11", "2019/1/12", "2019/1/13", "2019/1/14", "2019/1/15", "2019/1/16", "2019/1/17", "2019/1/18", "2019/1/19", "2019/1/20",
        "2019/1/21", "2019/1/22", "2019/1/23", "2019/1/24", "2019/1/25", "2019/1/26", "2019/1/27", "2019/1/28", "2019/1/29", "2019/1/30", "2019/1/31",
        "2019/2/1", "2019/2/2", "2019/2/3", "2019/2/4", "2019/2/5", "2019/2/6", "2019/2/7", "2019/2/9", "2019/2/10",
        "2019/2/11", "2019/2/12", "2019/2/13", "2019/2/14", "2019/2/15", "2019/2/16", "2019/2/17", "2019/2/18", "2019/2/19", "2019/2/20",
        "2019/2/21", "2019/2/22", "2019/2/23", "2019/2/24", "2019/2/25", "2019/2/26", "2019/2/27", "2019/2/28",
        "2019/3/2", "2019/3/3", "2019/3/4", "2019/3/5", "2019/3/6", "2019/3/7", "2019/3/8", "2019/3/9", "2019/3/10",
        "2019/3/11", "2019/3/12", "2019/3/13", "2019/3/14", "2019/3/15", "2019/3/16", "2019/3/17", "2019/3/18", "2019/3/19", "2019/3/20",
        "2019/3/21", "2019/3/22", "2019/3/23", "2019/3/24", "2019/3/25", "2019/3/26", "2019/3/27", "2019/3/28", "2019/3/29", "2019/3/30", "2019/3/31",
        "2019/4/1", "2019/4/2", "2019/4/3", "2019/4/4", "2019/4/5", "2019/4/6", "2019/4/7", "2019/4/8", "2019/4/9", "2019/4/10",
        "2019/4/11", "2019/4/12", "2019/4/14", "2019/4/15", "2019/4/16", "2019/4/17", "2019/4/18", "2019/4/19", "2019/4/20",
        "2019/4/21", "2019/4/22", "2019/4/23", "2019/4/24", "2019/4/25", "2019/4/26", "2019/4/27", "2019/4/28", "2019/4/29", "2019/4/30",
        "2019/5/1", "2019/5/2", "2019/5/3", "2019/5/4", "2019/5/5", "2019/5/6", "2019/5/7", "2019/5/8", "2019/5/9", "2019/5/10",
        "2019/5/11", "2019/5/12", "2019/5/13", "2019/5/14", "2019/5/15", "2019/5/16", "2019/5/17", "2019/5/18", "2019/5/19", "2019/5/20",
        "2019/5/21", "2019/5/22", "2019/5/23", "2019/5/24", "2019/5/25", "2019/5/26", "2019/5/27", "2019/5/28", "2019/5/29", "2019/5/30", "2019/5/31",
        "2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5", "2019/6/6", "2019/6/7", "2019/6/8", "2019/6/10",
        "2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15", "2019/6/16", "2019/6/17", "2019/6/18", "2019/6/19", "2019/6/20",
        "2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28", "2019/6/29", "2019/6/30",
        "2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5", "2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9", "2019/7/10",
        "2019/7/11", "2019/7/12", "2019/7/13", "2019/7/14", "2019/7/15", "2019/7/16", "2019/7/17", "2019/7/18", "2019/7/19", "2019/7/20",
        "2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28", "2019/7/29", "2019/7/30", "2019/7/31",
        "2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5", "2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9", "2019/8/10",
        "2019/8/11", "2019/8/12", "2019/8/13", "2019/8/14", "2019/8/15", "2019/8/16", "2019/8/17", "2019/8/18", "2019/8/19", "2019/8/20",
        "2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28", "2019/8/29", "2019/8/30", "2019/8/31",
        "2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5", "2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9", "2019/9/10",
        "2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15", "2019/9/16", "2019/9/17", "2019/9/18", "2019/9/19", "2019/9/20",
        "2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25", "2019/9/26", "2019/9/27", "2019/9/28", "2019/9/29", "2019/9/30",
        "2019/10/1", "2019/10/2", "2019/10/3", "2019/10/4", "2019/10/5", "2019/10/6", "2019/10/7", "2019/10/8", "2019/10/9", "2019/10/10",
        "2019/10/11", "2019/10/12", "2019/10/13", "2019/10/14", "2019/10/15", "2019/10/16", "2019/10/17", "2019/10/18", "2019/10/19", "2019/10/20",
        "2019/10/21", "2019/10/22", "2019/10/23", "2019/10/24", "2019/10/25", "2019/10/26", "2019/10/27", "2019/10/28", "2019/10/29", "2019/10/30", "2019/10/31",
        "2019/11/1", "2019/11/2", "2019/11/3", "2019/11/4", "2019/11/5", "2019/11/6", "2019/11/7", "2019/11/8", "2019/11/9", "2019/11/10",
        "2019/11/11", "2019/11/12", "2019/11/13", "2019/11/14", "2019/11/15", "2019/11/16", "2019/11/17", "2019/11/18", "2019/11/19", "2019/11/20",
        "2019/11/21", "2019/11/22", "2019/11/23", "2019/11/24", "2019/11/25", "2019/11/26", "2019/11/27"]
    }
    else if (ff == 3) {
      date1 = ["2018/12/1", "2018/12/2", "2018/12/3", "2018/12/4", "2018/12/5", "2018/12/6", "2018/12/7", "2018/12/8", "2018/12/9", "2018/12/10",
        "2018/12/11", "2018/12/12", "2018/12/13", "2018/12/14", "2018/12/15", "2018/12/16", "2018/12/17", "2018/12/18", "2018/12/19", "2018/12/20",
        "2018/12/21", "2018/12/22", "2018/12/23", "2018/12/24", "2018/12/25", "2018/12/26", "2018/12/27", "2018/12/28", "2018/12/29", "2018/12/30", "2018/12/31",
        "2019/1/1", "2019/1/2", "2019/1/3", "2019/1/4", "2019/1/5", "2019/1/6", "2019/1/7", "2019/1/8", "2019/1/9", "2019/1/10",
        "2019/1/11", "2019/1/12", "2019/1/13", "2019/1/14", "2019/1/15", "2019/1/16", "2019/1/17", "2019/1/18", "2019/1/19", "2019/1/20",
        "2019/1/21", "2019/1/22", "2019/1/23", "2019/1/24", "2019/1/25", "2019/1/26", "2019/1/27", "2019/1/28", "2019/1/29", "2019/1/30", "2019/1/31",
        "2019/2/1", "2019/2/2", "2019/2/3", "2019/2/4", "2019/2/5", "2019/2/6", "2019/2/7", "2019/2/9", "2019/2/10",
        "2019/2/11", "2019/2/12", "2019/2/13", "2019/2/14", "2019/2/15", "2019/2/16", "2019/2/17", "2019/2/18", "2019/2/19", "2019/2/20",
        "2019/2/21", "2019/2/22", "2019/2/23", "2019/2/24", "2019/2/25", "2019/2/26", "2019/2/27", "2019/2/28",
        "2019/3/2", "2019/3/3", "2019/3/4", "2019/3/5", "2019/3/6", "2019/3/7", "2019/3/8", "2019/3/9", "2019/3/10",
        "2019/3/11", "2019/3/12", "2019/3/13", "2019/3/14", "2019/3/15", "2019/3/16", "2019/3/17", "2019/3/18", "2019/3/19", "2019/3/20",
        "2019/3/21", "2019/3/22", "2019/3/23", "2019/3/24", "2019/3/25", "2019/3/26", "2019/3/27", "2019/3/28", "2019/3/29", "2019/3/30", "2019/3/31",
        "2019/4/1", "2019/4/2", "2019/4/3", "2019/4/4", "2019/4/5", "2019/4/6", "2019/4/7", "2019/4/8", "2019/4/9", "2019/4/10",
        "2019/4/11", "2019/4/12", "2019/4/14", "2019/4/15", "2019/4/16", "2019/4/17", "2019/4/18", "2019/4/19", "2019/4/20",
        "2019/4/21", "2019/4/22", "2019/4/23", "2019/4/24", "2019/4/25", "2019/4/26", "2019/4/27", "2019/4/28", "2019/4/29", "2019/4/30",
        "2019/5/1", "2019/5/2", "2019/5/3", "2019/5/4", "2019/5/5", "2019/5/6", "2019/5/7", "2019/5/8", "2019/5/9", "2019/5/10",
        "2019/5/11", "2019/5/12", "2019/5/13", "2019/5/14", "2019/5/15", "2019/5/16", "2019/5/17", "2019/5/18", "2019/5/19", "2019/5/20",
        "2019/5/21", "2019/5/22", "2019/5/23", "2019/5/24", "2019/5/25", "2019/5/26", "2019/5/27", "2019/5/28", "2019/5/29", "2019/5/30", "2019/5/31",
        "2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5", "2019/6/6", "2019/6/7", "2019/6/8", "2019/6/10",
        "2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15", "2019/6/16", "2019/6/17", "2019/6/18", "2019/6/19", "2019/6/20",
        "2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28", "2019/6/29", "2019/6/30",
        "2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5", "2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9", "2019/7/10",
        "2019/7/11", "2019/7/12", "2019/7/13", "2019/7/14", "2019/7/15", "2019/7/16", "2019/7/17", "2019/7/18", "2019/7/19", "2019/7/20",
        "2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28", "2019/7/29", "2019/7/30", "2019/7/31",
        "2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5", "2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9", "2019/8/10",
        "2019/8/11", "2019/8/12", "2019/8/13", "2019/8/14", "2019/8/15", "2019/8/16", "2019/8/17", "2019/8/18", "2019/8/19", "2019/8/20",
        "2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28", "2019/8/29", "2019/8/30", "2019/8/31",
        "2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5", "2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9", "2019/9/10",
        "2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15", "2019/9/16", "2019/9/17", "2019/9/18", "2019/9/19", "2019/9/20",
        "2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25", "2019/9/26", "2019/9/27", "2019/9/28", "2019/9/29", "2019/9/30",
        "2019/10/1", "2019/10/2", "2019/10/3", "2019/10/4", "2019/10/5", "2019/10/6", "2019/10/7", "2019/10/8", "2019/10/9", "2019/10/10",
        "2019/10/11", "2019/10/12", "2019/10/13", "2019/10/14", "2019/10/15", "2019/10/16", "2019/10/17", "2019/10/18", "2019/10/19", "2019/10/20",
        "2019/10/21", "2019/10/22", "2019/10/23", "2019/10/24", "2019/10/25", "2019/10/26", "2019/10/27", "2019/10/28", "2019/10/29", "2019/10/30", "2019/10/31",
        "2019/11/1", "2019/11/2", "2019/11/3", "2019/11/4", "2019/11/5", "2019/11/6", "2019/11/7", "2019/11/8", "2019/11/9", "2019/11/10",
        "2019/11/11", "2019/11/12", "2019/11/13", "2019/11/14", "2019/11/15", "2019/11/16", "2019/11/17", "2019/11/18", "2019/11/19", "2019/11/20",
        "2019/11/21", "2019/11/22", "2019/11/23", "2019/11/24", "2019/11/25", "2019/11/26"]
    }
    else if (ff == 1 || ff == 4) {
      var date1 = []
      var i;
      var da = ["2018/12/1", "2018/12/2", "2018/12/3", "2018/12/4", "2018/12/5", "2018/12/6", "2018/12/7", "2018/12/8", "2018/12/9", "2018/12/10",
        "2018/12/11", "2018/12/12", "2018/12/13", "2018/12/14", "2018/12/15", "2018/12/16", "2018/12/17", "2018/12/18", "2018/12/19", "2018/12/20",
        "2018/12/21", "2018/12/22", "2018/12/23", "2018/12/24", "2018/12/25", "2018/12/26", "2018/12/27", "2018/12/28", "2018/12/29", "2018/12/30", "2018/12/31",
        "2019/1/1", "2019/1/2", "2019/1/3", "2019/1/4", "2019/1/5", "2019/1/6", "2019/1/7", "2019/1/8", "2019/1/9", "2019/1/10",
        "2019/1/11", "2019/1/12", "2019/1/13", "2019/1/14", "2019/1/15", "2019/1/16", "2019/1/17", "2019/1/18", "2019/1/19", "2019/1/20",
        "2019/1/21", "2019/1/22", "2019/1/23", "2019/1/24", "2019/1/25", "2019/1/26", "2019/1/27", "2019/1/28", "2019/1/29", "2019/1/30", "2019/1/31",
        "2019/2/1", "2019/2/2", "2019/2/3", "2019/2/4", "2019/2/5", "2019/2/6", "2019/2/7", "2019/2/9", "2019/2/10",
        "2019/2/11", "2019/2/12", "2019/2/13", "2019/2/14", "2019/2/15", "2019/2/16", "2019/2/17", "2019/2/18", "2019/2/19", "2019/2/20",
        "2019/2/21", "2019/2/22", "2019/2/23", "2019/2/24", "2019/2/25", "2019/2/26", "2019/2/27", "2019/2/28",
        "2019/3/2", "2019/3/3", "2019/3/4", "2019/3/5", "2019/3/6", "2019/3/7", "2019/3/8", "2019/3/9", "2019/3/10",
        "2019/3/11", "2019/3/12", "2019/3/13", "2019/3/14", "2019/3/15", "2019/3/16", "2019/3/17", "2019/3/18", "2019/3/19", "2019/3/20",
        "2019/3/21", "2019/3/22", "2019/3/23", "2019/3/24", "2019/3/25", "2019/3/26", "2019/3/27", "2019/3/28", "2019/3/29", "2019/3/30", "2019/3/31",
        "2019/4/1", "2019/4/2", "2019/4/3", "2019/4/4", "2019/4/5", "2019/4/6", "2019/4/7", "2019/4/8", "2019/4/9", "2019/4/10",
        "2019/4/11", "2019/4/12", "2019/4/14", "2019/4/15", "2019/4/16", "2019/4/17", "2019/4/18", "2019/4/19", "2019/4/20",
        "2019/4/21", "2019/4/22", "2019/4/23", "2019/4/24", "2019/4/25", "2019/4/26", "2019/4/27", "2019/4/28", "2019/4/29", "2019/4/30",
        "2019/5/1", "2019/5/2", "2019/5/3", "2019/5/4", "2019/5/5", "2019/5/6", "2019/5/7", "2019/5/8", "2019/5/9", "2019/5/10",
        "2019/5/11", "2019/5/12", "2019/5/13", "2019/5/14", "2019/5/15", "2019/5/16", "2019/5/17", "2019/5/18", "2019/5/19", "2019/5/20",
        "2019/5/21", "2019/5/22", "2019/5/23", "2019/5/24", "2019/5/25", "2019/5/26", "2019/5/27", "2019/5/28", "2019/5/29", "2019/5/30", "2019/5/31",
        "2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5", "2019/6/6", "2019/6/7", "2019/6/8", "2019/6/10",
        "2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15", "2019/6/16", "2019/6/17", "2019/6/18", "2019/6/19", "2019/6/20",
        "2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28", "2019/6/29", "2019/6/30",
        "2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5", "2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9", "2019/7/10",
        "2019/7/11", "2019/7/12", "2019/7/13", "2019/7/14", "2019/7/15", "2019/7/16", "2019/7/17", "2019/7/18", "2019/7/19", "2019/7/20",
        "2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28", "2019/7/29", "2019/7/30", "2019/7/31",
        "2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5", "2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9", "2019/8/10",
        "2019/8/11", "2019/8/12", "2019/8/13", "2019/8/14", "2019/8/15", "2019/8/16", "2019/8/17", "2019/8/18", "2019/8/19", "2019/8/20",
        "2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28", "2019/8/29", "2019/8/30", "2019/8/31",
        "2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5", "2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9", "2019/9/10",
        "2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15", "2019/9/16", "2019/9/17", "2019/9/18", "2019/9/19", "2019/9/20",
        "2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25", "2019/9/26", "2019/9/27", "2019/9/28", "2019/9/29", "2019/9/30",
        "2019/10/1", "2019/10/2", "2019/10/3", "2019/10/4", "2019/10/5", "2019/10/6", "2019/10/7", "2019/10/8", "2019/10/9", "2019/10/10",
        "2019/10/11", "2019/10/12", "2019/10/13", "2019/10/14", "2019/10/15", "2019/10/16", "2019/10/17", "2019/10/18", "2019/10/19", "2019/10/20",
        "2019/10/21", "2019/10/22", "2019/10/23", "2019/10/24", "2019/10/25", "2019/10/26", "2019/10/27", "2019/10/28", "2019/10/29", "2019/10/30", "2019/10/31",
        "2019/11/1", "2019/11/2", "2019/11/3", "2019/11/4", "2019/11/5", "2019/11/6", "2019/11/7", "2019/11/8", "2019/11/9", "2019/11/10",
        "2019/11/11", "2019/11/12", "2019/11/13", "2019/11/14", "2019/11/15", "2019/11/16", "2019/11/17", "2019/11/18", "2019/11/19", "2019/11/20",
        "2019/11/21", "2019/11/22", "2019/11/23", "2019/11/24", "2019/11/25", "2019/11/26", "2019/11/27"]
      for (i = 0; i < 357; i = i + 7) {
        date1.push(da[i]);
      }
    }
    else if (ff == 2 || ff == 5) {
      date1 = ['2018/12/1', '2019/1/1', '2019/2/1', '2019/3/2', '2019/4/1', '2019/5/1', '2019/6/1', '2019/7/1', '2019/8/1', '2019/9/1', '2019/10/1', '2019/11/1']
    }
  }
  else {
    date1 = ["2018/3/1", "2018/3/2", "2018/3/3", "2018/3/4", "2018/3/5", "2018/3/6", "2018/3/7", "2018/3/8",
      "2018/3/9", "2018/3/10", "2018/3/11", "2018/3/12", "2018/3/13", "2018/3/14", "2018/3/15", "2018/3/16", "2018/3/17",
      "2018/3/18", "2018/3/19", "2018/3/20", "2018/3/21", "2018/3/22", "2018/3/23", "2018/3/24", "2018/3/25", "2018/3/26",
      "2018/3/27", "2018/3/28", "2018/3/29", "2018/3/30", "2018/3/31", "2018/4/1", "2018/4/2", "2018/4/3", "2018/4/4", "2018/4/5",
      "2018/4/6", "2018/4/7", "2018/4/8", "2018/4/9", "2018/4/10", "2018/4/11", "2018/4/12", "2018/4/13", "2018/4/14", "2018/4/15",
      "2018/4/16", "2018/4/17", "2018/4/18", "2018/4/19", "2018/4/20"];
  }
  return date1;
}

//hsv颜色转换(已弃用)
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

dom = document.getElementById("right11body");
// 堆叠面积图是用Echarts实现的
var myChart1 = echarts.init(dom);
var app = {};


function randomsort(a, b) {
  return Math.random() > .5 ? -1 : 1;
}
function areasort(a, b) {
  var suma = 0
  var sumb = 0
  var avea = 0
  var aveb = 0
  for (var i = 0; i < a.data.length; i++) {
    suma = suma + a.data[i]
  }
  avea = suma / a.data.length
  for (var i = 0; i < b.data.length; i++) {
    sumb = sumb + b.data[i]
  }
  aveb = sumb / b.data.length

  // console.log(avea,aveb)
  return aveb - avea;
}

//初始点击，最后点击
//#region 
var triggerAction = function (action, selected) {
  legend = [];

  for (name in selected) {
    if (selected.hasOwnProperty(name)) {
      legend.push({ name: name });
    }
  }
  myChart1.dispatchAction({
    type: action,
    batch: legend
  });
};

var isFirstUnSelect = function (selected) {

  var unSelectedCount = 0;
  for (name in selected) {
    if (!selected.hasOwnProperty(name)) {
      continue;
    }

    if (selected[name] == false) {
      ++unSelectedCount;
    }
  }
  return unSelectedCount == 1;
};

var isAllUnSelected = function (selected) {
  var selectedCount = 0;
  for (name in selected) {
    if (!selected.hasOwnProperty(name)) {
      continue;
    }

    // 所有 selected Object 里面 true 代表 selected， false 代表 unselected
    if (selected[name] == true) {
      ++selectedCount;
    }
  }
  return selectedCount == 0;
};
myChart1.on('legendselectchanged', function (obj) {
  var selected = obj.selected;
  if (selected != undefined) {
    var legend = obj.name;
    var id = NAMELIST[legend]
    var drawname
    if (id.length == 1) {
      drawname = "总"
    }
    else if (id.length == 3) {
      drawname = IDLIST[id[0]]
    }
    else if (id.length == 5) {
      drawname = IDLIST[id[0] + id[1] + id[2]]
    }
    var temo = {}
    temo['drawname'] = drawname;
    temo['selected'] = selected;
    console.log(OPERATING_HISTORY)
    OPERATING_HISTORY.push(temo)
    // 使用 legendToggleSelect Action 会重新触发 legendselectchanged Event，导致本函数重复运行
    // 使得 无 selected 对象
    // if (selected != undefined) {
    //   if (isFirstUnSelect(selected)) {
    //     triggerAction('legendToggleSelect', selected);
    //   } else if (isAllUnSelected(selected)) {
    //     triggerAction('legendSelect', selected);
    //   }
    // }
  }
});
//#endregion
//新加上鼠标右击事件
myChart1.getZr().on('contextmenu', showMenu);


function showMenu(param) {
  // console.log(myChart1._chartsMap)
  var pointInPixel = [param.offsetX, param.offsetY];
  // if (myChart1.containPixel('grid', pointInPixel)) {
  var fill = param.topTarget.style.fill
  var nu = 0
  var iid
  var op = myChart1.getOption();
  console.log(op)
  if (op.id == 0) {
    iid = (nu + 1) + ''
  }
  else {
    nu = nu + 1;
    if (nu < 10) {
      nu = '0' + nu
    }
    iid = op.id + nu;
  }
  CLICK_NAM = IDLIST[iid]
  var menu = document.getElementById("bg");
  menu.style.left = param.offsetX - 100 + 'px';
  menu.style.top = param.offsetY - 100 + 'px';
  menu.style.display = "block";
  // }
}



//去除默认的鼠标事件
var tree = document.getElementById("right11");
tree.oncontextmenu = function () { return false; };

//back
var listd = document.getElementById('mnd');
listd.addEventListener('click', function (event) {


  var idd = NAMELIST[DRAWNAME] + ''
  var lastname = ''
  if (idd != 0) {
    if (idd.length == 1) {
      lastname = IDLIST[0]
    }
    else {
      lastname = IDLIST[idd.substring(0, idd.length - 2)]
    }
  }
  var selected = {}
  selected[CLICK_NAM] = true
  var temo = {}
  temo['drawname'] = DRAWNAME;
  temo['selected'] = selected;
  OPERATING_HISTORY.push(temo)
  console.log(DRAWNAME)
  menu.style.display = "none";
  drawstack(lastname, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
}, false);
//select

var lists = document.getElementById('mns');
lists.addEventListener('click', function (event) {

  CURRENT_NAME = CLICK_NAM
  DDD.push(CLICK_NAM);
  if (CLICK_NAM != undefined) {
    // drawtree(GLOBAL_DATA,CURRENT_DATE,CURRENT_NAME,NAMELIST)
    // creatTable(CLICK_NAM, CURRENT_DATE,GLOBAL_DATA,TIT);
    // smoothed_z_score_test(CLICK_NAM,GLOBAL_DATA)
    // trees(CLICK_NAM, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST,FF)
    // parallel(CLICK_NAM,CURRENT_DATE,GLOBAL_DATA);
    aa(day(FL));

  }
  if (NAMELIST[CLICK_NAM].length != 5) {
    drawstack(CLICK_NAM, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
  }
  myChart1.dispatchAction({
    type: 'downplay',       //选中图例。
    name: CLICK_NAM // 图例名称
  });

  // var selected = {}
  // selected[nam]=true
  var temo = {}
  temo['drawname'] = CLICK_NAM;
  temo['selected'] = {}

  OPERATING_HISTORY.push(temo)
  console.log(OPERATING_HISTORY)
  menu.style.display = "none";
}, false);

//图上点击
//#region
var menu = document.getElementById("bg");
myChart1.getZr().on('click', function (params) {

  menu.style.display = "none";
  var pointInPixel = [params.offsetX, params.offsetY];
  if (myChart1.containPixel('grid', pointInPixel)) {
    /*此处添加具体执行代码*/
    var fill = params.topTarget.style.fill
    var nu = 0
    var iid
    var op = myChart1.getOption();
    if (op.id == 0) {
      iid = (nu + 1) + ''
    }
    else {
      nu = nu + 1;
      if (nu < 10) {
        nu = '0' + nu
      }
      iid = op.id + nu;
    }
    var nam = IDLIST[iid]
    // console.log(nam)
    myChart1.dispatchAction({
      type: 'legendUnSelect',       //选中图例。
      name: nam // 图例名称
    });
    var selected = {}
    for (i in myChart1._chartsMap) {
      var nm = myChart1._chartsMap[i].__model.name
      selected[nm] = myChart1._chartsMap[i].__alive
    }
    selected[nam] = true

    var temo = {}
    temo['drawname'] = DRAWNAME;
    temo['selected'] = selected;
    OPERATING_HISTORY.push(temo)
  }
});
//图上点击
//#region
myChart1.getZr().on('click', function (params) {
  var pointInPixel = [params.offsetX, params.offsetY];
  if (myChart1.containPixel('grid', pointInPixel)) {
    /*此处添加具体执行代码*/
    var fill = params.topTarget.style.fill
    var nu = 0
    var iid
    var op = myChart1.getOption();
    if (op.id == 0) {
      iid = (nu + 1) + ''
    }
    else {
      nu = nu + 1;
      if (nu < 10) {
        nu = '0' + nu
      }
      iid = op.id + nu;
    }
    var nam = IDLIST[iid]
    myChart1.dispatchAction({
      type: 'legendUnSelect',       //选中图例。
      name: nam // 图例名称
    });
    var selected = {}
    selected[nam] = true
    var temo = {}
    temo['drawname'] = DRAWNAME;
    temo['selected'] = selected;
    OPERATING_HISTORY.push(temo)
  }
});
//改变图标
myChart1.getZr().on('mousemove', function (params) {
  var pointInPixel = [params.offsetX, params.offsetY];
  if (myChart1.containPixel('grid', pointInPixel)) {
    myChart1.getZr().setCursorStyle('pointer');
  };
});
myChart1.on('mouseout', function (params) {
  var pointInPixel = [params.offsetX, params.offsetY];
  if (!myChart1.containPixel('grid', pointInPixel)) {
    myChart1.getZr().setCursorStyle('default');
  };
});
//#endregion
//正常点击
myChart1.on('click', function (params) {
  myChart1.dispatchAction({
    type: 'legendUnSelect',       //选中图例。
    name: params.seriesName // 图例名称
  });
  var selected = {}
  selected[nam] = true
  var temo = {}
  temo['drawname'] = DRAWNAME;
  temo['selected'] = selected;
  OPERATING_HISTORY.push(temo)
})

//#region tooltip
function tipFormatter(prams) {
  return ' O ' + prams.seriesName + '</br>' + 'Date：' + prams.name + '</br>' + 'Contribution：' + parseFloat(prams.data).toFixed(2) + '%'
  var divWarp = $('<div class="BoxWrap"/>');
  var divW = $('<div class="BoxW"/>');
  var divContent = $('<div class = "horn">');
  var divlt = $('<div class = "lt">');
  var divrt = $('<div class = "rt">');
  var divrb = $('<div class = "rb">');
  var divlb = $('<div class = "lb">');
  var divTriangle = $('<div class ="triangle-down hotel-triangle-position">');
  var divFirst
  // prams.forEach(function(item) {
  if (prams.data) {
    var daya = $('<p>').text(' ' + ' Date ： ' + prams.name).css({ "color": "rgba(60,65,60,0.7)", "fontSize": "15px" })
    var dat = $('<p>').text(' ' + ' Contribution： ' + ' : ' + parseFloat(prams.data).toFixed(2)).css({ "color": "rgba(60,65,60,0.7)", "fontSize": "15px" })
    var span = $('<p>').text(" " + " " + ' O ' + prams.seriesName).css("color", prams.color).css("fontSize", "20px");
    divFirst = divContent.append(span).append(daya).append(dat)
  }
  // });
  divFirst = divContent.append(divlt).append(divrt).append(divrb).append(divlb);
  var div = divWarp.append(divFirst).append(divTriangle);
  var div = divW.append(divWarp)
  return div.html()
}

//堆叠图默认样式的设定
function aa(date) {
  option = {
    grid: {
      x: '4%',
      x2: '3%',
      y: '20%',
      y2: '15%',
      bottom: "15%",
      tops: "5%"
    },
    line: {
      itemStyle: {
        normal: {
          // 拐点上显示数值
          color: "#2ec7c9",
          label: {
            show: true
          },
          borderColor: 'red',  // 拐点边框颜色
          lineStyle: {
            width: 5,  // 设置线宽
            color: 'red'
          }
        }
      }
    },

    id: 0,
    tooltip: {
      trigger: 'item',
      backgroundColor: 'transparent',
      textStyle: {
        color: "black",
        fontSize: 16,
        fontWeight: 'bold'
      },
      formatter: function (prams) {
        return tipFormatter(prams);
      },
      padding: [0, 0],
    },
    dataZoom: [{
      type: 'slider',//图表下方的伸缩条
      show: true, //是否显示
      realtime: true, //拖动时，是否实时更新系列的视图
      start: 0, //伸缩条开始位置（1-100），可以随时更改
      end: 100, //伸缩条结束位置（1-100），可以随时更改
      height: 15,
      bottom: '2%',
      backgroundColor: "#fff",
      filterMode: 'filter',
      dataBackground: { //数据阴影的样式。 //阴影的线条样式
        areaStyle: {
        }, //阴影的填充样式
      },
    }],
    legend: {
      "icon": "rectangle",
      "top": '8%',
      "left": '20%',
      "itemGap": 15,
      'itemWidth': 10,
      'orient': 'horizontal',
      temGap: 0,
      itemWidth: 10,
      itemHeight: 10,
      data: [],
      type: 'scroll',
      pageIcons:
      {
        horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
      },

      pageIconColor: '#6495ed', //翻页下一页的三角按钮颜色
      pageIconInactiveColor: '#aaa', //翻页（即翻页到头时）
      pageIconSize: 11, //翻页按钮大小
      pageFormatter: '',//隐藏翻页的数字
      pageButtonItemGap: -6,//翻页按钮的两个之间的间距
    },
    toolbox: {
      show: true,
      itemSize: 20,                                 //工具栏 icon 的大小
      itemGap: 20,
      right: '5%',
      top: '6%',
      feature: {
        mark: { show: true },
        myRedo: {
          show: false,
          title: 'Redo',
          icon: 'image://img/redo.png',
          onclick: function () {

            var peek = OPERATING_REDO.peek()
            OPERATING_HISTORY.push(peek)
            if (peek.drawname != DRAWNAME) {
              drawstack(peek.drawname, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
            }
            for (i in peek.selected) {
              if (peek.selected[i] == false) {
                myChart1.dispatchAction({
                  type: 'legendUnSelect',       //选中图例。
                  name: i // 图例名称
                });
              }
              else if (peek.selected[i] == true) {
                myChart1.dispatchAction({
                  type: 'legendSelect',       //选中图例。
                  name: i // 图例名称
                });
              }
            }
            OPERATING_REDO.pop()
          }

        },
        myUndo: {
          show: false,
          title: 'Undo',
          icon: 'image://img/undo.png',
          onclick: function (d) {
            var peek = OPERATING_HISTORY.peek()
            OPERATING_REDO.push(peek)
            if (peek.drawname != DRAWNAME) {
              drawstack(peek.drawname, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
            }
            for (i in peek.selected) {
              if (peek.selected[i] == true) {
                myChart1.dispatchAction({
                  type: 'legendSelect',       //选中图例。
                  name: i // 图例名称
                });
              }
              else {
                myChart1.dispatchAction({
                  type: 'legendUnSelect',       //选中图例。
                  name: i // 图例名称
                });
              }
            }
            OPERATING_HISTORY.pop()
          }
        },
        mySort: {
          show: false,
          title: 'Sorted',
          icon: 'image://img/sort.png',
          onclick: function (d) {
            drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
          }
        },
        myInitial: {
          show: false,
          title: 'Initial',
          icon: 'image://img/initial.png',
          onclick: function (d) {
            ST = 0
            ED = 357
            drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
          }
        },

        magicType: {
          show: false,
          title: { bar: 'Bar', line: 'Line' },
          // icon:{bar:""} ,
          icon: {
            bar: 'image://img/zz.png',
            line: 'image://img/zx.png'
          },
          type: ['bar', 'line'],

        },
        //   dataZoom :{                             //数据区域缩放。目前只支持直角坐标系的缩放
        //     show: true,                         //是否显示该工具。
        //     title:"缩放",                       //缩放和还原的标题文本
        //     xAxisIndex:0,                       //指定哪些 xAxis 被控制。如果缺省则控制所有的x轴。如果设置为 false 则不控制任何x轴。如果设置成 3 则控制 axisIndex 为 3 的x轴。如果设置为 [0, 3] 则控制 axisIndex 为 0 和 3 的x轴
        //     yAxisIndex:false,                   //指定哪些 yAxis 被控制。如果缺省则控制所有的y轴。如果设置为 false 则不控制任何y轴。如果设置成 3 则控制 axisIndex 为 3 的y轴。如果设置为 [0, 3] 则控制 axisIndex 为 0 和 3 的y轴
        // },
      }
    },
    calculable: false,
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: date
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {

      }
    ]
  };

}
aa(day(FL));

//异常展示版堆叠图
function heatline(da, na) {
  var aa = JSON.parse(JSON.stringify(da))
  var date = day(FL)
  var z = NAMELIST[na] + ''
  console.log(aa, na, z)
  var te = []
  for (var i = 0; i < date.length; i++) {
    if (z == '0') {
      // console.log(aa['index'])
      var nn = aa[date[i]]['index']
      te[i] = [i, nn]
      // te[i]=
    }
    else if (z.length == 1 && z != '0') {
      var nn = aa[date[i]]['children'].find(function (x) { return x.name == na })['index']
      te[i] = [i, nn]
    }
    else if (z.length == 3) {
      var nn = aa[date[i]]['children'].find(function (x) { return x.name == IDLIST[z.substring(0, 1)]; })
      ['children'].find(function (x) { return x.name == na })['index']
      te[i] = [i, nn]
    }
    else if (z.length == 5) {
      var nn = aa[date[i]]['children'].find(function (x) { return x.name == IDLIST[z.substring(0, 1)]; })
      ['children'].find(function (x) { return x.name == IDLIST[z.substring(0, 3)]; })
      ['children'].find(function (x) { return x.name == na })['index']
      te[i] = [i, nn]
    }
  }


  $("#myChart1").removeAttr("_echarts_instance_").empty();


  var co = d3.scaleLinear()
    .domain([-0.1, -0.08, -0.06, -0.02, -0.01, 0, 0.01, 0.02, 0.06, 0.08, 0.1])
    .range(["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#FFFAFA", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]);

  var pi = []
  var keys = Object.keys(ABRES[z])
  console.log()
  for (var j = 0; j < keys.length; j++) {
    var val = ABRES[z][keys[j]]
    var pp = {}
    pp.gt = j - 0.5
    pp.lt = j + 0.5
    if (val != 0 && val != undefined) {
      pp.color = co(val)
    }
    else {
      pp.color = 'white'
    }
    pi.push(pp)

  }
  console.log(pi)
  var option1 = {
    grid: {
      x: '4%',
      x2: '3%',
      y: '20%',
      y2: '15%',
      bottom: "15%",
      tops: "5%"
    },
    dataZoom: [{
      type: 'slider',//图表下方的伸缩条
      show: true, //是否显示
      realtime: true, //拖动时，是否实时更新系列的视图
      start: 0, //伸缩条开始位置（1-100），可以随时更改
      end: 100, //伸缩条结束位置（1-100），可以随时更改
      height: 15,
      bottom: '2%',
      backgroundColor: "#fff",
      filterMode: 'filter',
      dataBackground: { //数据阴影的样式。 //阴影的线条样式
        areaStyle: {
        }, //阴影的填充样式
      },
    }],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '30%']
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: pi
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#778899',
          width: 1
        },
        areaStyle: {
        },
        data: te
      }
    ]
  };

  option1 && myChart1.setOption(option1, true);
}

//获取数据并绘制堆叠图
/**
 * llist: 时序树状图数据，
 * dayleft：起始日期在dateList里面的序号
 * dayright：终止日期在dateList里面的序号
 */
function drawstack(name, llist, dayleft, dayright, namelist, idlist, cc, datt) {
  // console.log(dayleft,dayright)
  var date11 = day(FL)
  // console.log(date11)
  var date1 = []
  var k = 0
  // 转存date数据
  for (var i = dayleft; i <= dayright; i++) {
    date1[k] = date11[i];
    k++;
  }
  var z = JSON.parse(JSON.stringify(llist))
  var list = {}

  for (var i = 0; i < date1.length; i++) {
    var temp = {}
    temp.index = z[date11[i]].index
    temp.name = "总类"
    temp.uncertainty = 2.5
    var tt = []
    // 储存除第一个子元素外所有的子元素(因为第一个子元素是 “总类”)
    for (var j = 1; j < z[date11[i]]['children'].length; j++) {
      tt[j - 1] = z[date11[i]]['children'][j]
    }
    temp.children = tt
    list[date11[i]] = temp
  }
  // console.log(list)
  var arr = Object.keys(list);
  var aa = {}
  if (FL == 0) {
    for (var i = 0; i < arr.length - 1; i++) {
      aa[date1[i]] = list[date1[i]]
    }
  }
  else {
    aa = JSON.parse(JSON.stringify(list))
  }
  // console.log(date1);
  DRAWNAME = name
  // var dl;
  // var dr;
  // var oDate1 = new Date(dayleft);
  // var oDate2 = new Date(dayright);
  // if (oDate1.getTime() > oDate2.getTime()) {
  //   dl = dayright;
  //   dr = dayleft;
  // } else {
  //   dl = dayleft;
  //   dr = dayright;
  // }
  // var le = date1.indexOf(dl)
  // var ri = date1.indexOf(dr) + 1
  option.xAxis[0]['data'] = date1
  // console.log(option.yAxis[0])
  var jage = date1
  // .removeAttr(): 移除括号里面的属性
  // .empty(): 移除被选元素的所有子节点和内容
  $("#myChart1").removeAttr("_echarts_instance_").empty();
  var id = namelist[name] + '';
  var list1 = JSON.parse(JSON.stringify(aa))
  var da = []
  var me = []
  option.id = id
  // 判断id是多少(js的 == 号 会先转换两边变量的数据类型，再比较值)
  // 按照id绘制堆叠图
  if (id == 0) {
    for (i in list1) {
      // 当前时间在date1列表里面时
      if (jage.includes(i) == true) {
        // 获取子集元素
        for (j in list1[i]['children']) {
          var na = ELIST[list1[i]['children'][j].name]
          if (da.find(function (x) { return x.name == na }) == null && (na != 'Generality') && (na != '茶') && (na != '总')) {
            var temo = {}
            temo.name = na;
            temo.type = "line";
            temo.data = []
            temo.stack = '总'
            temo.smooth = true
            if (NAMELIST[ELIST[na]] != undefined) {
              col = COLLIST[NAMELIST[ELIST[na]]]
            }

            // console.log(na)
            // temo.markLine = {
            //   symbol:'none',
            //       data: [
            //           [
            //               {coord: [datt, 0]},{coord: [datt, 180]}
            //           ]
            //       ],
            //   lineStyle: {
            //     normal: {
            //       type: 'dotted',
            //       color: 'red',
            //     },
            //   },
            //   }
            temo.lineStyle = {
              normal: {
                color: cc,//折线的颜色
                width: '0',//折线粗细
                type: 'dotted'
              }
            }
            temo.areaStyle = { normal: { color: col } },
            da.push(temo)
            me.push(na)
            // reweight: 当前节点的权重占所有子集节点权重和的比例
            da.find(function (x) { return x.name == na }).data.push(parseFloat(list1[i]['children'][j].reweight) * parseFloat(list1[i]['children'][j].index))
          }
          else if ((na != 'Generality') && (na != '茶')) {
            da.find(function (x) { return x.name == na }).data.push(parseFloat(list1[i]['children'][j].reweight) * parseFloat(list1[i]['children'][j].index))
          }
        }
      }

    }
  }
  else if (id.length == 1) {
    for (i in list1) {
      if (jage.includes(i) == true) {
        var tee = list1[i]['children'].find(function (x) { return x.name == idlist[id] })['children']
        for (j in tee) {
          var na = ELIST[tee[j].name]
          if (da.find(function (x) { return x.name == na }) == null && (na != 'Generality') && (na != '茶')) {
            var temo = {}
            temo.name = na;
            temo.type = "line";
            temo.stack = '总'
            if (NAMELIST[ELIST[na]] != undefined) {
              col = COLLIST[NAMELIST[ELIST[na]]]
            }
            console.log(col)
            temo.data = []
            temo.smooth = true
            // temo.markLine = {
            //      symbol:'none',
            //       data: [
            //           [
            //               {coord: [datt, 0]},{coord: [datt, 180]}
            //           ]
            //       ],
            //   lineStyle: {
            //     normal: {
            //       type: 'dotted',
            //       color: 'red',
            //     },
            //   },
            //   }
            temo.lineStyle = {
              normal: {
                color: cc,//折线的颜色
                width: '0'//折线粗细
              }
            }
            temo.areaStyle = { normal: { color: col } },
              da.push(temo)
            me.push(na)
            da.find(function (x) { return x.name == na }).data.push(parseFloat(tee[j].reweight) * parseFloat(tee[j].index))
            console.log(da)
          }
          else if ((na != 'Generality') && (na != '茶')) {
            da.find(function (x) { return x.name == na }).data.push(parseFloat(tee[j].reweight) * parseFloat(tee[j].index))
          }
        }
      }

    }
  }
  else if (id.length == 3 || id.length == 5) {
    if (id.length == 5) {
      id = id[0] + id[1] + id[2]
    }
    for (i in list1) {
      if (jage.includes(i) == true) {
        // console.log( list1[i]['children'],IDLIST[id[0]])
        var tee = list1[i]['children'].find(function (x) { return x.name == IDLIST[id[0]] })['children'].find(function (x) { return x.name == IDLIST[id] })['children']

        for (j in tee) {
          var na = ELIST[tee[j].name]
          if (da.find(function (x) { return x.name == na }) == null && (na != 'Generality') && (na != '茶')) {
            var temo = {}
            temo.name = na;
            temo.type = "line";
            temo.stack = '总'
            if (NAMELIST[ELIST[na]] != undefined) {
              col = COLLIST[NAMELIST[ELIST[na]]]
            }
            temo.data = []
            temo.smooth = true
            // temo.markLine = {
            //       symbol:'none',
            //       data: [
            //           [
            //               {coord: [datt, 0]},{coord: [datt, 180]}
            //           ]
            //       ],
            //   lineStyle: {
            //     normal: {
            //       type: 'dotted',
            //       color: 'red',
            //     },
            //   },
            //   }
            temo.lineStyle = {
              normal: {
                color: cc,//折线的颜色
                width: '0'//折线粗细
              }
            }
            temo.areaStyle = { normal: { color: col } },
              da.push(temo)
            me.push(na)
            if (parseFloat(tee[j].reweight) == 0) {
              da.find(function (x) { return x.name == na }).data.push(0)
            }
            else {
              da.find(function (x) { return x.name == na }).data.push(parseFloat(tee[j].reweight) * parseFloat(tee[j].index))
            }
          }
          else if ((na != 'Generality') && (na != '茶')) {
            if (parseFloat(tee[j].reweight) == 0) {
              da.find(function (x) { return x.name == na }).data.push(0)
            }
            else {
              da.find(function (x) { return x.name == na }).data.push(parseFloat(tee[j].reweight) * parseFloat(tee[j].index))
            }
          }
        }
      }

    }
  }
  // da: 子集堆叠面积图数据
  // me: 子集的节点名称列表
  // console.log(da,me)
  option.legend['data'] = me
  da
  option.series = da.sort(areasort)
  console.log(option.series)
  // 下面的滑动条部分
  myChart1.on('datazoom', function (params) {
    let xAxis = myChart1.getModel().option.xAxis[0];//获取axis
    ST = xAxis.rangeStart
    ED = xAxis.rangeEnd
  })
  var co = []
  for (i = 0; i < option.series.length; i++) {
    co[i] = option.series[i]['areaStyle']['normal']['color']
  }
  option.color = co
  //  console.log(option)
  myChart1.setOption(option, true);
  //   } 

}

