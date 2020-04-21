// Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
// Do not worry about the real operations to get the values, the goal of these exercises is to understand how
// real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
//     they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//     If price for a movie per day is $3, how much will you have to pay?

var mermaidMovieDaysRented = 3, brotherBearbMovieDaysRented = 5, herculesMovieDaysRented= 1, pricePerDay=3;
var totalDaysRented = mermaidMovieDaysRented + brotherBearbMovieDaysRented + herculesMovieDaysRented;
var totalPayForMovieRentals =  totalDaysRented * pricePerDay;

console.log(totalPayForMovieRentals);

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
//     rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this
//     week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googleHourlyRate=400, amazonHourlyRate=380, facebookHourlyRate=350, hours=(num);
var googleweeklyPay=googleHourlyRate * hours(6);
var amazonWeeklyPay = amazonHourlyRate * hours(4);
var facebookWeeklyPay = facebookHourlyRate * hours(10);
var totalWeeklyPay = googleweeklyPay + amazonWeeklyPay + facebookWeeklyPay
console.log ;


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict
// with her current schedule.

var classFull = true, scheduleConflict = true;
var isEnrolled = !classFull && !scheduleConflict;
var isNotEnrolled = classFull || scheduleConflict;



// A product offer can be applied only if a person buys more than 2 items, and the
// offer has not expired. Premium members do not need to buy a specific amount of products.

var itemsBought = 2, hasExpired = false, isPremMember=true;
var offerApplies = ((itemsBought<=itemsBought) && !hasExpired) || isPremMember;
var offerDoesNotApply = (itemsBought<itemsBought) || hasExpired || !isPremMember;


//     Use the following code to follow the instructions below:
    var username = 'codeup';
    var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//     the password must be at least 5 characters
//     the password must not include the username
//     the username must be no more than 20 characters
//     neither the username or password can start or end with whitespace

var isValidUsername = username.legth<=20 && username.trim();
var isValidPassword = password.legth>=5 && password.trim() && !username;

//------------------------------------------------instructor solutions:----------------------------------------------

// // Movie Rental
// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
// ...
// var dailyRentalRateDollars;
// var littleMermaidDaysRented;
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
