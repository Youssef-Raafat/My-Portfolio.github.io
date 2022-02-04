
//// Start Serring option //// 

// select icon 
// $(function(){

//     $('.setting-options .icon-options').click(function(){

//         $(this).children().toggleClass('fa-spin')
//         $(this).parent().toggleClass('open')
        
//     })

//     $('.setting-options .options-box .color-list li').click(function(){
    
//         console.log($(this).data('color'))

//         $('body').css('--maincolor', $(this).data('color'))
        
//     })

// })

    // In js
    // set color in local storage
    let mainColors = localStorage.getItem('color_option');

    if(mainColors !== null) {
        document.documentElement.style.setProperty('--maincolor', mainColors)
        

        // remove active class from all colors list items
        document.querySelectorAll('.color-list li').forEach(e => {
            e.classList.remove('active')

            if(e.dataset.color === mainColors) {
            e.classList.add('active')

            }
        }) 
    }
 

    // Random background
   let backgroundOption = true ;

   // Variable Control background interval
   let backgroundInterval ;

    // set Background in local storage
    let backgroundLocalItem = localStorage.getItem('background_option');

    // Check if Background Is Empty
    if  (backgroundLocalItem !== null) {

          // remove active class from all spans
          document.querySelectorAll('.random-backgrounds span').forEach(e => {
            e.classList.remove('active')

           })
        
        if(backgroundLocalItem === 'true') {

            backgroundOption = true;
            
            document.querySelector(".random-backgrounds .yes").classList.add("active");
        }
        else {

            backgroundOption = false;
            document.querySelector(".random-backgrounds .no").classList.add("active"); 
        }

         
    }


    // icon of setting
    let settingBoxIcon = document.querySelector('.icon-options');

    let settingIcon = document.querySelector('.icon-options .fa-cog');

    let settingOptions = document.querySelector('.setting-options');

    settingBoxIcon.onclick = function(){

        settingIcon.classList.toggle('fa-spin')
        settingOptions.classList.toggle('open')
}


// Change colors
const colorLi = document.querySelectorAll('.color-list li')

// Loop On List Items
colorLi.forEach(li => {

    // click  on every list item
    li.addEventListener('click', (e)=> {

        // set color on loop
        document.documentElement.style.setProperty('--maincolor', e.target.dataset.color)

        // set color in local storage
        localStorage.setItem('color_option', e.target.dataset.color);

        // remove active class from all children
        e.target.parentElement.querySelectorAll('.active').forEach(e => {

            e.classList.remove('active')
        })

        // add active class on self
        e.target.classList.add('active')

    })

    
})


// Change Random Background
const randomBackEl = document.querySelectorAll('.random-backgrounds span')

// Loop On All Span
randomBackEl.forEach(span => {

    // click on every list item
    span.addEventListener('click', (e)=> {  

        // remove active class from all children
        e.target.parentElement.querySelectorAll('.active').forEach(e => {

            e.classList.remove('active')
        })

        // add active class on self
        e.target.classList.add('active')

        if(e.target.dataset.background === 'yes') {

            backgroundOption = true ;

            randmizeimgs()

            localStorage.setItem('background_option', true)
        }
        else {

            backgroundOption = false ;

           clearInterval(backgroundInterval)

           localStorage.setItem('background_option', false)

        }
    })

    
})


        
// ##############################################################################


//// Start Landing Page

// Select Landing Page
let landingPage = document.querySelector('.landing-page');

let imgArray = ['01.jpg', '02.jpg','03.jpg','04.jpg','05.jpg']; 


// function To Randomize Imgs
function randmizeimgs() {

    if(backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgArray.length);
        
            landingPage.style.backgroundImage = 'url("imgs/' + imgArray[randomNumber] +'")'
        }, 1000);
    }
}

randmizeimgs()


// ##############################################################################


//// Start Progress ////

// Select Progress Selector
let ourSkills = document.querySelector('.skills')

window.onscroll = function(){

    // skills offset Top
    let skillsOffsetTop = ourSkills.offsetTop ;

    // Skills Outer Height
    let skillsouterHeight = ourSkills.offsetHeight ;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

    skill.style.width = skill.dataset.progress;

    })

    if (windowScrollTop >= (skillsOffsetTop + skillsouterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

        })
        
    }

    
}


//$$$ progress in jquery $$$//

$(function(){

    $(window).scroll(function(){

        // console.log($('.skills').offset().top)

        if($(window).scrollTop() > $('.skills').offset().top -70 ) {

            $('.skills-progress span.html').css('width', $('.skills-progress span.html').data('progress'))
            $('.skills-progress span.css').css('width', $('.skills-progress span.css').data('progress'))
            $('.skills-progress span.javascript').css('width', $('.skills-progress span.javascript').data('progress'))
            $('.skills-progress span.php').css('width', $('.skills-progress span.php').data('progress'))
            $('.skills-progress span.mysql').css('width', $('.skills-progress span.mysql').data('progress'))
        }

            // $('.skills-progress span').css('width', $(this).data('progress')) 


               
    })
})

// ##############################################################################


//// Start Popup Gallery ////

// Select our img Gallery 
let ourGallery = document.querySelectorAll('img');

