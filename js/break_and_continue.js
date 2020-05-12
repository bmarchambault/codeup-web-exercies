"use strict"
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if
// they enter invalid input.  Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.  Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

function isNumeric(num){
    return !isNaN(num);
}
function oddNum(num){
    return num % 2 !===0;
}

function numGame() {
    do {
        let userNum = prompt('Please enter an odd number between 1 & 50');
        let isValidNumber = isNumeric(userNum) && oddNumber(userNum);
        if (isValidNumber){
            console.log('Number to skip is ' + userNum);
            break;
        }else{
            alert("that's not a valid number.");
        }
    } while (true);
    for (var i = 1; 1 <= 50; i++) {
        if ()
    }
}





function isValidNumber ()...
do{
    var getUserNumber = parseFloat (prompt("Please enter an odd number between 1 & 50."));//numeric value
    var oddNumber = (getUserNumber % 2 ===1);
    var isValidNumber = ( oddNumber) && (getUserNumber >= 1) && (getUserNumber <= 50); //boolean value
    if(isValidNumber){//if this is true
        console.log("Number to skip is: " + getUserNumber);//display numeric NOT boolean value
        break;
    }
} while (true);
for (var i = 1; i <= 50; i += 2) { //( i+=2 increment by 2), by starting at 1, we skip every other number - dispaying odd #'s
    if (i === getUserNumber) {
        console.log("Yikes!  Skipping number: " + getUserNumber)
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}



// examples i used for above++++++++++++++++++++++++++++++++++++++++++++++++++++++

// while(guess !== password) {
//     guess = generateGuess();
// }
//
// var password = "Open Sesame";
// var guess = "";
// while(guess !== password) {
//     guess = prompt("Please enter the password.");
// }

// for (var i = 1; i <= 10; i += 1) {
//    if (i === 5) {
//        continue; // continue omits the condition of 1===5, and then continues the loop again
//    }
//    console.log(i);
// }

//skips multiples of 5 and 100:

// var y = 0;
//
// while (true) {
//     y++;
//     if (y === 100) {
//         console.log("End of loop!");
//         break;
//     }
//     if (y % 5 === 0) {
//         continue;
//     }
//     console.log(y);
// }++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

