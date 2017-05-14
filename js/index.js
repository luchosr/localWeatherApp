$(document).ready(function() {
      var lat;
      var lon;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log("Latidud: " + lat);
            console.log("Longitud: " + lon);
            var API_KEY = '550b915fae53857d3853fc8509e34f54';
            var api =
              'https://crossorig.in/http://api.openweathermap.org/data/2.5/weather?lat=' +
              lat +
              '&lon=' +
              lon +
              '&appid=' +
              API_KEY;
              console.log(api);
            //var api = 'https://api.darksky.net/forecast/737d18d371f1e1d10a68e20a70003b46/' + lat + ',' + lon;
            $.ajax({
              url: api,
              dataType: "jsonp",
              success: function(data) {
                console.log(data);
                var tempC = Math.round(data.main.temp - 273.15);
                var tempF = Math.round(tempC * 1.8 + 32);
                var cont = 0;
                $(".temp").text(tempC + "ºC");
                var city = data.name;
                $("#city").text(city);
                var condiciones = data.weather[0].description;
                console.log("condiciones: " + condiciones);
                $("#condiciones").text(condiciones);
                var icono = data.weather[0].icon;
                if (icono === "01d") {
                  $("#icono").addClass("wi-day-sunny");
                } else if (icono === "01n") {
                  $("#icono").addClass("wi-night-clear");
                } else if (icono === "02d") {
                  $("#icono").addClass("wi-day-cloudy");
                } else if (icono === "02n") {
                  $("#icono").addClass("wi-night-alt-cloudy");
                } else if (icono === "03d") {
                  $("#icono").addClass("wi-cloud");
                } else if (icono === "03n") {
                  $("#icono").addClass("wi-cloud");
                } else if (icono === "04d") {
                  $("#icono").addClass("wi-cloudy");
                } else if (icono === "04n") {
                  $("#icono").addClass("wi-cloudy");
                } else if (icono === "09d") {
                  $("#icono").addClass("wi-rain");
                } else if (icono === "09n") {
                  $("#icono").addClass("wi-rain");
                } else if (icono === "10d") {
                  $("#icono").addClass("wi-day-rain");
                } else if (icono === "10n") {
                  $("#icono").addClass("wi-night-rain");
                } else if (icono === "11d") {
                  $("#icono").addClass("wi-day-lightning");
                } else if (icono === "11n") {
                  $("#icono").addClass("wi-night-lightning");
                } else if (icono === "13d") {
                  $("#icono").addClass("wi-day-snow");
                } else if (icono === "13n") {
                  $("#icono").addClass("wi-night-snow");
                } else if (icono === "50d") {
                  $("#icono").addClass("wi-day-fog");
                } else if (icono === "50n") {
                  $("#icono").addClass("wi-night-fog");
                }
                $(".boton").click(function() {
                  if (cont % 2 === 0) {
                    $(".temp").text(tempF + "ºF");
                  } else {
                    $(".temp").text(tempC + "ºC");
                  }
                  cont++;
                });

              }
            });
          });
          }
        });     
