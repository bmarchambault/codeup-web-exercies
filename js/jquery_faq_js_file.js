"use strict";

(function($){
    $(document).ready(function(){
  //=====================code below=============================

  $('#faqBtn').click(function(){
      $('dd').toggleClass('invisible');
      console.log('click');
  });


//When any of the dt elements is clicked, the element that was clicked should be highlighted.
 $('dt').click(function(){
     $(this).addClass('highlight');
 })












































    });
})(jQuery);