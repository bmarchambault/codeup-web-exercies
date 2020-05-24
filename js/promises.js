'use strict'

// function jsonResponse(response){
//     return response.json();
// }
function listEvents(arr){
    arr.forEach(element => console.log(element.created_at));
}

function lastUserCommit(userName) {
    let githubAPI = fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${PROMISE_EXERCISE_KEY}`}})
        // .then(response => console.log(response))
        .then(response => response.json())
        // .then(response => console.log(response.json()))
       // .then (jsonResponse => console.log(jsonResponse[0].created_at))
        .then (jsonResponse => console.log(jsonResponse[0].type))
        // .then(resultArray => resultArray.forEach())
        // .then(response => console.log(response[0].json()))
        // .catch(response => console.log('rejected'))
}
lastUserCommit('bmarchambault');

// .then(resultsArray => resultsArray.forEach(film => {
//     console.log(film.title + "" + film.episode_id)
// }))
//     .catch(error => console.log(error));

// fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json())//in the parenthesis, we can replace with:  jsonResponse
//     .then(jsonResponse => jsonResponse.results)
//     .then(listNames)///this is the function on line 44
//
//     .catch(error => console.log(error));






















//
//
// function userHistory(username) {
//     let githubAPI = fetch("https://api.github.com/users/${username}/received_events", {headers: {'Authorization': `token${PROMISE_EXERCISE_TOKEN}`}});
//
//         githubAPI.then(response => response.json())
//             .then(events => console.log(new Date(events[0].created.at).toDateString()));
// }
// userHistory('bmarchambault');

