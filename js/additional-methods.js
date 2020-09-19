jQuery.validator.addMethod("isupimg", function(value, element,params) {
  console.log($('.cover-img').attr('src')); 
  if($('.cover-img').attr('src')){
    return true
  }else{
    return false
  }
}, "请上传封面");