// loop about every img
ourGallery.forEach(img => {

    img.addEventListener('click', e =>{

        console.log(img.src);

        // create popup div
        let overlay = document.createElement('div');

        // set atrribute name to overlay
        overlay.className= 'popup-overlay';

        // append overlay to body
        document.body.appendChild(overlay);

        // Create The popup Box
        let popupBox = document.createElement('div')

        // set atrribute name to popup Box
        popupBox.className= 'popup-box';

        // Create The popupImg
        let popupImg = document.createElement('img')

        // set atrribute name to popup Img
        popupImg.className= 'popup-img';

        popupImg.src = img.src ;

        // append popupImg to popupBox
        popupBox.appendChild(popupImg);

        // append popup Box to body
        document.body.appendChild(popupBox);

        if(img.alt !== null) {

            // Create heading
            let imgHeading = document.createElement('h3')

            // Create text in h2
            let imgText = document.createTextNode(img.alt)

            // Append imgText to imgHeading
            imgHeading.appendChild(imgText)

            // Append imgHeading to popupBox
            popupBox.prepend(imgHeading)

            overlay.addEventListener('click', () => {

                popupBox.classList.add('hide-popup')

                overlay.style.display = 'none'
            })
        }

        
        // // create Close popup span
        let closeButton = document.createElement('span');

        // // create Close popup icon
        let closeButtonText = document.createTextNode('X');

        // // Append SpanIcon to popupSapn
        closeButton.appendChild(closeButtonText);

        // // set attribute yp popSpan
        closeButton.className = 'close-button'

        // // Append popupSapn to popbox
        popupBox.appendChild(closeButton);


        closeButton.addEventListener('click', () => {
            overlay.style.display = 'none'
        })

    })
})


// Close popup
document.addEventListener('click', e => {
    if(e.target.className == 'close-button') {
        e.target.parentNode.remove()

        document.querySelector('.popup-overlay').remove()
    }
})


// ##############################################################################

//// Start  Nav Bullets ////

    // Select Bullets 
    // const allBullets = document.querySelectorAll('.nav-bullets .bullet')


    // allBullets.forEach(bulet => {

    //     bulet.addEventListener('click', (e) => {

    //         document.querySelector(e.target.dataset.section).scrollIntoView({
                
    //             behavior: 'smooth'
    //         })

           
            
    //     })
    // })

    $(function(){

        $('.nav-bullets .bullet').click(function(){

            $(this).addClass('active').siblings().removeClass('active')

        $('html , body').animate({

            scrollTop: $($(this).data('section')).offset().top
        }, 1000);



    })

})


// ##############################################################################

//// Start  Nav Bar ////

    // Select Bullets 
    const allLinks = document.querySelectorAll('.links li a')


    allLinks.forEach(link => {

        link.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                
                behavior: 'smooth'
            })

           
            
        })
    })

       $(function(){

        $('.header-area .links li a').click(function(e){

            e.preventDefault()

            $(this).parent().addClass('active').siblings().removeClass('active')

            $('html , body').animate({

                scrollTop: $($(this).data('section')).offset().top
            }, 1000)
        })


    

})


// ##############################################################################

// // Handle Active State
// function handleActive(ev) {

//     // Remove Active Class From All Childrens
//     ev.target.parentElement.querySelectorAll(".active").forEach(element => {
  
//       element.classList.remove("active");
  
//     });
  
//     // Add Active Class On Self
//     ev.target.classList.add("active");
  
//   }


let bulletsSpan = document.querySelectorAll('.bullets-option span');

let bulletsContainer = document.querySelector('.nav-bullets');

let bulletLocalItem = localStorage.getItem('bullets_option')


if( bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove('active')
    });

    if(bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector('.bullets-option .yes').classList.add('active')
    }
    else {
        bulletsContainer.style.display = 'none';

        document.querySelector('.bullets-option .no').classList.add('active')
    }
}



bulletsSpan.forEach(span => {

    span.addEventListener('click', (e) => {

        if(span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block'

            localStorage.setItem('bullets_option', 'block')

        }

        else {
            bulletsContainer.style.display = 'none'

            localStorage.setItem('bullets_option', 'none')

        }

        // remove active class from all children
        e.target.parentElement.querySelectorAll('.active').forEach(e => {

            e.classList.remove('active')
        })

        // add active class on self
        e.target.classList.add('active')

        

    })
})


// ##############################################################################
    
//// Start Reset Button ////

document.querySelector('.reset-options').onclick = function(){

    // clear all localStorage
    // localStorage.clear()

    // Select the clear localStorage
    localStorage.removeItem('color_option') 
    localStorage.removeItem('background_option') 
    localStorage.removeItem('bullets_option') 

    // Reload the window
    window.location.reload()
}


// ##############################################################################

//// Start toggle Menu ////

let toggleBtn = document.querySelector('.toggle-menu')

let tLinks = document.querySelector('.header-area .links')

toggleBtn.onclick = function(e){

    e.stopPropagation()

    this.classList.toggle('menu-active')

    tLinks.classList.toggle('open')
}

// click anywhere outside menu and toggle button 
document.addEventListener('click', (e)=> {

    if(e.target !== toggleBtn && e.target !== tLinks){

        toggleBtn.classList.remove('menu-active')

        tLinks.classList.remove('open')
    }
}) 

// Stop propagation on menu
tLinks.addEventListener('click', (e) => {

    e.stopPropagation()
})








