$(document).ready(function(){
var lat;
var lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log("Latidud: " +lat);
      console.log("Longitud: "+lon);

      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  
      var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=550b915fae53857d3853fc8509e34f54';
      
      $.getJSON(api,function(data){
        console.log(data);
      
      });           
    });
  }
});
