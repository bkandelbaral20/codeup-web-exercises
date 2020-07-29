// All of the code used to make AJAX rquest and manipulations
$(document).ready(function () {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHERMAP_APPID,
        lat: 29.4241,
        lon: 98.4936,
        units: "imperial",
        part: "daily"
    }).done(function (data) {
        updateMap(data)
    });
//using for loop to put all the values together
    //creating function that will update map,search box everything

    function updateMap(data) {

        for (var i = 0; i < 5; i++) {
            let cardId = "#card" + i;

            //Assign the short Date String to #weather-date
            let date = new Date(data.daily[i].dt * 1000);
            $(`${cardId} #weatherDate${i}`).html(date.toDateString());
            // console.log(data.daily[i].dt);


            //Assign the High/Low temperature to
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

            //Assign the humidity
            var humid = data.daily[i].humidity;
            $("#humid" + i).html("Humidity : " + "<strong>" + humid + "</strong>");
            // console.log(humid);

            //Assign the wind
            var wind = data.daily[i].wind_speed;
            $("#wind" + i).html("Wind Speed : " + "<strong>" + wind + "</strong>");
            // console.log(wind);

            //Assign the pressure
            var pressure = data.daily[i].pressure;
            $("#pressure" + i).html("Pressure : " + "<strong>" + pressure + "</strong>");
        }
    }

    // ------mapbox ---------

    //Creating main map for San Antonio, Texas
    mapboxgl.accessToken = mapboxKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });
    // disable map zoom when using scroll
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());
//    creating marker object
    var marker = new mapboxgl.Marker({})
        .setLngLat([-98.4916, 29.4252])
        .addTo(map)
        .setDraggable(true);


    //---- writing function for marker
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHERMAP_APPID,
            lat: lngLat.lat,
            lon: lngLat.lng,
            units: "imperial"
        })
            .done(function (data) {
                updateMap(data);
                map.flyTo({center: [lngLat.lng, lngLat.lat]})
                map.set
            });
    }

    marker.on('dragend', onDragEnd);

//-----using geocode for userinput

    function geocode(search, token) {

        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function (data) {
                console.log(data);
                return data.features[0].center;
            });
    }

    $("#find").click(function () {
        var userinput = $("#formuserinput").val();

        geocode(userinput, mapboxKey).then(function(data) {
            alert(userinput);
        })

    });

//adding places name to current city
    $("#find").click(function () {
        var userinput = $("#forminput").val();
        $(".city").append( userinput);
    });
//_____Jquery Effects
    $('.nav-link').hover(
        function() {
            $(this).css('background-color', 'skyblue');
        },
        function() {
            $(this).css('background-color', '#FFF');
        }
    );
});
