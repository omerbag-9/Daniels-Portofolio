let about = $("#about").offset().top
$(window).on("scroll",function(){
    let scrollLenght = $(window).scrollTop();
    if( scrollLenght < about){
        $("nav").addClass("bg-transparent").removeClass("bg-black")
        $("#goToTop").fadeOut(1000)
    }else{
        $("nav").addClass("bg-black").removeClass("bg-transparent")
        $("#goToTop").fadeIn(1000)
    }
})


//making acitive navbar links and scroll control time sections
$(".nav-link").on("click",function(e){
    $(e.target).addClass("active")
 //    $(e.target).parent().siblings().children().removeClass("active")
 $(".nav-link").not(e.target).removeClass("active")

 })
 