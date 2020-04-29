"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//

// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function analyzeColor(colorName) {
//     if (colorName === "blue"){
//         return "Blue is the color of the sky";
//     } else if (colorName === "red") {
//         return "Strawberries are red";
//     } else if (colorName === "cyan") {
//         return "I don't know anything about cyan";
//     } else {
//         return "choose another color";
//     }
//
// }

// console.log(analyzeColor("yellow"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("cyan"));
//============================================================================

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function analyzeColor(randomColor) {
//     if (randomColor === "blue"){
//         return "Blue is the color of the sky";
//     } else if (randomColor === "red") {
//         return "Strawberries are red";
//     } else if (randomColor === "cyan") {
//         return "I don't know anything about cyan";
//     } else {
//         return "choose another color";
//     }
// }
// console.log(randomColor);
//  console.log(analyzeColor());
///============================================================================

// function randomColorFunction () {
//     return randomColor
// }
// console.log(randomColorFunction());

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function analyzeColor(randomColor) {
//
//(calling switch into the function:)
//     switch (randomColor) {
//     case "blue":
//         alert(randomColor + ": Blue is the color of the sky.");
//         break;
//     case "red":
//         alert(randomColor + ": Strawberries are red.");
//         break;
//     case "cyan":
//         alert(randomColor + ": I don't know anything about cyan.");
//         break;
//    default:
//        alert(randomColor + ": I'm sure I can think of something that color.");
// }
// }
// analyzeColor(randomColor);

//INSTRUCTOR SOLUTION:
// function analyzeColorSwitch(randomColor) {
//
//(calling switch into the function:)
//     switch (randomColor) {
//     case "blue":
//        return  " Blue is the color of the sky.";
//         break;
//     case "red":
//         return "Strawberries are red.";
//         break;
//     case "cyan":
//         return "I don't know anything about cyan.";
//         break;
//    default:
//       return "I'm sure I can think of something that color.";
// }
// }

//console.log(analyzeColorSwitch(randomColor));

//the returns act as a break here.  You can put a break, but not necessary.
//returns automatically stop the code if the condition is met.
//============================================================================
// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// switch (randomColor) {
//     case "blue":
//         alert("Blue is the color of the sky.");
//         break;
//     case "red":
//         alert("Strawberries are red.");
//         break;
//     case "cyan":
//         alert("I don't know anything about cyan.");
//         break;
//    default:
//        alert("I'm sure I can think of something that color.");
// }
// console.log(randomColor);
//============================================================================
// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// switch (randomColor) {
//     case "blue":
//         alert(randomColor + ": Blue is the color of the sky.");
//         break;
//     case "red":
//         alert(randomColor + ": Strawberries are red.");
//         break;
//     case "cyan":
//         alert(randomColor + ": I don't know anything about cyan.");
//         break;
//    default:
//        alert(randomColor + ": I'm sure I can think of something that color.");
// }
// console.log(randomColor)
//============================================================================
/// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// switch (randomColor) {
//     case "orange":
//         alert(randomColor + ": One of my favorite colors is Orange, but dark-orange.");
//         break;
//     case "purple":
//         alert(randomColor + ": My son loves that color.");
//         break;
//     case "black":
//         alert(randomColor + ":  That's so dark, but it matches with everything!");
//         break;
//     default:
//         alert(randomColor + ": Hmm that's a nice color.");
// }
// console.log(randomColor);
//===============================================================================
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// INSTRUCTOR SOLUTION:
//
// var userColor = prompt()
// alert(analyzeColorSwitch(userColor));

//+++++++++++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++
var usersColorChoice = (prompt("What's your favorite color?").toLowerCase());

switch (usersColorChoice) {
    case "blue" :
        alert(usersColorChoice + ": Blue is the color of the sky.");
        break;
    case "red":
        alert(usersColorChoice + ": Strawberries are red.");
        break;
    case "cyan":
        alert(usersColorChoice + ": I don't know anything about cyan.");
        break;
    default:
        alert(usersColorChoice + ": I'm sure I can think of something that color.");
}
console.log(usersColorChoice);
//======================================================================================


//++++++++++++++++++++++++WORKS+++++++++++++++++++++++++++++++++++++++++++++++++++++
// var usersColorChoice = (prompt("What's your favorite color?").toLowerCase());
//
// switch (usersColorChoice) {
//     case "orange":
//         alert(usersColorChoice + ": One of my favorite colors is Orange, but dark-orange.");
//         break;
//     case "purple":
//         alert(usersColorChoice + ": My son loves that color.");
//         break;
//     case "black":
//         alert(usersColorChoice + ":  That's so dark, but it matches with everything!");
//         break;
//     default:
//         alert(usersColorChoice + ": Hmm that's a nice color.");
// }
// console.log(usersColorChoice);
//========================================================================================

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// INSTRUCTORS SOLUTION:
function calculateTotal (luckyNum, bill) {
    if (luckyNum===0) {
        return bill;
    } else if (luckyNum === 1) {
        return (bill * .90);
    //    this is the same as bill - (bill * .1)
    } else if (luckyNum === 2) {
        return (bill * .75);
    } else if (luckyNum === 3) {
        return (bill * .65);
    } else if (luckyNum === 4) {
        return (bill * .5);
    } else {
        return 0;
    }
}

//=======================================================
// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function calculateTotal(number, totalAmt) {
//     // var discountPrice = totalAmt -(luckyNumber * totalAmt);
//     if (number === 5) {
//         return (totalAmt -(totalAmt * 1));
//     } else if (number === 4) {
//         return (totalAmt -(totalAmt * .50));
//     }else if (number === 3) {
//         return (totalAmt -(totalAmt * .35));
//     } else if ( number === 2) {
//         return (totalAmt -(totalAmt * .25));
//     } else{
//         return totalAmt;
//     }
// }

// console.log(calculateTotal(0, 100), '100');
// console.log(calculateTotal(4, 100), '50');
// console.log(calculateTotal(5, 100), '0');
//============================================================================
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// INSTRUCTOR SOLUTION:
var luckyNumber = Math.floor(Math.random() * 6);
var userBill = ParseFloat((prompt("what is your total bill?")));
//parseFloat is more accurate conversion here.
alert("Your lucky number is " + luckyNumber + ". Before discount, your bill was: $" + userBill.toFixed(2)
+ ". After discount, your final total today is: $" + calculateTotal(luckyNumber, userBill).toFixed(2));




// ++++++++++++WORKS++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var luckyNumber = Math.floor(Math.random() * 6);
// var totalAmt = Number((prompt("what is your total bill?")));
//
// function calculateTotal(luckyNumber, totalAmt) {
//    // var number = luckyNumber
//     if (luckyNumber === 5) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * 1).toFixed(2)));
//     } else if (luckyNumber === 4) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * .50).toFixed(2)));
//     }else if (luckyNumber === 3) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * .35).toFixed(2)));
//     } else if (luckyNumber === 2) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * .25).toFixed(2)));
//     } else{
//         alert("discounted total is" + " $" + totalAmt);
//     }
// }
// calculateTotal(luckyNumber, totalAmt);
// console.log(luckyNumber);
// console.log(totalAmt);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(calculateTotal(1, 100), "100");
// console.log(calculateTotal(2, 100), '75');
// console.log(calculateTotal(3, 100), '65');
// console.log(calculateTotal(4, 100), '50');
// console.log(calculateTotal(5, 100), '0');
//QUESTION, WHY IS MY CONSOLE LOG FOR CALCULATE TOTAL SHOWING UNDEFINED?
//because console.log displays a return value and alert is not a return value.  there's no variable holding the value.


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
*/
// INSTRUCTOR SOLUTION:
//---Created a function for even and odd:
function evenOrOdd(num){
    return (num %2 === 0) ? num + "is an even number" : num + "is an odd number";
}
//--created 100 function:
function plusOneHundred(num) {
    return num + 100;
}
//--creates pos num function
function postitiveOrNegative(num){
    if (num > 0) {
        return num + "is positive number";
    } else {
        return num + "is a negtive number";
    }
}


function numberGame() {
if(confirm("would you care to play a game with me?")) {
    var userNum = parseFloat(prompt("give me a number please."));
    if (!isNaN(userNum)){//this is an if statement in an if statement, !isNaN means, if its not, not a number because NaN converts to a number.
        alert(evenOrOdd(userNum));
        alert(plusOneHundred(userNum));
        alert(postitiveOrNegative(userNum));
    } else {
        alert('youre no fun');
    }
} else {
    alert('maybe next time.');
}
}
numberGame();
//note you can put an if in and if. you can put conditionals in conditionals, for loops in for loops etc
//other notes:  a return statement in the evenOrOdd, plusOneHundred, etc


// var userPreference;
//
// function getUserNumber () {
//     if (confirm("Would you like to input a number?") == true) {
//         userPreference = Number(prompt("Please type a number"));
//     } else {
//         alert("Maybe next time then");
//     }
//     // console.log(userPreference);//works
// }
//
//
// // calling the function:
// getUserNumber(userPreference);
//
//
// //+++++++++++++++functions for aboutUserNumber function:++++++++++++++++++++
//
//         function isEven() {
//             if (userPreference % 2 == 0) {
//                 alert("That number is even");
//             } else {
//                 alert("That number is odd")
//             }
//             // console.log(isEven(13), "is odd");
//             // console.log(isEven(23), "is odd");
//             // console.log(isEven(10), "is even");
//         }
//     //
//         function numberPlusOneHundred() {
//             var addOneHundred = userPreference + 100;
//             alert("If you add 100 that number is:" + (addOneHundred));
//         }
//     //
//         function numberIsPositive() {
//             if (Math.sign(userPreference) == 1) {
//                 alert("That number is a positive number.");
//             } else {
//                 alert("That's a negative number.");
//             }
//         }
//         console.log(numberIsPositive(13));
// console.log(numberIsPositive(-23));
// console.log(numberIsPositive(10));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//
// function aboutUsersNumber() {
//     if (userPreference !== undefined) {
//         isEven(),
//         numberPlusOneHundred(),
//         numberIsPositive();
//     } else {
//         alert("That's not a number, silly");
//     }
// }
//
//
// aboutUsersNumber();






//!!!!!!!!!!!!!!!!!!!!GREAT EXAMPLE OF WHAT NOT TO DO!!!!!!!!!!!!!!!!!!!!!
            // switch (aboutUsersNumber) {
            //     case NaN:
            //         alert("Silly, that's not a number");
            //         break;
            //     case typeNumber === isEven :
            //         alert("That number is even");
            //     case (typeNumber === !isEven):
            //         alert("That number is odd");
            //     case typeNumber === isPositiveNumber:
            //         alert("Thats a positive number");
            //     case typeNumber === !isPositiveNumber:
            //         alert("That's a negative Number");
            //     default:
            //         alert("if you add 100, that equals:" + addOneHundred)
            // }
        // console.log(userConfirmsToInputNumber);

