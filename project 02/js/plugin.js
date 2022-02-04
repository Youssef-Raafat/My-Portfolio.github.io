$(function(){

// Start The Down
    (function Download() {

    $('.the-down .fa-angle-double-down').animate({

        bottom: '-=15px'

        }, 500, function(){

        $(this).animate({

            bottom: '+=15px'
        
        }, 500, function(){
        
            Download()
        })

        })

}())

// click icon in header to go to second section
    $('header .fa-angle-double-down').on('click', function(){

        $('html, body').animate({
    
            scrollTop: $('.about-us').offset().top -15
        }, 1000)
    })

// ####################################################################################################

    // window loading
    $(window).load(function () {

    $('.overlay-loading .spinner').fadeOut(1000, function(){

        $(this).parent().fadeOut(200, function(){

            $(this).remove()

        })

    })
})

// ####################################################################################################

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

// ####################################################################################################


// add opacity to nav
$(window).scroll(function(){

    $(window).scrollTop() >= $('nav').height() ? $('nav').addClass('nav-opacity') : $('nav').removeClass('nav-opacity')
 })


// ####################################################################################################
// click icon in header to go to second section
$('nav li a').on('click', function(e){

    e.preventDefault();

    $(this).addClass('active').parent().siblings().children().removeClass('active')

    $('html, body').animate({

        scrollTop: $( '.' + $(this).data('scroll')).offset().top - 55

    }, 1000)
})


$(window).scroll(function(){

    $('section').each(function(){

        if($(window).scrollTop() > $(this).offset().top - 60 ){

            var blockId = $(this).attr('id');

            $('a').removeClass('active')

            $('li a[data-scroll="' + blockId + '"]').addClass('active')
        }
    })
})

$('header .header-btn button').on('click', function(){

    $('html, body').animate({
        scrollTop: $('.contact-us').offset().top
    }, 500)
})
// close 
})


