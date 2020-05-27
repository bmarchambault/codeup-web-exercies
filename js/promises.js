'use strict'

// function lastUserCommit(userName) {
//     let githubAPI = fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${PROMISE_EXERCISE_KEY}`}})
//         .then(response => response.json())
//         .then(events => events)//this name is what ever you call it.
//         .then(jsonResponse => jsonResponse.filter(events => events.type === 'PushEvent')[0].created_at)
//         // .then (date => console.log(new Date(date).toDateString() ))
//
// //In this case, because an authentication is required, the promise value is attached.  so .results is not required.
//     //take the response, and filter the user information.  when you console log the json information it returns an array, you have to understand WHAT you're accessing.  in this case, its an array of the the users information, so response.type will never work - the the hell is response?   but user.type does. .then(jsonResponse => console.log(jsonResponse.user)) comes back undefined.  but // .then (jsonResponse => console.log(jsonResponse[0].created_at))
//     //  .then (jsonResponse => console.log(jsonResponse[0].type)) does not.  and since we know we're accessing a user, we replace jsonResponse[0] with user.
//     //next step, we want the dates of the push events not the push events array.  since we've modified the array to push events, we should be more explicit on which push events.
//     //     .then(jsonResponse => console.log(jsonResponse.filter(user => user.type === 'pushEvent')))
//
//         // .then(response => console.log(response))
//         // .then(response => console.log(response.json()))
//        // .then (jsonResponse => console.log(jsonResponse[0].created_at))
//        //  .then (jsonResponse => console.log(jsonResponse[0].type))
//         // .then(resultArray => resultArray.forEach())
//         // .then(response => console.log(response[0].json()))
//         // .catch(response => console.log('rejected'))
//         .catch(error => console.log(error))
// }
// lastUserCommit('bmarchambault').then (date => console.log(new Date(date).toDateString() ));
//
//
// function wait(time){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('see this after'+ time + 'seconds');
//         }, time);
//     })
//         .then(setTimeout())
// }
//
//
// console.log(wait(5));
// console.log(wait(1));
// console.log(wait(3));
//

//sophies walkthrough
let getLastCommitDate = userName => {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${PROMISE_EXERCISE_KEY}`}
    }).then(response => response.json())
        .then(events => {
            return events.filter(event => event.type === 'PushEvent')[0].created_at;
        });

}
getLastCommitDate('bmarchambault').then(date => {
    console.log(new Date(date).toDateString())
})


const wait = (seconds) => {
    seconds = seconds * 1000;
    return new Promise (resolve => {
        setTimeout(() => {
            if(seconds > 1000){
                console.log('You should see this after ' + seconds/1000 + " seconds.")
            } else {
                console.log('You should see this after ' + seconds/1000 + " seconds.")
            }
        }, seconds)

    });
}

wait(5);
wait(2);

//alternatively:
const waitAlt = (seconds) => {
    seconds = seconds * 1000;//or remove the *1000 and just put the number in thousands in the console log below.
    return new Promise (resolve => {
        setTimeout(resolve, seconds)
    });
}
waitAlt(5).then(() => console.log('You should see this after ' + seconds/1000 + " seconds."));
waitAlt(2).then(() => console.log('You should see this after ' + seconds/1000 + " seconds."));;