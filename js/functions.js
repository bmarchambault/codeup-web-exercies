"use strict";

(function(){






//as a developer, youre able to access and test these things out in the console.  its great for us, but if we can
//do it, so can the user.  Also, other libraries may have these same functions and will conflict.
//the way to prevent that is to wrap the script in an immediately invoked function.
//will be first and last line of this code. (function(){hit return here})();





/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayHello (name){
//     return ("Hello," + name +'!');
// }
//
// console.log(sayHello("Bobbie"), "Hello, Bobbie!");


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
//
// var helloMessage = sayHello('Bobbie');
//
// console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// var myName = "Bobbie";
//
// console.log(sayHello(myName));
//



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// function isTwo(num1) {
//     return num1 === 2;
// }
//
// console.log(isTwo(2), true);
// console.log(isTwo(4), false);
// console.log(isTwo(random), 'random');


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//
// function calculatorTip (input1, input2) {
//     // var tipPer = tipAmt/100;
//     var tipAmt = Number(input1);
//     var billAmt = Number(input2);
//     var totalTipAmt = tipAmt * billAmt;
//     return totalTipAmt.toFixed(2);
// }
//

//===================================================================
// // //INSTRUCTOR SOLUTION:
// function calculatorTip(tipPer, bill) {
//     return tipPer * bill;
// }
//===================================================================

// //
// console.log(calculatorTip(.2, 20), 4);
// console.log(calculatorTip(.25, 25.50), 6.37);
// console.log(calculatorTip(.15, 33.42), 5.01);
//

/***********************************
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
//  **********************************/


// var tipAmt = prompt("what percent would you like to tip?");
// var billAmt = prompt("How much was your bill?");
//
// function calculatorTip () {
//     var tipPercent = tipAmt/100;
//     var totalTipAmt = tipPercent * billAmt;
//     return totalTipAmt.toFixed(2);
// }
// alert('Your tip:' + ' $' + calculatorTip() + ".");
//
//==========================================================================
//INSTRUCTOR SOLUTION:
// var bill = prompt('What is your total bill?');
// var tip = prompt("How much would you like to tip?");
//
// // he console logged these var to see if they worked.
//     they came back and strings (console.log(typeof bill);
//     Therefore he converted using number constructor:
//
// var bill = Number(prompt('What is your total bill?'));
// var tip = Number(prompt("How much would you like to tip?"));

// the tip needs to be divided by 100

// var bill = Number(prompt('What is your total bill?'));
// var tip = Number(prompt("How much would you like to tip?"));
// var tipPercentage = tip/100;
// var tipDollars = calculatorTip(tipPer, bill).toFixed(2);
//
// // Next he created the alert:
//
// alert("You will need to tip" + " $" + tipDollars);

//===============================================================================


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


function applyDiscount (price, discount){
    var originalPrice = price;
    var discountPercent = discount;
    var totalDiscount =  originalPrice - (originalPrice * discountPercent) ;
    var discountedPrice = totalDiscount.toFixed(2)

    return discountedPrice;
}

// //=================================================================================================
// //INSTRUCTOR SOLUTION
// function applyDiscount(price, discount) {
//     return price - (price * discount);
// }
//================================================================================================
console.log(applyDiscount(100, .2), '80.00');
console.log(applyDiscount(45.99, .12), 40.4712);









})();