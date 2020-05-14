'use strict'
// (function($){
    $(document).ready(function(){
var audioFile = ('../audio/pew-pew.mp3');
        // an array with the keys in the pattern. use the console.log on the html page to findout what the keys are.
        var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
        var konamiCodePosition = 0;// a variable to remember the 'position' the user has reached so far.
        // We also need a way to track how many keys in the pattern have been successfully pressed, so that we know when it’s complete:


        //add keydown event listener
        $(document).keydown(function (e){
            if(konamiCode.indexOf(e.key) < 0 || e.key !== konamiCode[konamiCodePosition]){
                konamiCodePosition = 0;
                return;
            }
            konamiCodePosition++;

            if (konamiCode.length === konamiCodePosition){
                konamiCodePosition = 0;
               konamiGoooooo();
            }
        });

// var pandaMsg = $('.pandaMsg').html();
function konamiGoooooo (){
var pandaGif = $('.panda').html();
var pewPew = $('.audio').html();
var audio = new Audio('../audio/pew-pew.mp3');
var pandaMsg = $('h2').html("Check out Double-OH-Panda.  Oh!  They missed") ;
    $('h3,ul,li').css({'color': 'gray', 'font-size': '10px'})
    $('body').css('background-color', '#edd8ec');


    pandaGif =  $('.panda').html(
        '<iframe src="https://giphy.com/embed/cnbsOTkEJnq0" width="480" height="277"  class="giphy-embed" allowFullScreen></iframe>',
        // '<iframe src="../audio/pew-pew.mp3" allow="autoplay" style="display:none" id="iframeAudio"></iframe>' );
    );
    console.log(pewPew);

    pewPew = $('.audio').html('audio.play()')
        pewPew = $('.audio').html('<iframe src="../audio/pew-pew.mp3" allow="autoplay" style="display:none" id="iframeAudio"></iframe>');

    $('ol').html("<h2>Panda Facts</h2><li>Panda researchers have to wear panda costumes to work with cubs</li>\n" +
        "    <li>Since Pandas are on loan from China, when babies are born they are sent back to expandt the gene pool.\n" +
        "        <br>-- VIA FED EX!</li>")
}



        // var paraContent = $('#paragraph').html();//id selector.  creating an alert with id selector.
        // alert(paraContent);




        // Detecting when the pattern has been entered #
        //     Now we’re ready to match key presses against our pattern.
        //
        //     In our keyHandler() function, we first need to make sure that the key that was pressed is in the pattern at all. If it’s not, we’ll reset the number of matched items (current) to 0 and return so that our callback function stops running.
        //
        //     We can use the Array.indexOf() method to check if the key is in our pattern array. If the index is less than 0, it’s not there.


//
//
//
//
// //
//         document.addEventListener('keydown', function(e) {
//             // get the value of the key code from the key map
//             var key = allowedKeys[e.keyCode];
//             // get the value of the required key from the konami code
//             var requiredKey = konamiCode[konamiCodePosition];
//
//             // compare the key with the required key
//             if (key == requiredKey) {
//
//                 // move to the next key in the konami code sequence
//                 konamiCodePosition++;
//
//                 // if the last key is reached, activate cheats
//                 if (konamiCodePosition == konamiCode.length) {
//                     activateCheats();
//                     konamiCodePosition = 0;
//                 }
//             } else {
//                 konamiCodePosition = 0;
//             }
//         });
//
//         function activateCheats() {
//             document.body.style.backgroundImage = "url('images/cheatBackground.png')";
//
//             var audio = new Audio('audio/pling.mp3');
//             audio.play();
//
//             alert("cheats activated");
//         }















































































    });
// })(jQuery);