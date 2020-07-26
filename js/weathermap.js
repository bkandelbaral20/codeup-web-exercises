
// All of the code used to make AJAX rquest and manipulations

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID:OPEN_WEATHERMAP_APPID,
    lat:  29.4241,
    lon: 98.4936,
    units: "imperial"
}).done(function(data) {
    console.log(data);

    // Assign the short Date String to #weather-date
    var date = new Date( data.daily[0].dt * 1000);
    $('#weather-date1').html(date.toDateString());
    console.log(date.toDateString());

     // Assign the High/Low temperature to
     let lowTemp = data.main.temp.min;
     let highTemp = data.main.temp.max;
     $('#high-low-temp1').html("<strong>" + lowTemp + '°F / ' + highTemp + '°F' + "</strong>");

    //Assign icons
    let icon = data.daily[0].weather[0].icon; 
    $('#weather-icon').html(`<img src="${"http://openweathermap.org/img/wn/" + icon + "@2x.png"}">`);

    //Assign the description
        let info = data.weather[0].description;
    $("#des1").html("Description : " +  "<strong>" +  info  + "</strong>");
   // console.log(info);

//    Assign the humidity
    var humid = data.main.humidity;
    $("#humidity1").html("Humidity : " + "<strong>" + humid + "</strong>" );
    // console.log(humid);

//    Assign the wind
    var wind = data.wind.speed;
    $("#wind1").html("Wind Speed : " + "<strong>" +  wind + "</strong>" );
    // console.log(wind);

//    Assign the pressure
    var pressure  = data.main.pressure;
    $("#pressure1").html("Pressure : " + "<strong>" + pressure + "</strong>");


//another cards
    // Current timestamp
    const now = Date.now();
// Get 24 hours from now
    const day2 = new Date(now + (24*60*60*1000))
    $('#weather-date2').html(day2.toDateString());
    console.log(day2);

//getting low and high temp
    let lowTemp2 = data.main.temp_min;
    let highTemp2 = data.main.temp_max;
    $('#high-low-temp2').html("<strong>" + lowTemp2 + '°F / ' + highTemp2 + '°F' + "</strong>");


});