$('.wrapper').animate({'width':'100%'},2000)
$('.wrapper').animate({'height':window.innerHeight},2000,function(){
    $('.wrapper h1').slideDown(2000,function(){
        $('.wrapper .row').fadeToggle(2000)
    });
})    