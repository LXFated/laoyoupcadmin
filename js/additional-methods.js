jQuery.validator.addMethod("isupimg", function (value, element, params) {
  console.log($('.cover-img').attr('src'));
  if ($('.cover-img').attr('src')) {
    return true
  } else {
    return false
  }
}, "请上传封面");



jQuery.validator.addMethod("zhumoney", function (value, element, params) {

  if (parseFloat($('input[name="money"]').val()) <= parseFloat($.cookie('zhumoney'))) {
    return true
  } else {
    return false
  }
}, "您的钱包余额不足，请充值后重试");


jQuery.validator.addMethod("minNumber", function (value, element) {
  var returnVal = true;
  var ArrMen = $('input[name="money"]').val().split(".");    //截取字符串
  if (ArrMen.length == 2) {
    if (ArrMen[1].length > 2) {    //判断小数点后面的字符串长度
      returnVal = false;
      return false;
    }
  }
  return returnVal;
}, "小数点后最多为两位");         //验证错误信息