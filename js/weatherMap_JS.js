    //===========instructions: =============================
    //
    // Using HTML, CSS, jQuery, AJAX, and the OpenWeatherMap API, start by showing the current conditions for city you live in on your page.
    //     Update your layout and AJAX request(s) to display a five day forecast for the city you live in that looks like the screenshot below.
    //     If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.
    // Refer to your Mapbox API exercise. Recreate the map below your 5 day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).
    // Add a Mapbox text input to search by location and have the forecast update when a new location is searched.
    //     As a bonus make sure you can update the marker's position to the new search result.
//================================================================================
'use strict';
$(document).ready(function() {
//    ----------------------------------------------------------


    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: 29.4241,
        lon: -98.4936,
        appid: OPEN_WEATHER_MAP_KEY,
        exclude: 'minutely, current, hourly',
        units: 'imperial'
    };
    var currentCity='';


        // $.get(weatherUrl, weatherOptions).done(function (data) {
        // console.log(data.daily[0]);
        // console.log(data.daily[0].dt);
        // console.log(data.daily[0].humidity);
        // console.log(data.daily[0].temp.min);
        // console.log(data.daily[0].temp.max);
        // console.log(data.daily[0].weather.description);
        // console.log(data.daily[0].wind_speed);
        // console.log(data.daily[0].pressure);
        // var weatherForecast = '';
    // })

    //==============function that populates the forecast cards================
    function forecast() {
        $.get(weatherUrl, weatherOptions).done(function (data) {
            var dayZero = '';
            var dayOne = '';
            var dayTwo = '';
            var dayThree = '';
            var dayFour = '';
            for (var i = 0; i < data.daily.length; i++) {
//code from coffee project - creates the list in the cards
                var html = '<div class="card-header bg-header">' + new Date(data.daily[i].dt * 1000).toLocaleDateString() + '</div>';
                html += '<ul class="forecast-list list-group list-group-flush" >';
                html += '<li class="list-group-item">' + 'Temp range min-max: ' + data.daily[i].temp.min + ' - ' + data.daily[i].temp.max + '</li>';
                html += '<li class="list-group-item">'  + data.daily[i].weather[0].description + '</li>';//weather is an array.  need to target index for description
                html += '<li class="list-group-item">' + 'Humidity: ' + data.daily[i].humidity + '</li>';
                html += '<li class="list-group-item">' + 'Wind Speed: ' + data.daily[i].wind_speed + '</li>';
                html += '<li class="list-group-item">' + 'Pressure: ' + data.daily[i].pressure + '</li>';
                html += '</ul>';
//separates the data and populates the daily variables
                if (i === 0) {
                    dayZero += html;
                } else if (i === 1) {
                    dayOne += html;
                } else if (i === 2) {
                    dayTwo += html;
                } else if (i === 3) {
                    dayThree += html;
                } else if (i === 4) {
                    dayFour += html
                }
            }
            //targets the cards and populates
            // console.log(html);
            $('#forecastZero').append(dayZero);
            $('#forecastOne').append(dayOne);
            $('#forecastTwo').append(dayTwo);
            $('#forecastThree').append(dayThree);
            $('#forecastFour').append(dayFour);
        })
    }
forecast();

    function updateForecast(){
        $.get(weatherUrl, weatherOptions).done(function (data) {
            var dayZero = '';
            var dayOne = '';
            var dayTwo = '';
            var dayThree = '';
            var dayFour = '';
            for (var i = 0; i < data.daily.length; i++) {
//code from coffee project - creates the list in the cards
                var html = '<div class="card-header bg-header">' + new Date(data.daily[i].dt * 1000).toLocaleDateString() + '</div>';
                html += '<ul class="forecast-list list-group list-group-flush" >';
                html += '<li class="list-group-item">' + 'Temp range min-max: ' + data.daily[i].temp.min + ' - ' + data.daily[i].temp.max + '</li>';
                html += '<li class="list-group-item">' +  data.daily[i].weather[0].description + '</li>';
                html += '<li class="list-group-item">' + 'Humidity: ' + data.daily[i].humidity + '</li>';
                html += '<li class="list-group-item">' + 'Wind Speed: ' + data.daily[i].wind_speed + '</li>';
                html += '<li class="list-group-item">' + 'Pressure: ' + data.daily[i].pressure + '</li>';
                html += '</ul>';
//separates the data and populates the daily variables
                if (i === 0) {
                    dayZero += html;
                } else if (i === 1) {
                    dayOne += html;
                } else if (i === 2) {
                    dayTwo += html;
                } else if (i === 3) {
                    dayThree += html;
                } else if (i === 4) {
                    dayFour += html
                }
            }
            //targets the cards and populates
            // console.log(html);
            $('#forecastZero').html(dayZero);
            $('#forecastOne').html(dayOne);
            $('#forecastTwo').html(dayTwo);
            $('#forecastThree').html(dayThree);
            $('#forecastFour').html(dayFour);
        })
    }

//=================MAP RELATED CODE=====================================

    //map script===============================
    // $('')
    mapboxgl.accessToken = MAPBOXKEY;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-98.1245, 29.7030],
        zoom: 13
    });


    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat({lng:-98.1245, lat: 29.7030})
        .addTo(map);

    var popup = new mapboxgl.Popup();
        popup.setHTML('<h5>current city</h5>');
        marker.setPopup (popup);


