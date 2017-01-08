
<!-- Initialize Swiper -->
            
 var swiper = new Swiper('.swiper-container', {
     pagination: '.swiper-pagination',
     slidesPerView: 4,
     paginationClickable: true,
     spaceBetween: 0
 });

$('#heart').on({
'click': function() {
var src = ($(this).attr('src') === 'image/heart.png')
? 'image/heart-2.png'
: 'image/heart.png';
$(this).attr('src', src);
}
});

function grey (){
    $("#img").attr('src', 'image/nike-grey.png');
}
$("#img2").click(grey);
    
function pink (){
    $("#img").attr('src', 'image/Layer%203.png');
}
$("#img1").click(pink);

body = document.getElementsByTagName("body")[0],
fix = document.getElementById("nike");

window.onscroll = function(){
    if (document.body.scrollTop >= 0 && document.body.scrollTop < 730){
        fix.style.position = "absolute";
        fix.style.top = "840px";
    }   
    else if (document.body.scrollTop >= 730 && document.body.scrollTop <= 1400){
        fix.style.position = "fixed";
        fix.style.top = "118px";
    }
    else if (document.body.scrollTop > 1400){
        fix.style.position = "absolute";
        fix.style.top = "1530px"; 
    }
}