var sum=0;
for(var i=4; i<8; i++) {
    if (i == 6) {
        continue;
    }
    sum += i;
}
console.log(sum);
//returns 16, why?

// it would be beneficial to your understanding to console.log each iteration of a loop
//
//
// ryanorsinger  5:14 PM
// When working to determine why some code is doing what it does, it’s important to write down what you know about it and what you don’t know yet about it.
//     With the code above, we know that the variable sum starts with 0 before the loop runs.
//     We also know that the loop is running a certain number of times, since the sum is 16 in the console.log that happens after the loop.
//     The loop is starting at 4 because of the var i = 4 assignment.
//     So let’s run through the loop where i is 4.
// The if condition for i == 6 is false, since 4 ain’t 6, so we don’t run the “then” part of that if condition.
//     Then, the line sum += i runs.
//     sum += i is short for sum = sum + i.  But what does that actually mean? It’s a variable reassignment and that happens a lot. But this is unique because we’re re-assigning a variable to hold a new value based on what it used to be.
//     I think about it in terms of: newValueForTheVariable = itsOldValue + 1, but in this case the variable has the same name of sum.
//     With variable assignment, we’re evaluating whatever the code does on the right side of that single equal sign = and then assigning that value to the variable on the left hand side of the single equal =.
// Let’s pretend (or set) the loop to only run once and consider what the guts are doing
// sum = 0
// then the loop would run once with i set to 4.
// So sum = sum + i would become sum = sum + 4.
// And since the first value for sum is 0, then 0 + 4 would be the value assigned to the sum variable at the end of the loop.
//     I like to think about sum += someNumber operations like going to a diner. Before ordering anything, my bill is 0. When I order an iced tea, total = total + 1. Then if I get fries, total = total + 3, etc.. for each item. So the real world often has new values for a variable that are defined in terms of their last value (edited)
//
//
//
// Ted Zamarron  5:15 PM
// If in the if statement it was i <= 8 then it would add 8 to sum and the return sum. I would agree with @Jasmine Rivera and use console.log where you can to see what is happening.
//
//     Bobbie Archambault  5:25 PM
// so, when sum is reassigned to 4 it loops again because 4 is less than six, new loop plus new sum of 4 is  nine.  skip loop 6, 7 + 9 is SIXTEEN.  ugh.  Thank you!



String.prototype.toJadenCase = function () {
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");


function getFirstValue(arr) {
    return arr[0];

}

function convert(hours, minutes) {
    var minutes = sec * 60;
    var sec = minutes / 60;
    console.log(minutes * sec);
}