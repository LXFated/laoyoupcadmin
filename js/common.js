//判断是否登录
if(!$.cookie('sessionId')){
  window.location.href='index.html';
}

$(function(){
  $('.header .right img').attr('src',$.cookie('avatar'))
  $('.header .right p').html($.cookie('nick'))
})