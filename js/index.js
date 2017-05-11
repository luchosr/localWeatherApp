$(document).ready(function() {
  var lat;
  var lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log("Latidud: " + lat);
      console.log("Longitud: " + lon);


      var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=550b915fae53857d3853fc8509e34f54';
      console.log("aca salimos del if");

      console.log("la api queda como: " + api);
      //var api = 'http://api.openweathermap.org/data/2.5/weather?lat=-34,6&lon=-58,4&appid=550b915fae53857d3853fc8509e34f54';

      $.getJSON(api, function(data) {
        // $("#icono").
          var cont = 0;
          var tempC = Math.round(data.main.temp - 273);
        $("#city").text(data.name);

        console.log(data);

        console.log("La temperatura es de: " + (data.main.temp - 273)+ " grados centigrados");
        $(".temp").text(tempC+ "ºC");

        var city = data.name;
        console.log("En la ciudad de: " + city);
        var condiciones = data.weather[0].description;
        console.log("Las condiciones son: " + condiciones);
        $("#condiciones").text(condiciones);
        console.log("Las condiciones generales son: " + condiciones);
        var velViento = Math.round(data.wind.speed * 1.852 * 100)/100;
        console.log("La velocidad del viento es de. " + velViento+ " kilometros por hora.");
        var icono = data.weather[0].icon;
        console.log("El icono es:" + icono);
        if (icono === "01d") {
          $("#icono").addClass("wi-day-sunny");
        } else if (icono === "01n") {
          $("#icono").addClass("wi-night-clear");
          }else if (icono === "02d") {
            $("#icono").addClass("wi-day-cloudy");
          }else if (icono === "02n") {
            $("#icono").addClass("wi-night-alt-cloudy");
        }else if (icono === "03d") {
          $("#icono").addClass("wi-cloud");
        }else if (icono === "03n") {
          $("#icono").addClass("wi-cloud");
        }else if (icono === "04d") {
          $("#icono").addClass("wi-cloudy");
        }else if (icono === "04n") {
          $("#icono").addClass("wi-cloudy");
        }else if (icono === "09d") {
          $("#icono").addClass("wi-rain");
        }else if (icono === "09n") {
          $("#icono").addClass("wi-rain");
        }else if (icono === "10d") {
          $("#icono").addClass("wi-day-rain");
        }else if (icono === "10n") {
          $("#icono").addClass("wi-night-rain");
        }else if (icono === "11d") {
          $("#icono").addClass("wi-day-lightning");
        }else if (icono === "11n") {
          $("#icono").addClass("wi-night-lightning");
        }else if (icono === "13d") {
          $("#icono").addClass("wi-day-snow");
        }else if (icono === "13n") {
          $("#icono").addClass("wi-night-snow");
        }else if (icono === "50d") {
          $("#icono").addClass("wi-day-fog");
        }else if (icono === "50n") {
          $("#icono").addClass("wi-night-fog");
        }

        $(".boton").click(function(){
          if (cont%2 === 0) {
          $(".temp").text(tempF+ "ºF");
        }else {
          $(".temp").text(tempC+ "ºC");
        }
          cont++;
        });
      }); 

    });
      
  }

});     
