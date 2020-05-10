// var sum=0;
// for(var i=4; i<8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     sum += i;
// }
// console.log(sum);
// //returns 16, why?
//
// // it would be beneficial to your understanding to console.log each iteration of a loop
// //
// //
// // ryanorsinger  5:14 PM
// // When working to determine why some code is doing what it does, it’s important to write down what you know about it and what you don’t know yet about it.
// //     With the code above, we know that the variable sum starts with 0 before the loop runs.
// //     We also know that the loop is running a certain number of times, since the sum is 16 in the console.log that happens after the loop.
// //     The loop is starting at 4 because of the var i = 4 assignment.
// //     So let’s run through the loop where i is 4.
// // The if condition for i == 6 is false, since 4 ain’t 6, so we don’t run the “then” part of that if condition.
// //     Then, the line sum += i runs.
// //     sum += i is short for sum = sum + i.  But what does that actually mean? It’s a variable reassignment and that happens a lot. But this is unique because we’re re-assigning a variable to hold a new value based on what it used to be.
// //     I think about it in terms of: newValueForTheVariable = itsOldValue + 1, but in this case the variable has the same name of sum.
// //     With variable assignment, we’re evaluating whatever the code does on the right side of that single equal sign = and then assigning that value to the variable on the left hand side of the single equal =.
// // Let’s pretend (or set) the loop to only run once and consider what the guts are doing
// // sum = 0
// // then the loop would run once with i set to 4.
// // So sum = sum + i would become sum = sum + 4.
// // And since the first value for sum is 0, then 0 + 4 would be the value assigned to the sum variable at the end of the loop.
// //     I like to think about sum += someNumber operations like going to a diner. Before ordering anything, my bill is 0. When I order an iced tea, total = total + 1. Then if I get fries, total = total + 3, etc.. for each item. So the real world often has new values for a variable that are defined in terms of their last value (edited)
// //
// //
// //
// // Ted Zamarron  5:15 PM
// // If in the if statement it was i <= 8 then it would add 8 to sum and the return sum. I would agree with @Jasmine Rivera and use console.log where you can to see what is happening.
// //
// //     Bobbie Archambault  5:25 PM
// // so, when sum is reassigned to 4 it loops again because 4 is less than six, new loop plus new sum of 4 is  nine.  skip loop 6, 7 + 9 is SIXTEEN.  ugh.  Thank you!
//
//
//
// String.prototype.toJadenCase = function () {
//     return this.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }
//
// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
//
//
// function getFirstValue(arr) {
//     return arr[0];
//
// }
//
// function convert(hours, minutes) {
//     var minutes = sec * 60;
//     var sec = minutes / 60;
//     console.log(minutes * sec);
// }

// stuff like this confuses me.
//     var fruitsAndVeggies = [];
// fruitsAndVeggies.push(fruits, vegetables);
// var fruitsAndVeggies = [];
// fruitsAndVeggies = fruits.concat(vegetables);
// i got the correct answer but the 101 js checker gave me an error on the first one.
// 6:34
// even though the expected and the instead got were the exact same string.



//
//     hmm.. those aren’t strings… fruits is an array
// 6:39
// consider a = [1, 2]  and b = [3, 4] .
//     If we do a.push(b), it’s important to know that .push  **changes** the variable a…. The .push  method’s nature is to alter the array it’s being called on
// 6:39
// so in this case a’s new value is going to be the array [1, 2, [3, 4]]
// 6:40
// because the value we pushed onto the end of a was another array entirely
// 6:41
// so the array [1, 2, [3, 4]]  is not the same as the array [1, 2, 3, 4]
// 6:42
//     .concat  feels like a better fit here, because it concatenates arrays together, kinda like how + concatenates strings together
//
// Bobbie Archambault(opens in new tab)  6:43 PM
// THAT makes total sense.  thank you.
//
// ryanorsinger(opens in new tab)  6:43 PM
// So if we have x = [3, 3]  then x.concat(x) would return a new array [3, 3, 3, 3]
// 6:44
// concat doesn’t change the array it’s called on, like .push does
// 6:44
// so it’s good you’re assigning the fruits.concat(vegetables)  to the variable fruitsAndVeggies, since that’s the variable that the tests are checking
// 6:45
// There’s a whole bunch of those array methods, so I’d recommend making flashcards with the method name on one side and the definition and an example of usage on the other side
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function addUsersCoffee(userInput) {
    var userValue = document.getElementById('user-addCoffee').value
    if (userValue!==coffee.name){
        coffees.push(userValue);
    }
        console.log(coffees);
}


//             return array[array.length-1] + " is the last name in the array";
//         }

console.log(addUsersCoffee('dogbreath'));

<form onsubmit="guardarNumeros()">
    <p>Please insert the items</p>
<input type="text" id="box">
    <input type="submit" value="Submit">
    </form>

function guardarNumeros() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);
    console.log(items);
    return false;
}

function findShortest(arry) {
    return arry.reduce(function(prevWord,currWord) {
        if (currWord.length < prevWord.length) {
            return currWord;
        }
        else
            return prevWord;
    })

    /* reduce process
    prevWord 	currWord 		prevWord.length 	currWord.length  currWord < prevWord ?   return value (currWord || prevWord)
    "hello"	 	"muchasgracias"		5			13			no			    "hello"
    "hello"		"hi"			5			2 			yes 			     "hi"
    "hi"		"elephant"		2			8			no			     "hi"
    */
}

findShortest(my_arry);

function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. Initiate a variable that will hold the length of the longest word
    var longestWord = 0;

    // Step 3. Create the FOR loop
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
            longestWord = strSplit[i].length; // ...then longestWord takes this new value
        }
    }
    /* Here strSplit.length = 9
       For each iteration: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
       1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
       2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5
       3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5
       4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5
       5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6
       6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6
       7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
       8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6
       9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6
       10th iteration:       9             no
       End of the FOR Loop*/

    //Step 4. Return the longest word
    return longestWord; // 6
}

findLongestWord("The quick brown fox jumped over the lazy dog");