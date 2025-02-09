(function() {
    "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
// var person = {};
// person.firstName = " Bobbie ";
// person.lastName = "Archambault ";
//
// //instuctors solution:
// //     var person = {
// //     firstName: "Bobbie ",
// //     lastName: "Archambault"
// //     };
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
// person.sayHello = function(){
//     return 'Hello from' + person.firstName + person.lastName;
// }
// console.log(person.sayHello());
// //Instructor/class solution:
// //Same as mine
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to more than $200.
//          * If a shopper spends more than $200, they get a 12% discount.
//      *  Write a JS program,
//      *      using conditionals,
//      *      that logs to the browser,
//      *          how much Ryan, Cameron and George need to pay.
//  *          We know that:
//      * Cameron bought $180,
//      * Ryan $250
//      * George $320.
//      * Your program will have to
//      *      display a line with the name of the person,
//      *      the amount before the discount, the discount, if any,
//      *      and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper.
//      *      Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
//     var shoppers = [
//         {
//         name: 'Cameron',
//         amount: 180
//         },{
//         name: 'Ryan',
//         amount: 250
//         },{
//         name: 'George',
//         amount: 320}
//     ];
//     console.log(shoppers[0].name);
//
// shoppers.forEach(function(shopper) {
//         //console.log(shopper.name + " - " + shopper.amount);
//         if(shopper.amount >= 200){
//             var discountMessage = "Your new total is $";
//             var beforeDiscountMessage = "Congratulations " + shopper.name + ", you spent $" + shopper.amount + ". ";
//             var discount = (shopper.amount - (shopper.amount * .12)).toFixed(2);
//             console.log(beforeDiscountMessage + discountMessage + discount);
//         }else{
//             console.log()
//         }
//     });
// //instructor solution:
//     //created function first
//     // function discountChecker(shoppers){
//     //     shoppers.forEach(function (shopper) {
//     //         if (shopper.amount >= 200){
//     //             console.log(shopper.name + " has spent $" + shopper.amount.toFixed(2) + " today.  They qualify for a 12% discount, the new total is: $" + (shopper.amount - (shopper.amount * .12)).toFixed(2 + "."));
//     //         } else{
//     //             console.log(shopper.name + ", thanks for shopping with us today.  Your total is: $" + shopper.amount + ".  You only need $" + ((200 - shoppers.amount).toFixed(2))) + " to qualify for a 12% discount."
//     //         }
//     //
//     //     })
//     // }
//
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
//     var books = [
//         {
//             title: "Damja",
//             author: {
//                 firstName: "Anne",
//                 lastName: "McCaffery",
//             },
//         },{
//             title: "Player Piano",
//             author: {
//                 firstName: "Kurt",
//                 lastName: "Vonnegut",
//             },
//         }, {
//             title: "Osage County",
//             author: {
//                 firstName: "Tracy",
//                 lastName: "Letts",
//             }
//         }, {
//             title: "Where the Sidewalk Ends",
//             author: {
//                 firstName: "Shel",
//                 lastName: "Silverstien",
//             }
//         }];
//
//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//
//     books.forEach(function (book,) {
//         var titleMessage = "Book " + books[0].title + ", is:  " + book.title + ".";
//         var author = book.author.firstName + book.author.lastName;
//         var authorMessage = "The book was written by, " + author;
//         console.log(titleMessage + authorMessage + author);
//     })
//
//
// //instructor/class solution: using a for loop
//     function loggingBooks(books) {
//         for (var x = 0; x < books.length; x++) {
//             console.log("Book #" + (x + 1) + "\n" + "Book Title: " + books[x].title + "\n" + "Book Author: " + books[x].author.firstName + " " + books[x].author.lastName);
//         }
//     }
// loggingBooks(books)
//
// //as a for each
//     books.forEach(function (book, index) {
//         console.log("Book #" + (index + 1) + "\n" + "Book Title: " + books[index].title + "\n" + "Book Author: " + books[index].author.firstName + " " + books[index].author.lastName);
//     })
//
//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
//     function createBook(title, fName, lName){
//         return {title: title,
//                 author: {
//                     firstName:fName,
//                     lastName:lName
//         }
//         };
//         arr.push(newBook);
//         return arr;
//     }
//     createBook(title, fName, lName);
//     loggingBooks(books);
//
// })();




   let movies = [
    {
        "title": "Casablanca",
        "rating": "4",
        "id": 1
    },
    {
        "title": "Star Wars: A New Hope",
        "rating": "5",
        "id": 2
    }
]

movies.forEach(function(movie){
    return movie.title + movie.rating;
})
console.log(movies);

let createMovie =   (title, rating ) => {
    let newMovie = new Object(); {
        newMovie = {
            'title': 'title',
            'rating': 'rating',
            'id': movies.length-1
        }
        // movies.push(newMovie);
        // return movies;
    }
}


let addMovie = () => {
    createMovie()
    movies.push(newMovie)
    return movies;
}

console.log(addMovie(createMovie('fake', '4')));



})();