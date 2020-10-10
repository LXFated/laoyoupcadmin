jQuery.validator.addMethod("isupimg", function(value, element,params) {
  console.log($('.cover-img').attr('src')); 
  if($('.cover-img').attr('src')){
    return true
  }else{
    return false
  }
}, "请上传封面");

jQuery.validator.addMethod("allmoney", function(value, element,params) {
  console.log(typeof $('input[name="money"]').val() );
  if($('input[name="money"]').val()>=0.01){
    return true
  }else{
    return false
  }
}, "总金额不可低于0.01");

jQuery.validator.addMethod("singlemoney", function(value, element,params) {
  var single=parseFloat($('input[name="money"]').val())/parseFloat($('input[name="num"]').val())
  console.log(single);
  if(single>=0.01){
    return true
  }else{
    return false
  }
}, "单个红包金额不可低于0.01");

jQuery.validator.addMethod("zhumoney", function(value, element,params) {
  
  if(parseFloat($('input[name="money"]').val())<=parseFloat($.cookie('zhumoney'))){
    return true
  }else{
    return false
  }
}, "您的钱包余额不足，请充值后重试");