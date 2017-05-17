$(document).ready(function() {

$("#like").on("click", function(){
   if($('#textbox').val().length>0) {
       var city = $('input#textbox').val();

       $.ajax({
           type: "GET",
           url: "current/" + city,
           contentType: "application/json",
           success: function (data) {
               console.log(data);
               var importedJSON = $.parseJSON(data);
               //console.log(importedJSON);
               var main = importedJSON["weather"][0]["main"];
               var description = importedJSON["weather"][0]["description"];
               var weathericon="http://openweathermap.org/img/w/"+importedJSON["weather"][0]["icon"]+".png";
               var pressure = (importedJSON["main"]["pressure"] * 0.75006375541921).toFixed(0);
               var windspeed = importedJSON["wind"]["speed"];
               var temp = (importedJSON["main"]["temp"] - 273.15).toFixed(2);
               var humidity = importedJSON["main"]["humidity"]; //влажность
               var city = importedJSON["name"];
               var newdiv = "<div class='current'>" +
                   "<div class='type'>Текущая</div>" +
                   "<div class='city'>" + city + "</div>" +
                   "<div class='description'><img src='"+weathericon+"'/>" + description + "</div>" +
                   "<div class='temp'>Температура: " + temp + " °C</div>" +
                   "<div class='humidity'>Влажность воздуха: " + humidity + " %</div>" +
                   "<div class='pressure'>Атмосферное давление: " + pressure + " мм рт. ст</div>" +
                   "<div class='windspeed'>Скорость ветра: " + windspeed + " м/с</div>" +
                   "</div>";
               $(".current").replaceWith(newdiv);
           }
       });
   }
   else
   {console.log("Input box is empty");}
}); 

});