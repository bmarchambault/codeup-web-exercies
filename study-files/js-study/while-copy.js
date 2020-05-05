"use strict"


//Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

var i = 1;
// var evenNum=(i % 2 === 0);
while (i < 17) {
        console.log(Math.pow(2, i));
        i++;
    }

//Instructor solution:
// function displayDoubleTwo() {
//     var output = "";
//     var i = 2;
//     while (i <= 65536) {
//         output += I + "\n";
//         i *= 2;
//     }
//     return output:
// }
// console.log(displayDoubleTwo());
//
//
//
//Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random
// number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop
// your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her
// clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the
// random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

var allCones = Math.floor(Math.random() * 50) + 50;

do{
   //write code of what you want to happen here.

}while(true);


//
//
// do{
//     if(isValidNumber){//if this is true
//         console.log("Number to skip is: " + getUserNumber);//display numberic NOT boolean value
//         break;
//     }
//
//
// } while (true);
// for (i = 1; i <= 50; i += 2) { //( i+=2 increment by 2), by starting at 1, we skip every other number - dispaying odd #'s
//     if (i === getUserNumber) {
//         console.log("Yikes!  Skipping number: " + getUserNumber)
//         continue;
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
// }
