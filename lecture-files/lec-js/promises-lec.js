"use strict";


//CONSOLE LOG EVERYTHING TO MAKE SURE YOURE IN THE RIGHT LOCATION



/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */
//the return of the fetch request is a promise oject.  so the type of the pokemonPromise variable is an object
// //.then() takes in a callback function
//
var pokemonPromise = fetch('https://pokeapi.co/api/v2/pokemon');

//TODO: console log the results of the above Promise. What is the result?
console.log(pokemonPromise); //this returns the object and we can view the data in the console

// TODO: add a method that runs if the Promise resolves successfully
pokemonPromise.then(response => response);
// if you just console.log(response); you cant access the data.  you can only view it in the console.
// status 200 is opposite of 404, it means success.
// if you wanna see the json, you need to parse json method.  which means the response is turned into a joson file that we can manipulate.   if we keep it just as a basic response.   its a complex object that we cant manipulate.
pokemonPromise.then(() => console.log ('API request was successful'))
               .catch(() => console.log ('API request failed'));
pokemonPromise.then(response => response.json())
    .then(jsonResponse => jsonResponse.results)
    .then(pokemonArray => pokemonArray.forEach(pokemon => {
        console.log(pokemon.name)
    }))

.catch(error => console.log(error));
//TODO: add a method that runs if the Promise fails

//TODO: In the callback function of the .then method, parse the response into JSON

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?
//
// function jsonResponse(response){//this is the that parses the information into json.  we can use it after the first .then on line 50 instead
//     return response.json();
// }
// function listNames(arr){
//     arr.forEach(element => console.log(element.name));
// }
// fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json())//in the parenthesis, we can replace with:  jsonResponse
//     .then(jsonResponse => jsonResponse.results)
//     .then(listNames)///this is the function on line 44
//
//     .catch(error => console.log(error));
// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

let starWarsAPI = fetch('https://swapi.dev/api/films/');
console.log(starWarsAPI);

// TODO: Use Promise chaining to console log the json response
//
starWarsAPI.then(response => response.json())//after the fat arrow, use console.log (response.json()); to see the response
    //access the results property from the json object
    .then(jsonResponse => jsonResponse.results)
    //access the results property from the json object :  starWarsAPI.then(response => response.json()).then(jsonResponse => console.log(jsonResponse.count));
    .then(resultsArray => resultsArray.forEach(film => {
        console.log(film.title + "" + film.episode_id)
    }))
    .catch(error => console.log(error));
// TODO: chain another method that iterates through the results array and console logs the names
//  of all characters and their birth_years

/*********************************************
 *              CUSTOM PROMISES
 ******************************************** */
//WHEN WE MAKE A FETCH REQUEST, THIS IS ESSENTIALLY WHATS HAPPENING.
// To further understand Promises, we can create our own custom Promise object
// Let's take a look at the example from the curriculum

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {//50% CHANCE OF RESOVLING OR REJECTING
            resolve();//IF YOUR RESPONSE IS SUCCESSFUL, YOUR RESPONSE WOULD BE HERE.
        } else {
            reject();//HERE IS WHERE YOU YOU WOULD GET YOUR ERROR MESSAGE
        }
    }, 1500);//THIS DETERMINES HOW LONG YOU HAVE TO RESOLVE OR REJECT A REQUEST
});

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));

// The resolve and reject functions can also be passed a value.
// These can then be used in our .resolve and .reject methods

// TODO: pass in a message argument into the resolve and reject functions
// TODO: use the passed in arguments in the callback functions

// This is a simplified example of what goes on underneath the hood of a more complex fetch
// request. The concepts we covered are similar to what you learned when using AJAX with jQuery.

//.ALL AND .RACE:
//the return from a .all is an array, youll need to indicate the index you want or forEach the data
Promise.all([pokemonPromise, starWarsAPI])
    .then(data => console.log(data) );

Promise.race([starWarsAPI, pokemonPromise])
    .then(data => console.log(data));

