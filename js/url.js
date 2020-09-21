//依赖jq


var IMG_URL = 'https://laoyouyangsheng.oss-cn-shenzhen.aliyuncs.com';
var BASE_URL = 'http://yyh.vipgz1.idcfengye.com/lyys';
var HTTP_URL = '';
var WEBSITE_NAME = "";
var WEBSITE = 0;
//get封装
function getRequest(url, data, success) {
  $.ajax({
    type: "GET",
    url: BASE_URL + url,
    data: data,
    dataType: "json",
    success: success
  });
}
//post封装
function postRequest(url, data, success) {
  $.ajax({
    type: "POST",
    url: BASE_URL + url,
    data: data,
    dataType: "json",
    success: success
  });
}

//获取url的值
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}

//格式化时间
function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
