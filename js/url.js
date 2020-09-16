//依赖jq


var IMG_URL = '';
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
