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


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// function analyzeColor() {
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
//  console.log(analyzeColor());


// function randomColorFunction () {
//     return randomColor
// }
// console.log(randomColorFunction());

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
///================================================================================
//     //    DOESNT WORK = WHY?
// function analyzeColor(randomColor) {
//     //alerts don't work with this
//     switch ("randomColor") {
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

// switch (analyzeColor) {
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
//WORKS======================================================
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

//================================================================================
    //    DOESNT WORK = WHY?
// var usersColorChoice = (prompt("What's your favorite color?").toLowerCase());
//
// switch (usersColorChoice) {
//     case usersColorChoice === "blue" :
//         alert(usersColorChoice + ": Blue is the color of the sky.");
//         break;
//     case "red":
//         alert(usersColorChoice + ": Strawberries are red.");
//         break;
//     case "cyan":
//         alert(usersColorChoice + ": I don't know anything about cyan.");
//         break;
//     default:
//         // alert(usersColorChoice + ": I'm sure I can think of something that color.");
// }
//======================================================================================
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

//=======================================================
//WORKS================================
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
//
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
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalAmt = Number((prompt("what is your total bill?")));
//
// function calculateTotal(number, totalAmt) {
//    var number = luckyNumber
//     if (number === 5) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * 1).toFixed(2)));
//     } else if (number === 4) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * .50).toFixed(2)));
//     }else if (number === 3) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * .35).toFixed(2)));
//     } else if (number === 2) {
//         alert("discounted total is" + " $" + (totalAmt -(totalAmt * .25).toFixed(2)));
//     } else{
//         alert("discounted total is" + " $" + totalAmt);
//     }
// }
// console.log(luckyNumber);
// console.log(totalAmt);
// console.log(calculateTotal(1, 100), "100");
// console.log(calculateTotal(2, 100), '75');
// console.log(calculateTotal(3, 100), '65');
// console.log(calculateTotal(4, 100), '50');
// console.log(calculateTotal(5, 100), '0');
//QUESTION, WHY IS MY CONSOLE LOG FOR CALCULATE TOTAL SHOWING UNDEFINED?


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
 // var typeNumber = ("Please type a number");
//  var isEven = typeNumber % 2 == 0;
// var addOneHundred = typeNumber + 100;
// var isPositiveNumber =Math.sign(typeNumber) == 1;
var userPreference;


function getUserNumber () {
    if (confirm("Would you like to input a number?") == true) {
        userPreference = Number(prompt("Please type a number"));
    } else {
        alert("Maybe next time then");
    }
    console.log(userPreference);//works
}


// calling the function:
getUserNumber(userPreference);


//+++++++++++++++functions for aboutUserNumber function:++++++++++++++++++++

        function isEven() {
            if (userPreference % 2 == 0) {
                alert("That number is even");
            } else {
                alert("That number is odd")
            }
            // console.log(isEven(13), "is odd");
            // console.log(isEven(23), "is odd");
            // console.log(isEven(10), "is even");
        }
    //
        function numberPlusOneHundred() {
            var addOneHundred = userPreference + 100;
            alert("If you add 100 that number is:" + (addOneHundred));
        }
    //
        function numberIsPositive() {
            if (Math.sign(userPreference) == 1) {
                alert("That number is a positive number.");
            } else {
                alert("That's a negative number.");
            }
        }
//         console.log(numberIsPositive(13));
// console.log(numberIsPositive(-23));
// console.log(numberIsPositive(10));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function aboutUsersNumber() {
    if (userPreference) {
        isEven(),
        numberPlusOneHundred(),
        numberIsPositive();
    } else {
        alert("That's not a number, silly");
    }
}


aboutUsersNumber();



//
// function getUserNumber (){
//     var userConfirmsToInputNumber = confirm("Would you like to input a number?");
//     if (userConfirmsToInputNumber) {
//         return Number(prompt(typeNumber));
//     } else {
//         alert("Maybe next time then");
//     }
//







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

    getUserNumber();
    aboutUsersNumber;


//
    // function aboutUsersNumber() {
    //
    // }
// console.log(userNumberInput);
// console.log(isEven(userNumberInput));
// // console.log(numberPlusOneHundred());
// console.log(numberIsPositive());