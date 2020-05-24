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
//both of the above work

// function totalYearsOfExperience(array){
//     var total = 0;
//     users.forEach(function(user){
//         total += user.yearsOfExperience;
//     })
//     return total;
// }

const averageExp = totalExp/users.length;
// console.log(averageExp);


// // Use .reduce to get the longest email from the list of users.
    let longestEmail = users.reduce((longestEmail, user) => {
        // return (longestEmail.length > user.email.length) ? longestEmail : user.email, ""
        if (longestEmail.length > user.email.length) {
            return longestEmail;
        } else {
            return user.email;
        }
    });//don't need the starting value in this case because we have the return.  but, this last line should be:   }, "");

    //
    // let longestEmail = users.reduce((longestEmail, user) => (longestEmail.email.length > user.email.length)
    // ? longestEmail : user, {email: 0})

console.log(longestEmail);




// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let namesInAString = users.reduce((nameString, user) => nameString + `${user.name}`, "");
// console.log(namesInAString);//success

let instructorsString = users.reduce((finalString, instructor, index) => {
    if (index < users.length -1) {
            return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}, `
    }else{
        return '${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}, '
    }
}, "Your instructors are: ");

//Bonus
//Use .reduce to get the unique list of languages from the list of users.
//
// let uniqueLang = users.reduce((accumulator, currentValue) => {
//      //this method take 3 things - accum, curr and startValue.
//     // what data type am I returning:  -- returning an array.
//     //whats the accum?---unique languages
//     //whats the currValue? --the user
//     //whats the starting value? -- empty array
//     //what data are we trying to access: -- user.languages in an object array
//      //how can we access that data? --iteration through object array
//      //what methods do i know to cycle through or manipulate that data? for loop, forEach, for/of loop
//      //are there comparisons?  if so, what to what?  -- words to words
//      // how can i compare?  -- google -- MDN says:
//              let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
//              let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
//                  if (accumulator.indexOf(currentValue) === -1) {
//                          accumulator.push(currentValue)
//                   }
//                  return accumulator
//                  }, [])
//      //what do i need to do?  -- look ea. user in the array.  look at their languages.  iterate through languages. if user.languages.length is greater than the accumulater, return an array of languages.
//      //based on MDN solution, i need to account for the languages being in it own array.  whats the solves?  a for loop or for each or for/of
// },[]);//starting value (bucket)

let uniqueLangsArray = users.reduce((uniqueLang, user) => {//((langList, user) {
    for (let i = 0; i < user.languages.length; i += 1){//for (let lang of user.languages){
        if (uniqueLang.indexOf(user.languages[i]) === -1) {//if (!langlist.includes(lang)){
             uniqueLang.push(user.languages[i]);//langList.push(lang);
         }
    }
    return uniqueLang;
},[]);
console.log(uniqueLangsArray);

