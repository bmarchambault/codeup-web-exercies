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

    //
    $.get(weatherUrl, weatherOptions).done(function (data) {
        console.log(data.daily[0]);
        // console.log(data.daily[0].dt);
        // console.log(data.daily[0].humidity);
        // console.log(data.daily[0].temp.min);
        // console.log(data.daily[0].temp.max);
        console.log(data.daily[0].weather.description);
        // console.log(data.daily[0].wind_speed);
        // console.log(data.daily[0].pressure);
        // var weatherForecast = '';
    })
        // data.daily.forEach(function () {

    // $('button').click(function(){
        $.get(weatherUrl, weatherOptions).done(function (data) {
            var dayZero = '';
            var dayOne = '';
            var dayTwo = '';
            var dayThree = '';
            var dayFour = '';
        for(var i = 0; i < data.daily.length; i++){

            var html = '<div class="card-header">' + new Date(data.daily[i].dt * 1000).toLocaleDateString()  + '</div>';
            html += '<ul class="forecast-list list-group list-group-flush" >';
            html += '<li class="list-group-item">' + 'Temp range min-max: ' + data.daily[i].temp.min + ' - ' + data.daily[i].temp.max + '</li>';
            html += '<li class="list-group-item">' + 'Description: ' + data.daily[i].weather[0].description + '</li>';
            html += '<li class="list-group-item">' + 'Humidity: ' + data.daily[i].humidity + '</li>';
            html += '<li class="list-group-item">' + 'Wind Speed: ' + data.daily[i].wind_speed + '</li>';
            html += '<li class="list-group-item">' + 'Pressure: ' + data.daily[i].pressure + '</li>';
            html += '</ul>';

            if(i === 0){
                dayZero += html;
            }else if (i === 1){
                dayOne += html;
            }else if (i === 2){
                dayTwo += html;
            }else if(i === 3){
                dayThree += html;
            }else if(i === 4){
                dayFour += html
            }

        }
        // console.log(html);
        $('#forecastZero').append(dayZero);
        $('#forecastOne').append(dayOne);
        $('#forecastTwo').append(dayTwo);
        $('#forecastThree').append(dayThree);
        $('#forecastFour').append(dayFour);
    })


        //
        //
        //         Date
        //         </div>
        //         <ul class="">
        //         <li ">temp</li>
        //         <li class="list-group-item">description</li>
        //         <li class="list-group-item">Humidity</li>
        //         <li class="list-group-item">Wind:</li>
        //     <li class="list-group-item">Pressure: </li>
        //     </ul>
        //
        //     weatherForecast +=
        //     weatherForecast += data.daily[0].dt;
        //     weatherForecast +=data.daily[0].humidity;
        //     weatherForecast += data.daily[0].temp.min;
        // // console.log(data.daily[0].temp.max);
        // // console.log(data.daily[0].weather.description);
        // // console.log(data.daily[0].weather.wind_speed);
        // // console.log(data.daily[0].pressure);
        // // data.forEach(function(){

        // })
        // })

    // })

        // $.get('data/inventory.json').done(function(resp){
    //         var inventoryValues = '';
    //         resp.forEach(function(tool){
    //             inventoryValues += '<tr>' + '<td> '+ tool.title +' </td>' +
    //                 '<td> '+ tool.quantity +' </td>'+ '<td> '+ tool.price +' </td>'+ '<td> '+ tool.categories.join(", ") +' </td>' + '</tr>'
    //         })
    //         $('#insertProducts').html(inventoryValues);
    //     })
    // });

//     function parseDate(timestamp) {
//         return new Date(timestamp * 1000).toLocaleDateString();
//     }
//
//     console.log(parseDate(data.daily[0].dt))
// }

    //map script===============================
    // $('')
    mapboxgl.accessToken = MAPBOXKEY;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-98.1245, 29.7030]
    });

//===============================================




















































})