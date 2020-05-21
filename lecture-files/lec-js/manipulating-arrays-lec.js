"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array
//modifies the array and returns the new length of the array

var numStrings = ['three','four','five','six','seven'];//start with 5 elements

// TO DO TOGETHER: Use the .push method to add the next String in the sequence.

numStrings.push('eight'); // note:  eight will now become last index. Also, push will now return a number of 6

// TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.

numStrings.unshift('two'); //note, two will now become index zero. Also, unshift will now return a number of 7

// TO DO: Use the .push method to add 'nine' and 'ten'.
// numStrings.push('nine');
// numStrings.push('ten')
numStrings.push('nine', 'ten');
console.log(numStrings.push('nine', 'ten')); //this will return 9
// TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?
// numStrings.unshift('zero');
// numStrings.unshift('one'); //this order will result in 1,0,2
numStrings.unshift('zero', 'one')//
console.log(numStrings.unshift('zero', 'one'));//returns new length
// Console log your results.
console.log(numStrings)//this shows the new array
/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */
//pop and shift return the element you are removing while modifying the original array.
// assign these to a variable for use later:
// create a bucket:  var bucketname = [];
// use the pop, shift variables to create a new array:
// bucketname[pop var, shift var];
//pop and shift do not take in parameters.



var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.
activeCohorts.pop();
//console.log(activeCohorts.pop());
console.log(activeCohorts);
// TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
activeCohorts.shift();//returns and removes the first element
console.log(activeCohorts);
// What do we get when we log the return of these methods?

// TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
activeCohorts.pop();
activeCohorts.shift();
// left in the array. Log the updated array.
console.log(activeCohorts);

/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
//to find specific elements.  to see if what you're looking for exists in the array.
//indexof searches 0-end, helps to find the first occurence of an element
//lastIndexOf searches end-0, helps to find last occurence of an element
//no matter the search method, the return is based off of 0-end index
//so always 0 thru -1

var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TO DO TOGETHER: Find the first index of 'apples' in the array

fruit.indexOf('apples');//returns zero
// TO DO TOGETHER: Find the last index of 'apples' in the array
fruit.lastIndexOf('apples');//returns four
// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
if(fruit.lastIndexOf('grapes') === fruit.length -1){///if fruit[fruit.length -1] is used, it'll return the word grapes.
    fruit.pop();
}
console.log(fruit);
// Console log your new array.


/* ***************************************************************
* 							SLICING
*************************************************************** */
//this does not modify the orginal array, just returns a new onw
//creates a copy of the chosen portion of the original array to do this
//using one parameter will copy everything starting at that index
//using two parameters will copy a section within, those paramenters, not including the STOP parameters


var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.

var ganymedeInstructor = instructors.slice(0,3);
console.log(ganymedeInstructor);


// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.
var fortunaInstructors = instructors.slice(3);
console.log(fortunaInstructors);

//original array not modified, verify:
console.log(instructors);


/* ***************************************************************
* 							REVERSING
*************************************************************** */
//modifies the array by reversing the order
//returns a new array of the origninal in reverse
//.reverse does not take in aruguments.

// TO DO TOGETHER: Take the instructors array and reverse it.
instructors.reverse();
// What will the following console log display?
console.log(instructors);

/* ***************************************************************
* 							SORTING
*************************************************************** */
//will modify the array by converting elements to a string and sort based on their value;
// returns modification
// TO DO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.
var myString = [5,6,'one', 1, 2, '3', '4', true, false, '0'];
//this will separate and sort the numbers and words
//numbers always come first, then letters
//if you add a space, that'll be first
console.log(myString.sort(0));
console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */
//.split - strings to arrays USE THE DELIMETER PROVIDED
//.join - arrays - strings ADD PREFERRED DELIMITER
// does not modify
//use a delimeter.  a space, a comma, etc
var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
submarine.split(' ');
//this doesn't modify the original string, but if you store it in a variable, you can store the split there.
// What will this console log display?
console.log(submarine);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
var newSubmarine = submarineArray.join('\n');
//could also use <br>.  the <br> would need to be viewed in html
//by targeting it via an id - future lessons.
console.log(newSubmarine);
// Log your results.