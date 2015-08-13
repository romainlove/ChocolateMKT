/*
 * IGNITE - Premium HTML5 Template from Designova
 * Author: Designova, http://www.designova.net
 * Copyright (C) 2015 Designova
 * This is a premium product. For licensing queries please contact info@designova.net
 */

/*global $:false */
/*global window: false */
(function() {
    "use strict";
    $(function($) {



//Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();
        //Adjusting Intro Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);
        $('.quarterheight').css('height', vH - vH/6);
        $('html, body').css('width', vW);


/*Equal Heights JS by Designova*/
        $.fn.setAllToMaxHeight = function(){
            return this.css({ 'height' : '' }).height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
        }
        $('.eq-height1').setAllToMaxHeight();
        $('.eq-height2').setAllToMaxHeight();
        $('.eq-height3').setAllToMaxHeight();
        $('.eq-height4').setAllToMaxHeight();

        
//PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility',
                'visible');
        });

//Sub Menu Trigger
        $('.main-menu li a.sub-menu-trigger').on('mouseenter', function(){
            $(this).next('.sub-menu').stop().slideDown(1000);
        });
        $('.main-menu li').on('mouseleave', function(){
            $('.sub-menu').stop().slideUp(1000);
        });


//Main Menu Trigger
        (function( $ ){
           $.fn.menuPanelTrigger = function() {
                if($(".mastnav").is(":hidden"))
                {
                    $('.mastnav').fadeIn();
                }
                else{
                    $('.mastnav').fadeOut();
                }
           }; 
        })( jQuery );
        $('.menu-notification a, .menu-close-notification a').on('click', function(e){
            e.preventDefault();
            $().menuPanelTrigger();
        });

//Scrolling Sections
        $(".scroll").on('click', function(event){ 
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
            $().menuPanelTrigger();
          });



//On-Scroll Animations
$(window).load(function() {

if( !device.tablet() && !device.mobile() ) {

    $('.animated').appear(function() {
     $(this).each(function(){ 
        $(this).css('visibility','visible');
        $(this).addClass($(this).data('fx'));
       });
    },{accY: -100});
            
  } 

  else {
      $('.animated').css("visibility","visible");
  }
}); 




//PORTFOLIO UX
        (function( $ ){
           $.fn.filterPanelTrigger = function() {
                if($(".works-filter-panel").is(":hidden"))
                {
                    $('.works-filter-panel').slideDown();
                }
                else{
                    $('.works-filter-panel').slideUp();
                }
           }; 
        })( jQuery );
        $('.filter-notification a').on('click', function(e){
            e.preventDefault();
            $().filterPanelTrigger();
        });
        $('.works-filter li a').on('click', function(){
            $('.works-filter li a').removeClass('filter-active');
            $(this).addClass('filter-active');
            return false;
        });


        if ( $( ".works-container" ).length ) {
            $('.filter-notification a').show();
        }
        else{
            $('.filter-notification a').hide();
        }


        
//ISOTOPE
        
        //ISOTOPE GLOBALS
        var $container1 = $('.works-container');


        //ISOTOPE INIT
        $(window).load(function() {
            $container1.isotope({
                // options
                itemSelector: '.works-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            //forcing a perfect masonry layout after initial load
            setTimeout(function() {
            $container1.isotope('layout');
            }, 100);
            // filtering
            $('.works-filter li a').on('click', function() {
                $('.works-filter li a').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.works-container').isotope({
                    filter: selector
                });
                setTimeout(function() {
                    $container1.isotope('layout');
                }, 700);
                return false;
            });
        });

        //Isotope ReLayout on Window Resize event.
        $(window).on('resize', function() {
            $container1.isotope('layout');
        });

        //Isotope ReLayout on device orientation changes
        window.addEventListener("orientationchange", function() {
            $container1.isotope('layout');
        }, false);



//VENOBOX
        $('.venobox, .image-lightbox-link').venobox({
            numeratio: true,
            infinigall: true
        });   
        

//CAROUSEL
        $(".team-carousel").owlCarousel({
                    loop:true,
                    margin:0,
                    dots:true,
                    nav:false,
                    navText: false,
                    navSpeed: 3000,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:3
                        }
                    }
                });

        $(".promo-carousel").owlCarousel({
                    loop:true,
                    margin:0,
                    dots:false,
                    nav:true,
                    navText: false,
                    navSpeed: 3000,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:3
                        }
                    }
                });
        $(".project-carousel").owlCarousel({
                    loop:true,
                    margin:0,
                    dots:false,
                    nav:true,
                    navText: false,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:4
                        }
                    }
                });


//Slick Carousel / Synchronized:

        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [
                      {
                        breakpoint: 900,
                        settings: {
                          slidesToShow: 2
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1
                        }
                      },
                      {
                        breakpoint: 320,
                        settings: {
                          slidesToShow: 1
                        }
                      }
                    ]
        });



 //PARALLAX LAYERS:

        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $.stellar({
                positionProperty: 'transform'
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).on('load', function() {
                parallaxInit();
            });


        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }   

            
