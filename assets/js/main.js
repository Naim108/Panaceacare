$(window).on('load',function(){
    $('#preloader').delay(1000).fadeOut(1000);
 });
 /* counter */
 $(document).ready(function(){
   $('.count').counterUp({
      delay: 10,
      time: 1000
  });
   /* accordion + frequently question */
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
 })
