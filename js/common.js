//判断是否登录
if(!$.cookie('sessionId')){
  window.location.href='index.html';
}

$(function(){
  $('.header .right img').attr('src',$.cookie('avatar'))
  $('.header .right p').html($.cookie('nick'))
})

//退出登录
function loginout(){
  if($.cookie('sessionId')){
    postRequest('/api/account/zbLoginOut',{
      sessionId:$.cookie('sessionId')
    },function(res){
      if(res.code ==1){
        $.removeCookie('sessionId')
        $.removeCookie('nick')
        $.removeCookie('zhuid')
        $.removeCookie('avatar')
        $.removeCookie('isauto')
        $.removeCookie('mobile')
        $.removeCookie('password')
        window.location.href='index.html';
      }else{
        alert(res.desc)
      }
    })
  }
}