//get coord from dragging marker
    function onDragEnd() {
        var lngLat = Object.values(marker.getLngLat());//setting the lat and log to an object captital Oh creates the object
        // console.log(lngLat);
        var markerLng = lngLat[0];//longitude is at index zero of the array - this sets lng to markerlng variable
        // console.log(markerLng);
        var markerLat = lngLat[1];//latitude is at index one of the array
        weatherOptions.lon = lngLat[0]; //this connects the openweathermap to mapbox
        weatherOptions.lat = lngLat[1];
        map.setCenter({lng: markerLng, lat: markerLat});//needs to be here because the map likes an object numbers not strings, also centers map everytime
        map.setZoom(5);
        coordinates.style.display = 'block';//displays the coord on the map
        coordinates.innerHTML =
            'Longitude: ' + lngLat[0] + '<br />Latitude: ' + lngLat[1];
        reverseGeocode({lng: markerLng, lat: markerLat},  MAPBOXKEY ).then(function(result){
            $(popup).html('<h5>' + result + '</h5>');
            $('#currentCity').html(result);
        })
        updateForecast();
    }
onDragEnd();//need to call this first then marker on
    marker.on('dragend', onDragEnd);

//====================SEARCH BUTTON========================
    $('#searchBtn').click(function (e) {
        e.preventDefault();
        var userSearch = $('#search_text').val();//grabs user input
        geocode(userSearch, MAPBOXKEY).then(function (result) {//uses geocode function
            // console.log(result);
            map.setCenter(result);
            map.setZoom(4);
            marker.setLngLat(result);
            marker.addTo(map);
            reverseGeocode({lng: result[0], lat: result[1]}, MAPBOXKEY).then(function (result) {
//using the indexes is a result of console logging the reverseGeocode function below and seeing what it returns.
//cant use geocode because that will give the coordinates.  reverse gives the address, which is what we want
                $(popup).html('<h5>' + result + '</h5>');
                $('#currentCity').html(result);
            })
            updateForecast();
        })
    })

//==================================geocodes below====================
    //takes an address and returns coords
    function geocode(search, token) {

        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                // console.log(data);
                return data.features[0].center;
            });
    }
//
    //takes in coords and returns address
        function reverseGeocode(coordinates, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                })
                // to get all the data from the request, comment out the following three lines...
                .then(function(data) {
                    // console.log(data);
                    return data.features[2].place_name;//use the console log and view the features.  each index uses a different location format.
                });
        }



































})