/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
//users.push({name: 'Bobbie', email: "bmarchambault@gmail.com", languages: ['html', 'css', 'javascript']});
//console.log(users);


// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Bobbie';
const email = 'bmarchambault@gmail.com';
const languages = ['html', 'css', 'javascript'];
//name = 'someoneElse'// give an error as it should

// TODO: rewrite the object literal using object property shorthand
//======this to do uses the above constants for below and pushes the info into the array=============
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });
//shorthand
users.push({
  name,
  email,
  languages
})

// console.log(users);//works
// TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
//   // console.log(emails.push(user.email));//returns 1, 2, 3, 4, 5, 6
// });

users.forEach (user => {emails.push(user.email)});//make sure the curly brackets are here.  and the paren's
// users.forEach (user => {console.log(emails.push(user.email))} );//this is the proper syntax to console log the line above. -- it returns 1, 2, 3, 4, 5, 6

// users.forEach(function(user) {
//   return names.push(user.name);
//   // console.log(names.push(user.name));//returns 1, 2, 3, 4, 5, 6
// });
//
users.forEach (user => {names.push(user.name)} );

// TODO: replace `var` with `let` in the following declaration
//var developers = [];
let developers = [];
users.forEach(function(user) {

  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  const {name, email, languages} = user;

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});
// console.log(developers.push(`${name}'s email is ${email}. ${name} knows ${languages}.join(', ')`));
console.log(developers);
// TODO: Use `let` for the following variable
// var list = '<ul>';
let list = '<ul>';
// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for(let developer of developers){
  // TODO: rewrite the assignment below to use template strings
  list += `<li> ${developer} </li>`;
}
list += '</ul>';
//=========================================================================================
//================without old code=====================================================

/*
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

//CREATING A NEW OBJECT:
const name = 'Bobbie';
const email = 'bmarchambault@gmail.com';
const languages = ['html', 'css', 'javascript'];

//ADDING THE NEW OBJECT TO THE ARRAY:
users.push({
  name,
  email,
  languages
})
    // console.log(users);//works


//PULLING ELEMENTS FROM THE USERS ARRAY AND PUTTING THEM INTO NEW ARRAYS:
let emails = [];
let names = [];

users.forEach (user => {emails.push(user.email)});
users.forEach (user => {names.push(user.name)} );

//CREATING A NEW ARRAY USING THE INFO TAKEN FROM USERS ARRAY -  DESTRUCTURING AND TEMPLATE STRINGS
let developers = [];
users.forEach(function(user) {
  const {name, email, languages} = user;//DESTRUCTURING USERS ARRAY
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);//TEMPLATE STRINGS TO CONCAT
});
// console.log(developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`));
//you can type developers in the console log too to see the list


let list = '<ul>';
for(let developer of developers){
    list += `<li> ${developer} </li>`;
}
list += '</ul>';
*/