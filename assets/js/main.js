$(window).on('load',function(){
    $('#preloader').delay(1000).fadeOut(1000);
 });
 /* counter */
 $(document).ready(function(){
   $('.count').counterUp({
      delay: 10,
      time: 1000
  });
 })