/******************************************
  SLIDER REVOLUTION  -
******************************************/
                  
           
          $(document).ready(function() {
            $('#rev_slider_3_1').show().revolution({ 
                  dottedOverlay:"none",
                  delay:9000,
                  startwidth:1200,
                  startheight:500,
                  hideThumbs:0,

                  thumbWidth:100,
                  thumbHeight:50,
                  thumbAmount:3,
                  
                              
                  simplifyAll:"off",

                  navigationType:"bullet",
                  navigationArrows:"none",
                  navigationStyle:"round",

                  touchenabled:"on",
                  onHoverStop:"on",
                  nextSlideOnWindowFocus:"off",

                  swipe_threshold: 75,
                  swipe_min_touches: 1,
                  drag_block_vertical: false,
                  
                              
                              
                  keyboardNavigation:"off",

                  navigationHAlign:"right",
                  navigationVAlign:"center",
                  navigationHOffset:20,
                  navigationVOffset:0,

                  soloArrowLeftHalign:"left",
                  soloArrowLeftValign:"center",
                  soloArrowLeftHOffset:20,
                  soloArrowLeftVOffset:0,

                  soloArrowRightHalign:"right",
                  soloArrowRightValign:"center",
                  soloArrowRightHOffset:20,
                  soloArrowRightVOffset:0,

                  shadow:0,
                  fullWidth:"off",
                  fullScreen:"on",

                              spinner:"spinner0",
                              
                  stopLoop:"off",
                  stopAfterLoops:-1,
                  stopAtSlide:-1,

                  shuffle:"off",

            
                  forceFullWidth:"off",
                  fullScreenAlignForce:"off",
                  minFullScreenHeight:"",
                  hideTimerBar:"on",
                  hideThumbsOnMobile:"off",
                  hideNavDelayOnMobile:1500,
                  hideBulletsOnMobile:"off",
                  hideArrowsOnMobile:"off",
                  hideThumbsUnderResolution:0,

                              fullScreenOffsetContainer: "#pseudo-header",
                  fullScreenOffset: "",
                              hideSliderAtLimit:0,
                  hideCaptionAtLimit:0,
                  hideAllCaptionAtLilmit:0,
                  startWithSlide:0                    
            });


          
  
//FULLSCREEN BG VIDEO:

        /* plays the BG Vimeo or Youtube video if non-mobile device is detected*/ 
        if( !device.tablet() && !device.mobile() ) {
          
          /* plays the BG Vimeo or Youtube video if non-mobile device is detected*/ 
          $(".video-bg").okvideo({ 
                  source: '64686559', //set your video source here
                  autoplay:true,
                  loop: true,
                  highdef:true,
                  hd:true, 
                  adproof: true,
                  volume:0 // control the video volume by setting a value from 0 to 99
          });
                
        } else {
          
          /* displays a poster image if mobile device is detected*/ 
          $('.video-bg').addClass('poster-img');
          
        }
      
     


//CONTACT FORM VALIDATION
$(document).ready(function($) {

  // hide messages 
  $(".error").hide();
  $(".success").hide();
  
  $('#contactForm input').on('click', function(){
        $(".error").fadeOut();
        return false;
    });
  
  // on submit...
  $("#contactForm #submit").on('click', function(){
    $(".error").hide();
    
    //required:
    
    //name
    var name = $("input#name").val();
    if(name == ""){
      //$("#error").fadeIn().text("Name required.");
      $('#fname').fadeIn('slow');
      $("input#name").focus();
      return false;
    }
    
    //email (check if entered anything)
    var email = $("input#email").val();
    //email (check if entered anything)
    if(email == ""){
      //$("#error").fadeIn().text("Email required");
      $('#fmail').fadeIn('slow');
      $("input#email").focus();
      return false;
    }
    
    //email (check if email entered is valid)

    if (email !== "") {  // If something was entered
      if (!isValidEmailAddress(email)) {
        $('#fmail').fadeIn('slow'); //error message
        $("input#email").focus();   //focus on email field
        return false;  
      }
    } 

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

    
    
    
    // comments
    var comments = $("#msg").val();
    
    if(comments == ""){
      //$("#error").fadeIn().text("Email required");
      $('#fmsg').fadeIn('slow');
      $("input#msg").focus();
      return false;
    }

        return false;
  });  
    
    
  // on success...
   function success(){
    $("#success").fadeIn();
    $("#contactForm").fadeOut();
   }
  
    return false;
});




//GOOLGE MAPS with SNAZZY MAP:

    // When the window has finished loading create our google map below
    var map_shown=false;
    google.maps.event.addDomListener(window, 'load', map_init);

    function map_init() {


    //Setup waypoints plugin
    $('.contact').waypoint(function (direction) {

        if (direction === 'down' && !map_shown) {
                            map_shown = true;
                            // Basic options for a simple Google Map
                            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                            var mapOptions = {
                                // How zoomed in you want the map to start at (always required)
                                zoom: 11,

                                // The latitude and longitude to center the map (always required)
                                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                                // How you would like to style the map. 
                                // This is where you would paste any style found on Snazzy Maps.
                                styles: [{"stylers":[{"visibility":"simplified"}]},{"stylers":[{"color":"#131314"}]},{"featureType":"water","stylers":[{"color":"#131313"},{"lightness":7}]},{"elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":25}]}]
                            };

                            // Get the HTML DOM element that will contain your map 
                            // We are using a div with id="map" seen below in the <body class="-body">
                            var mapElement = document.getElementById('map');

                            // Create the Google Map using our element and options defined above
                            var map = new google.maps.Map(mapElement, mapOptions);

                            // Let's also add a marker while we're at it
                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(40.6700, -73.9400),
                                map: map,
                                title: 'Snazzy!'
                            });

        }
        else {
        }

    }, { offset: 100 });




   }

   

  }); //ready



    });
    // $(function ($)  : ends
})();
//  JSHint wrapper $(function ($)  : ends