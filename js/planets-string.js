(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    console.log(planetsString)
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
planetsArray = planetsString.split('|');//HAD TO USE A PIPE INSTEAD OF COMMA, BECAUSE THE PIPE (OR
    // SPACE) ARE THE ONLY DELIMETERS PROVIDED IN THE STRING.  USING THE SPACE WILL SEPARATE EACH CHARACTER.
    // console.log(planetsArray);
console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    //WRONG++++++++++++++++++++++++++++++++++++++++++++++++++++
// function breakTags() {
//         // var breakTagPlanetsString = ;
//         return planetsArray.join(' <br/> ');


//     // console.log( breakTagPlanetsString);
//     {
//         breakString: 'breakTags'
//     }
// // breakTags();
//     }++++++++++++++++++++++++++++++++++++++++++++++++++++++

var brPlanet = planetsArray.join(' <br> ');

//a function that makes ULs:
    function returnList(arr){
        var newList = "<ul>";
        arr.forEach(function (element) {
            newList += "<li>" +element + "</\li>";


        })
    }
document.getElementById().innerHTML

//do it in a forEach in case of additional formatting


var planetsList = planetsArray.join(' <li> ');
    console.log(unorderedListPlanetsString);
    //
    // INSTRUCTOR SOLUTION:
    // start by creating a string:
    var planetsList = "<ul>"; //how it is wrapped
        planetsArray.forEach(function (planet) {
            planetsList += "<li>" + planet + "<\li>";

    });
    planetsList =+ "</ul>";
    //target the document:
document.getElementById('planets-list').innerHTML = returnList(planetsArray);
})();
