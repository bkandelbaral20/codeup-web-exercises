
// All of the code used to make AJAX rquest and manipulations

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID:OPEN_WEATHERMAP_APPID,
    lat:  29.4241,
    lon: 98.4936,
    units: "imperial",
    part: "daily"
}).done(function (data) {
    console.log(data)

//using for loop to put all the values together
//Card codes
    for (var i = 0; i < 5; i++) {
        let cardId = "#card" + i;

        // Assign the short Date String to #weather-date
        let date = new Date(data.daily[i].dt * 1000);
        $(`${cardId} #weatherDate${i}`).html(date.toDateString());
        console.log(data.daily[i].dt);


        // Assign the High/Low temperature to
        let lowTemp = data.daily[i].temp.min;
        let highTemp = data.daily[i].temp.max;
        $('#highlowtemp' + i).html("<strong>" + lowTemp + '°F / ' + highTemp + '°F' + "</strong>");

        //Assign icons
        let icon = data.daily[i].weather[0].icon;
        $('#icon' + i).html(`<img src="${"http://openweathermap.org/img/wn/" + icon + "@2x.png"}">`);

        //Assign the description
        let info = data.daily[i].weather[0].description;
        $("#description" + i).html("Description : " + "<strong>" + info + "</strong>");
        // console.log(info);

//    Assign the humidity
        var humid = data.daily[i].humidity;
        $("#humid" + i).html("Humidity : " + "<strong>" + humid + "</strong>");
        // console.log(humid);

//    Assign the wind
        var wind = data.daily[i].wind_speed;
        $("#wind" + i).html("Wind Speed : " + "<strong>" + wind + "</strong>");
        // console.log(wind);

//    Assign the pressure
        var pressure = data.daily[i].pressure;
        $("#pressure" + i).html("Pressure : " + "<strong>" + pressure + "</strong>");
    }

    // making heading and p blue color
    $("h1,p").css("backgroundColor", "skyblue");
});

