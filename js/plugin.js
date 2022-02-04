   $(function () {
      // Nice Scroll
      // $("body").niceScroll({
      //    cursorcolor: "#00b894", // change cursor color in hex
      //    cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
      //    cursorHeight: "10px", // cursor width in pixel (you can also write "5px")
      //    zindex: 9999,
      //    cursorborder: "none", // css definition for cursor borde

      // });


      // Start the down in the header
   (function Download() {
      $(".the-down .fa-arrow-circle-down").animate(
         {
         bottom: "-=15px",
         },
         500,
         function () {
         $(this).animate(
            {
               bottom: "+=15px",
            },
            500,
            function () {
               Download();
            }
         );
         }
      );
   })();

   // click icon in header to go to second section
   $("header .fa-arrow-circle-down").on("click", function () {
      $("html, body").animate(
         {
         scrollTop: $(".about-me").offset().top - 40,
         },
         1000
      );
   });

   // ####################################################################################################

   // Scroll Top
   $(window).scroll(function () {
      if ($(window).scrollTop() > 700) {
         if ($(".scroll-top").is(":hidden")) {
         $(".scroll-top").fadeIn();
         }
      } else {
         $(".scroll-top").fadeOut();
      }
   });

   $(".scroll-top").click(function () {
      $("html , body").animate(
         {
         scrollTop: 0,
         },
         500
      );
   });

   // ####################################################################################################

   // Dark Mode
   $(".dark-mode").click(function () {
         if ($(this).hasClass("light-active")) {
            $(this).removeClass("light-active");
            $('body').removeClass('light-mode')
         } else {
            $(this).addClass("light-active");
            $('body').addClass('light-mode')    
      }
   });

   // ####################################################################################################

   // window loading
   $(window).load(function () {
      $(".overlay-loading .spinner").fadeOut(1000, function () {
         $(this)
         .parent()
         .fadeOut(200, function () {
            $(this).remove();
         });
      });
   });

   // ####################################################################################################

   //  يروح عليه في الصفحة navbar ادوس علي عنصر من ال
   $("nav ul li a").click(function (e) {
      e.preventDefault();

      $(this).parent().addClass("active").siblings().removeClass("active");

      $("html, body").animate(
         {
         scrollTop: $("#" + $(this).data("scroll")).offset().top - 60,
         },
         500
      );
   });

   $(window).scroll(function () {
      $("section, nav, header").each(function () {
         if ($(window).scrollTop() > $(this).offset().top - 150) {
         var blockId = $(this).attr("id");

         $("a").parent().removeClass("active");

         $('li a[data-scroll="' + blockId + '"]')
            .parent()
            .addClass("active");
         }
      });
   });

   // ####################################################################################################

   // add opacity to nav

   $(window).scroll(function () {
      $(window).scrollTop() >= $("nav").height()
         ? $("nav").addClass("nav-opacity")
         : $("nav").removeClass("nav-opacity");
   });


   // ####################################################################################################

   // Start Typed

   var typed = new Typed(".typeme-one", {
      strings: ["Welcome, Iam Youssef Raafat"],
      typeSpeed: 50,
      startDelay: 2000, // وقت قبل الكتابة
      backSpeed: 20, // وقت وهو بيرجع بيk اتنين
      backDelay: 2000, // الوقت اللي بيقعده ظاهر
      loop: false, // كرره
      // loopCount: 5, // كرره 5 مرات بس
      showCursor: true, // شيل الخط
      cursorChar: ".",
      autoInsertCss: true,
   });

   var typed = new Typed(".typeme-two", {
      strings: ["Front End Developer", "Web Designer"],
      typeSpeed: 50,
      color: "#f5f5f5",
      backDelay: 2500, // الوقت اللي بيقعده ظاهر
      startDelay: 4000, // وقت قبل الكتابة
      backSpeed: 2, // وقت وهو بيرجع بيت اتنين
      loop: true, // كرره مالا نهاية
      showCursor: true, // شيل الخط
      cursorChar: "|",
      autoInsertCss: false,
   });

   // close
   });
