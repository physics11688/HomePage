$(function(){
    $.getJSON("json/notice.json",function(data){
        console.log(data);
        for(let i=data.length-1;i>=0;i--){
        $("#list").append($('<li><dl><dt>'+data[i].date+'</dt><dd><a href="html/notice/'+data[i].href+'.html">'+data[i].title+'</a></dd></dl></li>'));
    }
});

// トップへ戻るボタン
let pagetop = $('#page_top');   
pagetop.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        pagetop.fadeIn();
    }
    else {
        pagetop.fadeOut();
    }
});
pagetop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500); //0.5秒でトップへ移動
    return false;
});

// header
let header = $('#header h1,#header i');
let nav=$('#wrapper .btn-gnavi span');
let videoArea= $('#video-area');
$(window).scroll(function () {
    if ($(this).scrollTop() > videoArea.height()-150) {
        header.css({'transition': 'all  1.0s ease','color':'#000'});
        nav.css({'transition':'all  1.0s ease','background-color':'#000'});
        $('#header').css({'transition': 'all  1.0s ease','background-color':'#FFF'});
    }
    else {
        header.css({'color':'#FFF'});
        nav.css({'background-color':'#FFF'});
        $('#header').css({'background-color':'rgba(0,0,0,0)'});
    }
});
});