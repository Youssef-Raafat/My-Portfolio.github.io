$(function(){


    $(window).scroll(function(){
        $(window).scrollTop() >= $('.navbar').height() ? $('.navbar').addClass('nav-opacity') : $('.navbar').removeClass('nav-opacity').animate({transition: '0.8s'})
    })


    // ######################################################################################

    // Start Tabs
    $('.tabs ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        $($(this).data('tabs')).fadeIn().siblings().hide()
    })



    //  يروح عليه في الصفحة navbar ادوس علي عنصر من ال 
    $('nav ul li a').click(function(e){

        e.preventDefault()

        $(this).parent().addClass('selected').siblings().removeClass('selected')

        $('html , body').animate({

            scrollTop: $( '.' + $(this).data('scroll')).offset().top
        }, 1000);

    })



// close 
})