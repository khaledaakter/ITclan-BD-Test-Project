$(document).ready(function(){
  $('.main-slider').slick({
     dots: false,
     arrows: true,
     infinite: true,
     // autoplay: true,
     // autoplaySpeed: 1000,
     slidesToShow: 1,
  });
});

$('#search-link').on('click', function () {
  $(this).toggleClass('active').focus();
});

$( ".mobile-nav-bar" ).click(function() {
  $( ".mobile-navigation" ).css({ display: "block" });
});

$( ".mobile-navigation-close" ).click(function() {
  $( ".mobile-navigation" ).css({ display: "none" });
});

$( ".arrivals-content" ).click(function() {
  $( ".popup-section" ).css({ display: "block" });
});

$( ".popup-close" ).click(function() {
  $( ".popup-section" ).css({ display: "none" });
});
