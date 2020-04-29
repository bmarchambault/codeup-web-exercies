"use strict"


// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7)

function showMultiplicationTable(num) {
    for (var i = 0; i <= 10; i += 1) {
        console.log(num + " X " + i + " = " + (i * num));
    }
}
showMultiplicationTable(9)


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and
// output to the console whether each number is odd or even.


    for (var i = 0; i <= 9; i += 1) {
        var randomNumber = Math.floor((Math.random() * 200) + 20);
        if (randomNumber % 2 ===0){
            console.log( randomNumber + " is even");
        }else {
            console.log(randomNumber + " is odd");
        }
    }


//come back to this

//Create a for loop that uses console.log to create the output shown below.
//1
//22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


for (i = 1; i <= 9; i++) {
console.log(String(i).repeat(i));
}



    // for (var j = 0; j < i; j++){
    //     if(i===9 && j === i-1){
    //         console.log( "" + i + "");
    //     } else {
    //         console.log("" + i + ",");
    //     }
    //
    // }
    // // console.log("" + concat(i));
// }
// } while (i === ("" + i)) {
//     console.log("" + i );
// }

// figure out how to repeat the concat

//+++++++++++++++++++++WORKS++++++++++++++++++++++++++++++++++=

// Create a for loop that uses console.log to create the output shown below.
//100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (var i = 100; i >=5; i -= 1) {
    //  if (i===101){
    // console.log("all Done");
    // break;
// }
if (i % 5 === 0) {
    console.log(i);
}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
