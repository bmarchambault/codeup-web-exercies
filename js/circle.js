(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            var area = Math.PI * Math.pow(circle.radius, 2);

            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true) {
                return Math.round(circle.getArea());
            } else {
                return circle.getArea();
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            // console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };
console.log(circle.getArea());
console.log(circle.logInfo());
    // log info about the circle
    console.log("Raw circle information " + circle.logInfo(false));
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number " + circle.logInfo(true));
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
