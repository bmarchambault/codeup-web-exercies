'use strict';
$(document).ready(function(){
//    ----------------------------------------------------------


    var weatherUrl ='https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: 29.4241,
        lon: -98.4936,
        appid: OPEN_WEATHER_MAP_KEY,
        exclude: 'minutely, current, hourly',
        units: 'imperial'
    };
    $.get(weatherUrl, weatherOptions).done(function(data){
        console.log(data);
    })

    function parseDate(timestamp){
        return new Date(timestamp * 1000). toLocaleDateString();
    }
    console.log(parseDate(data.daily[0].dt))


























































})