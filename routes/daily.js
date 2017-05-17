var express = require('express');
var router = express.Router();
var request = require('request');




/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Daily' });
});

router.get('/:id',function (req,res) {

   /* var current_weather=weathers.find(function (current_we) {

        return current_we.name===req.params.id;
    });

    if(current_weather!=null)
    {res.send(current_weather);}
    else
    {res.send('ne naideno');}*/

    //var request = require("request")

    if(req.params.id!=null) {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=";
        var appidkey ="&lang=ru&APPID=218e1bda5c7aa81b20be910fead9ad74";
     console.log(url+=req.params.id+appidkey);

        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var importedJSON = JSON.parse(body);
                console.log(importedJSON["weather"][0]["main"]);
                var main=importedJSON["weather"][0]["main"];
                var description=importedJSON["weather"][0]["description"];
                var pressure=(importedJSON["main"]["pressure"]*0.75006375541921).toFixed(0);
                var windspeed=importedJSON["wind"]["speed"];
                var temp=(importedJSON["main"]["temp"]-273.15).toFixed(2);
                var humidity=importedJSON["main"]["humidity"]; //влажность
                var city=importedJSON["name"];

               // res.render('daily',{city:city,main:main,description:description,pressure:pressure,windspeed:windspeed,temp:temp,humidity:humidity});
                res.send(importedJSON);
            }
            else {
                console.log("error");
            }
        })
    }

});

getPhrase=function(name){
    if(!phrases[name]){
        throw new Error("Нет такой фразы"+name);
    }
    return phrases[name];
};

module.exports = router;
