"use strict";

(function () {

    // So far with data structures we've talked about arrays as a collection of data. We can also collect related data within objects. Objects are a way for us to collect information and functionality under one variable. There are two types of data that can be set to an object: properties and methods.

    /** Running Scenario: You are creating a dog day care service application for a local business, Twosy's. The client has a set of feature they want to track. You are working on the front end, and want to test out certain functionality of the webpage in JS. Throughout this example, we'll be adding properties and methods to an object meant to represent a dog saved in the system. */

        // There are multiple ways to define objects, but for now, we'll define an empty object (without predefined properties and methods).

    var peridot = {};


    // Properties: Data set to an object. This is the most similar to the variables of primitive data types that we've been using so far.

    // We can define a property using dot notation!
    peridot.name = "Peridot";

    // We can also define properties using square bracket notation.
    peridot["gender"] = "F";

    // We also have the ability to define properties when instantiating an object!

    peridot = {
        name: "Peridot",
        gender: "F",
        breed: ["American Stafford Terrier", "Labrador Retriever"],
        color: ["White", "Brown"],
        age: 2,
        birth_month: "August"
    };

    // Let's log to the console..
    // console.log(dog); // This will log out the entire object.
    // console.log(dog.gender); // This will log the value of this object's property
    // console.log(dog["name"]); // This will also log the value of this object's property

    /** Short exercise - Together */
        // Given the following array: Log a message to the console for each dog that contains their name, and age.

    var dogs = [
            {
                name: "Peridot",
                gender: "F",
                breed: ["American Stafford Terrier", "Labrador Retriever"],
                color: ["White", "Brown"],
                age: 2,
                birth_month: "August"
            }, {
                name: "Bloo",
                gender: "Male",
                breed: ["Chihuahua", "Dachshund"],
                color: ["Tan"],
                age: 9,
                birth_month: "January"
            }, {
                name: "Paddy Mae",
                gender: "F",
                breed: ["Pug", "Beagle"],
                color: ["Black"],
                age: 2,
                birth_month: "February"
            }, {
                name: "Vader",
                gender: "Male",
                breed: ["Pug"],
                color: ["Black"],
                age: 2,
                birth_month: "January"
            }, {
                name: "Bailey",
                gender: "F",
                breed: ["Bloodhound"],
                color: ["Brown", "Liver"],
                age: 4,
                birth_month: "August"
            }
        ];

    // dogs.forEach(function(dog) {
    //     console.log(dog.name + " - " + dog.age);
    // });

    // for (var i = 0; i < dogs.length; i++) {
    //     console.log(dogs[i].name + " - " + dogs[i].age);
    // }

    // Methods: Functionality within an object. Similar to... well, look at the first word of this definition.

    // Let create a method! This method should return a string of the dog barking.

    function bark() {
        return "Ruff ruff!";
    }

    // peridot.bark = bark;

    peridot.bark = function() {
        return "Ruff ruff!";
    };

    // console.log(peridot.bark());

    /** POP QUIZ!!! What is this method definition most similar too? */

    // Let's add another method to our dog object. The method should increase the age our dogs by one, and return the new age.

    peridot.happyBirthday = function() {
        return ++this.age; // Ooh! The this key word! Let's talk about what this could represent...
    };

    // console.log(peridot.age);
    // console.log(peridot.happyBirthday());
    // console.log(peridot.age);

    // As with properties, we can also define methods when instantiating our object.

    var rush = {
        name: "Rush",
        gender: "M",
        breed: ["Robot"],
        color: ["Red", "Pink", "Tan"],
        age: 29,
        birth_month: "September",
        state: "dog",
        bark: function() {
            return "Arf arf!";
        },
        transform: function(state) {
            switch (state.toLowerCase()) {
                case "coil":
                case "jet":
                case "dog":
                    this.state = state.toLowerCase();
                    break;
                default:
                    this.state = "broken";
                    break;
            }
            return this.state;
        }
    };

    // console.log(rush.bark());
    // console.log(rush.transform("jet"));
    // console.log(rush.transform("spring"));
    // console.log(rush.transform("dog"));

    /** Small Exercise Together! */

    // Given the following array of dogs, we want to make sure that all the dogs are clean. How can we iterate through the array, and call on the washDog method without getting any of the dogs sick?

    dogs = [
        {
            name: "Peridot",
            gender: "F",
            breed: ["American Stafford Terrier", "Labrador Retriever"],
            color: ["White", "Brown"],
            age: 2,
            birth_month: "August",
            state: "dirty",
            washDog: function () {
                if (this.state === "dirty") {
                    this.state = "clean";
                } else if (this.state === "clean") {
                    this.state = "sick";
                } else if (this.state === "sick") {
                    return "We do not wash sick dogs!";
                }
                return this.state;
            },
            owner: {
                name: "David Stephens",
                age: 28,
                gender: "M",
                car: {
                    make: "Buick",
                    model: "Rendezvous",
                    year: 2004,
                    color: "Burgundy"
                },
                hair: "Brown",
                eyes: "Brown"
            }
        }, {
            name: "Bloo",
            gender: "Male",
            breed: ["Chihuahua", "Dachshund"],
            color: ["Tan"],
            age: 9,
            birth_month: "January",
            state: "clean",
            washDog: function () {
                if (this.state === "dirty") {
                    this.state = "clean";
                } else if (this.state === "clean") {
                    this.state = "sick";
                } else if (this.state === "sick") {
                    return "We do not wash sick dogs!";
                }
                return this.state;
            },
            owner: {
                name: "David Stephens",
                age: 28,
                gender: "M",
                car: {
                    make: "Buick",
                    model: "Rendezvous",
                    year: 2004,
                    color: "Burgundy"
                },
                hair: "Brown",
                eyes: "Brown"
            }
        }, {
            name: "Paddy Mae",
            gender: "F",
            breed: ["Pug", "Beagle"],
            color: ["Black"],
            age: 2,
            birth_month: "February",
            state: "dirty",
            washDog: function () {
                if (this.state === "dirty") {
                    this.state = "clean";
                } else if (this.state === "clean") {
                    this.state = "sick";
                } else if (this.state === "sick") {
                    return "We do not wash sick dogs!";
                }
                return this.state;
            },
            owner: {
                name: "David Stephens",
                age: 28,
                gender: "M",
                car: {
                    make: "Buick",
                    model: "Rendezvous",
                    year: 2004,
                    color: "Burgundy"
                },
                hair: "Brown",
                eyes: "Brown"
            }
        }, {
            name: "Vader",
            gender: "Male",
            breed: ["Pug"],
            color: ["Black"],
            age: 2,
            birth_month: "January",
            state: "clean",
            washDog: function () {
                if (this.state === "dirty") {
                    this.state = "clean";
                } else if (this.state === "clean") {
                    this.state = "sick";
                } else if (this.state === "sick") {
                    return "We do not wash sick dogs!";
                }
                return this.state;
            },
            owner: {
                name: "David Stephens",
                age: 28,
                gender: "M",
                car: {
                    make: "Buick",
                    model: "Rendezvous",
                    year: 2004,
                    color: "Burgundy"
                },
                hair: "Brown",
                eyes: "Brown"
            }
        }, {
            name: "Bailey",
            gender: "F",
            breed: ["Bloodhound"],
            color: ["Brown", "Liver"],
            age: 4,
            birth_month: "August",
            state: "dirty",
            washDog: function () {
                if (this.state === "dirty") {
                    this.state = "clean";
                } else if (this.state === "clean") {
                    this.state = "sick";
                } else if (this.state === "sick") {
                    return "We do not wash sick dogs!";
                }
                return this.state;
            },
            owner: {
                name: "David Stephens",
                age: 28,
                gender: "M",
                car: {
                    make: "Buick",
                    model: "Rendezvous",
                    year: 2004,
                    color: "Burgundy"
                },
                hair: "Brown",
                eyes: "Brown"
            }
        }
    ];

    // dogs.forEach(function (dog) {
    //     if (dog.state === "dirty") {
    //         return dog.washDog();
    //     }
    // });

    for(var j = 0; j < dogs.length; j++) {
        if (dogs[j].state === "dirty") {
            dogs[j].washDog();
        }
    }

    // dogs.forEach(function(dog) {
    //     console.log(dog.state);
    // });

    // Nest Values: Much like loops, the calc function in CSS, and arrays, you can put objects inside of objects. This is a nested value.

    peridot.owner = {
        name: "David Stephens",
        age: 28,
        gender: "M",
        car: {
            make: "Buick",
            model: "Rendezvous",
            year: 2004,
            color: "Burgundy"
        },
        hair: "Brown",
        eyes: "Brown"
    };

    // To access the properties of our nested value, we can continue using dot notation to do the following!

    // console.log(peridot);
    // console.log(peridot.owner.car.color);
    //
    // console.log(dogs);

    // Iterate through the array of dogs to get the owner's car's make and model.

    // dogs.forEach(function (dog) {
    //     console.log(dog.owner.car.make + " - " + dog.owner.car.model);
    // });

    // for (var k = 0; k < dogs.length; k++) {
    //     console.log(dogs[k].owner.car.make + " - " + dogs[k].owner.car.model);
    //
    // }

    // console.log(peridot["owner"]["name"]);

    // Iterate through our dogs array, and log a message to the console based on their breed property.
    // If the breed is an array longer than one, log a message stating they are a mix of the different elements.

    dogs.forEach(function(dog) {
        var str = "";
        if (dog.breed.length > 1) {
            dog.breed.forEach(function (breed, i, arr) {
                if (i === arr.length - 1) {
                    str += breed + " mix."
                } else {
                    str += breed + ", "
                }
            });
        } else {
            str = dog.breed + ".";
        }
        console.log(dog.name + " is a(n) " + str);
    });

    // var str = "";
    // if (peridot.breed.length > 1) {
    //     peridot.breed.forEach(function (breed, i) {
    //         if (i === peridot.breed.length - 1) {
    //             str += breed + " mix."
    //         } else {
    //             str += breed + ", "
    //         }
    //     });
    // } else {
    //     str = peridot.breed + ".";
    // }
    // console.log(peridot.name + " is a(n) " + str);


})();