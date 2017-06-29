// modularized script

(function(){
  $(document).ready(function() { //Awaits for complete DOM load.
        var lat, long;//lattitude and longitude variable declaration.
        if (navigator.geolocation) {// if geolocation success
          navigator.geolocation.getCurrentPosition(function(position) {// setting lattitude and longitude values.
              lat = position.coords.latitude;
              lon = position.coords.longitude;
              //Setting API key value and API url. Notice the crossorig.in due a cross origins problems.
              var API_KEY = '550b915fae53857d3853fc8509e34f54' , api ='https://crossorig.in/http://api.openweathermap.org/data/2.5/weather?lat=' +lat +'&lon=' +lon +'&appid=' +API_KEY;
              // getting JSON from weather API.
              $.ajax({
                url: api,
                dataType: "json",
                success: function(data) {
                  //Setting some display variables
                  var city = data.name, condiciones = data.weather[0].description ,icono = data.weather[0].icon ,tempC = Math.round(data.main.temp - 273.15),tempF = Math.round(tempC * 1.8 + 32) , cont = 0;
                  $(".temp").text(tempC + "ºC");//Displaying Temperatuce in ºC
                  $("#city").text(city);// Displaying the City or Location name.
                  $("#condiciones").text(condiciones);//Displaying weather conditions.
                  (function(){//Modularized function that shows a determinate icon depending the day conditions.
                        $("#icono").removeClass("wi-na");
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
                  })();
                  $(".boton").click(function() {//button trigger.
                    if (cont % 2 === 0) {//condition to change from ºF to ºC the temperature measures.
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

})();
