"use strict"
//
// console.log("hello from external JavaScript");
//
// alert("Welcome to my website!");
//
// var usersFavColor = prompt("What is your favorite color?");
// // the prompt message use in the variable will output in the html.
// //there is no need to duplicate.
// alert("What a coininkidink! " + usersFavColor + " is my favorite color too!");
//-----------------------------------------------------------------------
//exercise 3

var pricePerDay = prompt("what is the daily rental rate?");
var daysRentedTLMermaid = Number (prompt("How many days will 'The Little Mermaid' be rented?"));
var daysRentedBBear = Number (prompt("How many days will 'Brother Bear' be rented?"));
var daysRentedHercules = Number (prompt("How many days will 'Hercules' be rented?"));

var totalDaysRented =  (daysRentedTLMermaid + daysRentedBBear + daysRentedHercules);
console.log(totalDaysRented);
console.log(pricePerDay);
var totalPayForMovieRentals =  (totalDaysRented * pricePerDay);
alert("Total due is" + " $" + totalPayForMovieRentals.toFixed(2));

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
//     rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this
//     week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//
var googleHourlyRate = Number(prompt("what is your hourly rate for Google?"));
var amazonHourlyRate = Number(prompt("what is your hourly rate for Amazon?"));
var facebookHourlyRate = Number(prompt("what is your hourly rate for Facebook?"));
// var hours=(num);
var googleweeklyPay = Number(prompt("How many hours did you work for Google?"));
var amazonWeeklyPay = Number (prompt("what is your hourly rate for Amazon?"));
var facebookWeeklyPay = Number(prompt("what is your hourly rate for Facebook?"));
var totalWeeklyPay = (googleweeklyPay + amazonWeeklyPay + facebookWeeklyPay);
alert("Your total gross weekly pay should be" + " $" + totalWeeklyPay.toFixed(2));



// class enrollment should be a confirm.



// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict
// with her current schedule.
// prompt("Would you like to enroll in class?");
//
var classIsNotFull = confirm("Confirm the class is not currently full?");
var scheduleDoesNotConflict = confirm("Does your schedule conflict with class hours?");

var studentEnrolled = classIsNotFull && scheduleDoesNotConflict;
alert(("Student enrollment status:" + studentEnrolled));

// var isEnrolled = !classFull && !scheduleConflict;
// var isNotEnrolled = classFull || scheduleConflict;
// function enrollInClass (){
//     if ((classFull = "no") && (scheduleConflict = "no")) {
//         return alert("Congratulations, you may enroll for this class!")
//     } else {
//         return alert("Sorry, you may not enroll in this class.")
//     }
// }

//
//
// // A product offer can be applied only if a person buys more than 2 items, and the
// // offer has not expired. Premium members do not need to buy a specific amount of products.
//

var discountBreakPoint =2;
var numberOfItems = Number(prompt("How many items were bought?"));
//note, you do not need the number conversion here because you ellude to it being a number with >= below.
//type conversion takes over.
var offerIsNotExpired = confirm("Confirm off has not exprired.");
var isPremiumMember = confirm("Customer is a premium member.");
var productDiscountIsApplied = offerIsNotExpired && (isPremiumMember || numberOfItems >= discountBreakPoint)


//
// //     Use the following code to follow the instructions below:
// var username = 'codeup';
// var password = 'notastrongpassword';
// // Create a variable that holds a boolean value for each of the following conditions:
// //     the password must be at least 5 characters
// //     the password must not include the username
// //     the username must be no more than 20 characters
// //     neither the username or password can start or end with whitespace
//
// var isValidUsername = username.legth<=20 && username.trim();
// var isValidPassword = password.legth>=5 && password.trim() && !username;
//
// //------------------------------------------------instructor solutions:----------------------------------------------
//
// // // Movie Rental
// // You have rented some movies for your kids: The little mermaid (for 3 days),
// // Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// // If price for a movie per day is $3, how much will you have to pay?
// // ...
// // var dailyRentalRateDollars;
// // var littleMermaidDaysRented;
// var brotherBearDaysRented;
// var herculesDaysRented;
// var totalRentalCost;
// totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
// // Contractor
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
//     How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//     ...
// var googleHourlyRateDollars;
// var amazonHourlyRateDollars;
// var facebookHourlyRateDollars;
// var googleHours;
// var amazonHours;
// var facebookHours;
// var totalPayment;
// totalPayment = googleHours * googleHourlyRateDollars;
// totalPayment += amazonHours * amazonHourlyRateDollars;
// totalPayment += facebookHours * facebookHourlyRateDollars;
// // Student Enrollment
// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
// ...
// var classIsNotFull; // boolean
// var classScheduleDoesNotConflict; // boolean
// var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;
// // Product Offer
// A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:
//     ...
// var numberOfItems; // number
// var offerIsValid; // boolean
// var isPremiumMember; // boolean
// var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);
// // Password Validator
// var username = 'codeup';
// var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//     the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
//     var username = 'codeup';
// var password = 'notastrongpassword';
// var minLength = 5;
// var maxLength = 20;
// var hasMinLength = password.length >= minLength;
// var hasNoUserName = password.indexOf(username) < 0;
// var hasMaxLength = password.length <= maxLength;
// var isTrim;
// var passValid = hasMinLength && hasNoUserName && hasMaxLength && isTrim;
