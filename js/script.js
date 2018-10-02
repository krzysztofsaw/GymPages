// SMOOTH SCROLLING (from navbar to section)
sourceMappingURL=mixins.css.map
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// CHANGING COLOR MENU WHEN SCROLL DOWN 

$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 150) {
                    $(".navbar").css('background-color', 'white');
                } 
            });
        });


// SCROLL

$('img.scroll-section-home').click(function () {
   $('html, body').animate({scrollTop: $('#about').offset().top}, 1000); 
});

// BUTTON (Get free now)

   $('#button-home').click(function() {
    $('html,body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000);
});

// BUTTON (Subscribe us)

   $('#button-newsletter').click(function() {
    $('html,body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000);
});



// BUTTONS (View-more for section:services and section:blog)

$(function() {
   $("#btn-show-hide1").click(function(){
     $(this).html($(this).text() == 'show less' ? 'view more' : 'show less');
       $("#show-hide1").slideToggle('slow');
   });
});

$(function() {
			$("#btn-show-hide2").click(function() {
				$(this).html($(this).text() == 'show less' ? 'view more' : 'show less');
				$("#show-hide2").slideToggle('slow');
			});
		});



// Animations on scroll 


$('.js--wp-1').waypoint(function() {
   $('.js--wp-1').addClass('animated slideInLeft'); 
},{offset: '100%'});

$('.js--wp-2').waypoint(function() {
    $('.js--wp-2').addClass('animated fadeIn');
},{ offset: '60%'});

$('.js--wp-3').waypoint(function() {
    $('.js--wp-3').addClass('animated fadeIn');
}, {offset: '75%'});

