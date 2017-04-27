$(document).ready(function(){
var lat , long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
  }
    lat = position.position.coords.latitude;
    long = position.coords.longitude;
  var api = 'http://openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1';

  $.getJSON(api,function(data){
    console.log("el get json esta cargando");
  alert(data.coord.lat);
  });
});
