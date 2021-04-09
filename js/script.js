// token from OpenWeatherMap
const appId = '785df0c96d07eddf7d923f090a3f56ef';

// get the weather JSON data via query URI
fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=" + appId).then(
    response => {
        return response.json(); // get weather data as JSON
    }).then(data => {

        // Work with JSON data here
        console.log(data); // show what's in the json

        // solnedgang
        var sunsetMs = data.sys.sunset * 1000; // dato-objektet har brug for millisek. Derfor * 1000
        var sunset = new Date(sunsetMs);

        // Datoformattering @URI < https://www.w3schools.com/js/js_date_methods.asp >
        var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();

        // lægger vejrdata ind i #result
        document.getElementById('result').innerHTML =

            // tilføjer ("append") en div til vejroplysninger
            '<div class="weatherInfo">' +

            // tilføjer bynavn
            '<h1> ' + data.name + ' </h1>' +

            // tilføjer en beskrivelse af vejret lige nu
            '<h2>Vejr: ' + data.weather[0].description + '</h2>' +

            // tilføjer vejrsymbol
            '<figure>' +
            '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon +
            '.png" alt="Vejrsymbol">' +
            '</figure>' +

            // tilføjer klokkeslet for solens nedgang i vest
            '<p> Solnedgang: ' + sunsetTime + '</p>' +

            // tilføjer klokkeslæt for solens nedgang i vest
            '<p> Temperatur føles som ' + data.main.feels_like + '</p>' +

            //tilføjer meter i sekundet
            '<p> Meter i sek ' + data.wind.speed + '</p>' +

            // afslutter #weatherInfo taggen
            '</div>'; // 

        // URL to the weather icons: https://openweathermap.org/weather-conditions 

    }).catch(err => {
        // Do something with error here
        console.log('There was an error ...');
    });