$(document).ready(function() {

$("#like").on("click", function(){
   var city=$('input#textbox').val();
    console.log(city);

     $.ajax({
       type: "GET",
       url: "daily/"+city,
       contentType: "application/json",
       success: function (data) {
             console.log(data);
             var importedJSON=data;
             var main=importedJSON["weather"][0]["main"];
             var description=importedJSON["weather"][0]["description"];
             var pressure=(importedJSON["main"]["pressure"]*0.75006375541921).toFixed(0);
             var windspeed=importedJSON["wind"]["speed"];
             var temp=(importedJSON["main"]["temp"]-273.15).toFixed(2);
             var humidity=importedJSON["main"]["humidity"]; //влажность
             var city=importedJSON["name"];

             console.log(main);
       }
});
}); 

});