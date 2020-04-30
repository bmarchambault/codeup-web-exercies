(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Kian', 'Chimay', 'Erlinda', 'Paul'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);



    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log("Name in index " + i + " of the array is:  " + names[i]);
    }

    // for (var i = 0; i < names.length; i++) {
    //     console.log("The names are:  " + i + names[i]);//use the + i + to concat the index number
    // }
    // //
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name) {
        console.log(name);
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function returnFirstElement(array) {
        return array[0] + " is the name at index zero - or first in the array";
        }

    console.log(returnFirstElement(names));

    function returnSecondElement(array) {
        return array[1] + " is the name at index one - or second in the array";
    }

    console.log(returnSecondElement(names));


    function returnLastElement(array) {
        return array[3] + " is the last name in the array";
    }
    //function returnLastElement(array) {
    //         return array[-1] + " is the last name in the array";
    //     }//should be return arr[arr.length-1];
    //should be :
    //function returnLastElement(array){
    //  return array{array.length-1] = " is the last name in the array";
    //}
    console.log(returnLastElement(names));







})();
