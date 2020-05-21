'use strict'

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let hasThreeLang = users.filter((user) => user.languages.length >= 3);
// console.log(hasThreeLang);//success!

// Use .map to create an array of strings where each element is a user's email address
let usersEmails = users.map((user) => `${user.email}`);
// console.log(usersEmails);//success!

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// let totalYearsExperience = users.reduce((total, person) => {return total += person.yearsOfExperience;}, 0);
// console.log(totalYearsExperience);//success
let totalYearsExperience = users.reduce((total, person) => total += person.yearsOfExperience, 0);
// console.log(totalYearsExperience);//success

// function totalYearsOfExperience(array){
//     var total = 0;
//     users.forEach(function(user){
//         total += user.yearsOfExperience;
//     })
//     return total;
// }


//both of the above work

// Use .reduce to get the longest email from the list of users.
// let longestEmail = users.reduce((longestEmail, {user:email}) => (longestEmail.email.length > user.email.length) ? longestEmail: {user:email}, {email: 0});
// console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let namesInAString = users.reduce((nameString, user) => nameString + `${user.name}`, "");
// console.log(namesInAString);//success

//Bonus
//Use .reduce to get the unique list of languages from the list of users.

let uniqueLang = users.reduce((uniqueLanguage, user) => (uniqueLanguage.languages === user.languages) ? uniqueLanguage : languages, {languages: })