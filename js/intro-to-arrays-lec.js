"use strict";
// console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data

// var arr1 = [1,2,3,4,5];
// console.log(arr1);
// var arr2 = ['a', 'b', 'c',];
// var arr3 = [6, 'd', 7, 'e'];
// console.log(arr2[3]); //shows that array item at that index in that array
// var arr4 = [[1,2,3,4,5], ['a', 'b', 'c',], [6, 'd', 7, 'e']];//a nested set of arrays
// to get to a certain character in a certain array:
//     console.log(arr4[1][2]);
// if you find that your are nesting multiple arrays in an array, consider making them object instead (future lesson)


// counting arrays, use:
//       arrayname.length
//
// to return the last element in an array:
//     console.log(arrayname.length - 1);
//
// assign the length of a array into a var:
//      var arrLength = arrayname.length;
//      this var will now hold the value of the number of indexes in an array
//
// iterating over arrays:
//     can be confusing because we just learned for loops.  iterating over arrays is almost like
//
// FOR LOOPS AND ARRAYS:
//
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
//           without a loop, we would have to console log each index to display a list of the colors
//           console.log ([index number]) - over and over through end of index.
//          -- instead use a for loop.
//
// 
//      FOR LOOP SYNTAX: 
//           for( where do i want to start; where do i stop, how do i get to the stop point - increase or decrease){
//              what you want to happen, console log, alert.  Or put your condtionals here;
//              };
//                           to use the for loop to iterate over an array.  start at the begining index (0)
//                           stopping condition is then of the array which is <2
//                           and i++ gets us there.
//     to iterate:
//       for (var i = 0; i < colors.length; i++) {  //i < array.length means : go through the loop until loop number of 
//     //                                             i is greater than the index length of the array. 
//           console.log(colors[i]);
//       }
//
//      this iterates through the array in reverse order:
//
//            for (var i = colors.length -1); i >= 0; i--){
//           console.log(colors[i]);
//
//     this for loop in arrays gives us some flexibility
//
// FOR EACH LOOPS AND ARRAYS
//
//     the forEach loop iterates over all the array elements.  It was was created specifically for arrays
//         1.  call the forEach method on the array
//
//         2. forEach takes in a function parameter :  arrayname.forEach(function(){});
//           --function has 3 availble paramenters
//
// FOR EACH SYNTAX:
//     arrayname.forEach(function(parameter1, parameter2, parameter3) {
//         what you want it to do - console log, return, alert, if/else, loop maybe etc;
//             });
//     example:
//         colors.forEach(function(color, index, array){  // more common use is color, index only
//             console.log(color, index);});
//     ---this lists the elements and their index.

/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
var pies = [];
console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);


// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
 var shapes = ['square', 'rectangle', 'circle', 'triangle'];


// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
 var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];


// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
var daysOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', "sunday"];


// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
​var favoriteFoods = ['homemade', 'italian', 'moms', 'ribs'];


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
console.log(shapes.length);
console.log(instructors.length);
console.log(daysOfTheWeek.length);
console.log(favoriteFoods.length);
// TODO: console.log the length of the instructors array
// TODO: console.log the length of the daysOfTheWeek array
// TODO: console.log the length of the favoriteFoods array



/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);//undefined because we don;t have a shapes index of 4

// TODO: console.log each element of the instructors array

//basically repeat the above, but change array names.

// TODO: console.log the first three elements of the daysOfTheWeek array
// TODO: console.log the first three elements of the favoriteFoods array


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

function returnLastElement(arrayname) {
    return arrayname.length - 1;
}

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
for (var i = 0; i < shapes.length; i++) {
    console.log(shapes[i]);
}

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.
for (var i = 0; i < shapes.length; i++){
    console.log(shapes[i]);
    if(shapes[i] === 'circle') {
        alert('Thats my favorie shape!'); //will continue without a break statement.
        break;
    }}


// TODO: What happens if we change var i = 1? or var i = 2;
//      the iteration starts at that index
// TODO: What are benefits of using loops to iterate?
//        faster results
// TODO: How does the loop know when to stop iterating?
//      when it reaches the last index

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
for(var i = 0; i < instructors.length; i++) {
    console.log(instructors[i]);
}

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
for (var i = 0; i < daysOfTheWeek.length; i++){
    console.log(daysOfTheWeek[i]);
}

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"

for (var i = 0; i < instructors.length; i++) {
    console.log(shapes[i]);
    if (instructors[i] === 'Sophie' || instructors[i] === 'justin' || instructors[i] === 'david') {
        alert("Hey, I know" + instructors[i]);
    }​ else {
        alert("i havent had class with" + instructors[i]);
    }
}
/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function (shape) {
    console.log(shape);

});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
// var pies = ["apple", "cherry", "key lime", "huckleberry"];
pies.forEach(function(pie){
    console.log(pie);
});
// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function(instructor){
    console.log(instructor);
});
// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function(day){
    console.log(day);
});
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

