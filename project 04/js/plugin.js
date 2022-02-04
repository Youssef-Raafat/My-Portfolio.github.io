$(function(){


    $('.carousel').carousel({

        interval: 3000
    })

    .carousel('cycle')

// ###############################################################


    //   Start Counter
    $('.timer-one').countTo({
        from: 0,
        to: 2500,
        speed: 15000, // default 5000
        refreshInterval: 50, // default 50
    });

    $('.timer-two').countTo({
        from: 0,
        to: 1400,
        speed: 15000, // default 5000
        refreshInterval: 20, // default 50
    });

    $('.timer-three').countTo({
        from: 0,
        to: 900,
        speed: 15000, // default 5000
        refreshInterval: 50, // default 50
    });

    $('.timer-four').countTo({
        from: 0,
        to: 40000,
        speed: 15000, // default 5000
        refreshInterval: 20, // default 50
    });


// ###############################################################

    // toggle the icon in the Box Option
    $('.option-box .icon-check').on('click', function(){

        $('.option-box .color-option').fadeToggle()
       
    })

// ###############################################################

    // Change the colors 
    $('.option-box .color-option ul li').click(function(){
        $('body').css('--maincolor', $(this).data('color'))
        $('body').css('--hovercolor', $(this).data('color'))
         $('.btn').css('backgroundColor', $(this).data('color') )
         $('.btn').css('borderColor', $(this).data('color'))
     })


// ###############################################################

    // Scroll Top

    $(window).scroll(function(){

        if($(window).scrollTop() > 700){

            if($('.scroll-top').is(':hidden')){
                $('.scroll-top').fadeIn()
            }
        }
        else {
            $('.scroll-top').fadeOut()
        }
    })

    $('.scroll-top').click(function(){

        $('html , body').animate({

            scrollTop: 0
        
    }, 500);
    })



// ###############################################################

// window loading
// $(window).load(function () {


//     $('.overlay-loading .spinner').fadeOut(500, function(){

//         $('body').css('overflow', 'auto')

//         $(this).parent().fadeOut(200, function(){

//             $(this).remove()

//         })

//     })


// })


// ###############################################################

$('.faq-questions .panel-heading a').click(function(){
    if( $(this).hasClass('collapsed')) {
        $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up').end()
        .parents('.panel').siblings().find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down')
     }
     else {
        $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down')

     }
})
// close tag
})

   

