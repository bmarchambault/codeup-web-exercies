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
//When you click a button, it highlights the last li in each ul.
$('#highlightBtn').click(function () {
    $('ul').each(function () {
        $(this).children().last().css('background-color', 'salmon');
    })
});
//another solution:
        //$('#highlight
//When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
$('h3').click(function () {
    $(this).next().children().css('font-weight', 'bold');
})

//When any list item is clicked, first li of the parent ul should have a font color of blue.
$('li').click(function(){
    $(this).parent().children().first().css('color','blue');
})

$('.box').click(function(){
    $(this).toggleClass('changeBorder');
})

//Bonus
// Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
//
// The rules are the following:
//
// The left frame swaps to the right and takes the image from the frame in the center.
// The center frame swaps randomly to either the left or right.
// The right frame swaps to the left and takes the image from the frame in the center.




































    });
})(jQuery);