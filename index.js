$(function () {
   
    $(window).scroll(function() {    

        var scroll = $(window).scrollTop();

        if (scroll >= 650) {
            $(".clear").addClass("solid")
        } else if (scroll <= 650){
            $(".clear").removeClass("solid")
        } 
            
    })   
})