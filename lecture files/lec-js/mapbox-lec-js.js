'use strict'

mapboxgl.accessToken = mapboxKey;
var mapOfDenver = new mapboxgl.Map({
    container: 'mapD',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

mapboxgl.accessToken = mapboxKey;
var mapOfUS = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

// MARKER
// Create a variable (object)
//  var marker = new mapboxgl.Marker()
// Set where:
//       marker1.setLngLat({lng:-98.4916, lat: 29.4252})//this returns the entire marker object
// //  Add to map:
//       marker1.addTo(map);
//
//       //because the method here returns the object, you can chain the above like this
//   var marker = new mapboxgl.Marker();
//
var marker = new mapboxgl.Marker()
    .setLngLat({lng:-98.4916, lat: 29.4252})
    .addTo(map);

//POPUP - like a chatbox in a comic book
var popup = new mapboxgl.Popup();
//to have it hold html - could be an image, a link whatever;
popup.setHTML('<h3>Denver!</h3>');
//can set the popup to the marker
marker.setPopup(popup);

//EVENTS
//     we can add event listeners to our maps.  the following method is only relevent to mapbox
//under marker, theres a few events that apply to the marker.
//under events, in mapbox, the three listed there apply to the map
//
//the following, if we click on the map its going to consolelog hello
map.on('click', function() {
    console.log('hello');
})
marker.on('dragend', function(){
    console.log('hello');
});


// //GEOCODING
// there are tools in the api reference in mapbox userinterface.  we can turn these things on:
// its a method to search for coordinates based on physical address and return
// we can use plug ins from mapbox.

geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxKey).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.setZoom(20);
})




//reverse gives you the address with given coordinates

