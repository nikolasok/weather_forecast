var express = require('express');
var router = express.Router();
var request = require('request');




/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Daily' });
});

router.get('/:id',function (req,res,next) {

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
     url+=req.params.id+appidkey;

            request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var importedJSON = JSON.parse(body);
                console.log(body);
                /*
                console.log(importedJSON["weather"][0]["main"]);
                var main=importedJSON["weather"][0]["main"];
                var description=importedJSON["weather"][0]["description"];
                var pressure=(importedJSON["main"]["pressure"]*0.75006375541921).toFixed(0);
                var windspeed=importedJSON["wind"]["speed"];
                var temp=(importedJSON["main"]["temp"]-273.15).toFixed(2);
                var humidity=importedJSON["main"]["humidity"]; //влажность
                var city=importedJSON["name"];*/

               // res.render('daily',{city:city,main:main,description:description,pressure:pressure,windspeed:windspeed,temp:temp,humidity:humidity});
                //res.send(body);
                req.initTimestamp =body;
                next();
            }
            else {
                console.log("error");
                next();
            }
        })
    }

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
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=";
        var appidkey ="&mode=json&lang=ru&APPID=439078044ba4a968cb2906390f3b8bc0";
        //console.log(url+=req.params.id+appidkey);
        /*
         88f1757ee8b9250224afc2c3446a2654
         3a9788c1584b5395ddef6b2daad09466
         218e1bda5c7aa81b20be910fead9ad74
         439078044ba4a968cb2906390f3b8bc0
         */
        url+=req.params.id+appidkey;

        let testvar={"cod":"200","message":0.0032,"cnt":40,"list":[{"dt":1495756800,"main":{"temp":286.06,"temp_min":286.06,"temp_max":286.736,"pressure":1010.44,"sea_level":1025.95,"grnd_level":1010.44,"humidity":99,"temp_kf":-0.68},"weather":[{"id":500,"main":"Rain","description":"легкий дождь","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":2.06,"deg":308.001},"rain":{"3h":1.285},"sys":{"pod":"n"},"dt_txt":"2017-05-26 00:00:00"},{"dt":1495767600,"main":{"temp":286.05,"temp_min":286.05,"temp_max":286.561,"pressure":1010.22,"sea_level":1025.71,"grnd_level":1010.22,"humidity":100,"temp_kf":-0.51},"weather":[{"id":500,"main":"Rain","description":"легкий дождь","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":2.06,"deg":308},"rain":{"3h":0.165},"sys":{"pod":"d"},"dt_txt":"2017-05-26 03:00:00"},{"dt":1495778400,"main":{"temp":289.17,"temp_min":289.17,"temp_max":289.504,"pressure":1010.28,"sea_level":1025.68,"grnd_level":1010.28,"humidity":100,"temp_kf":-0.34},"weather":[{"id":802,"main":"Clouds","description":"слегка облачно","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":2.06,"deg":268.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-26 06:00:00"},{"dt":1495789200,"main":{"temp":292.98,"temp_min":292.98,"temp_max":293.154,"pressure":1010.03,"sea_level":1025.35,"grnd_level":1010.03,"humidity":91,"temp_kf":-0.17},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":2.86,"deg":284.5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-26 09:00:00"},{"dt":1495800000,"main":{"temp":293.039,"temp_min":293.039,"temp_max":293.039,"pressure":1009.65,"sea_level":1025.08,"grnd_level":1009.65,"humidity":66,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":4.78,"deg":310.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-26 12:00:00"},{"dt":1495810800,"main":{"temp":292.122,"temp_min":292.122,"temp_max":292.122,"pressure":1009.82,"sea_level":1025.12,"grnd_level":1009.82,"humidity":69,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"легкий дождь","icon":"10d"}],"clouds":{"all":20},"wind":{"speed":4.21,"deg":316.503},"rain":{"3h":0.0099999999999998},"sys":{"pod":"d"},"dt_txt":"2017-05-26 15:00:00"},{"dt":1495821600,"main":{"temp":288.045,"temp_min":288.045,"temp_max":288.045,"pressure":1010.71,"sea_level":1026.12,"grnd_level":1010.71,"humidity":74,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"легкий дождь","icon":"10d"}],"clouds":{"all":56},"wind":{"speed":3.67,"deg":332.501},"rain":{"3h":0.06},"sys":{"pod":"d"},"dt_txt":"2017-05-26 18:00:00"},{"dt":1495832400,"main":{"temp":285.669,"temp_min":285.669,"temp_max":285.669,"pressure":1011.02,"sea_level":1026.55,"grnd_level":1011.02,"humidity":81,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"облачно","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":2.01,"deg":280},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-26 21:00:00"},{"dt":1495843200,"main":{"temp":283.01,"temp_min":283.01,"temp_max":283.01,"pressure":1011.44,"sea_level":1027.1,"grnd_level":1011.44,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.42,"deg":332.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-27 00:00:00"},{"dt":1495854000,"main":{"temp":282.746,"temp_min":282.746,"temp_max":282.746,"pressure":1012.47,"sea_level":1028.1,"grnd_level":1012.47,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.87,"deg":343.503},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-27 03:00:00"},{"dt":1495864800,"main":{"temp":288.658,"temp_min":288.658,"temp_max":288.658,"pressure":1013.71,"sea_level":1029.12,"grnd_level":1013.71,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":4.01,"deg":348.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-27 06:00:00"},{"dt":1495875600,"main":{"temp":291.348,"temp_min":291.348,"temp_max":291.348,"pressure":1014.16,"sea_level":1029.57,"grnd_level":1014.16,"humidity":68,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"слегка облачно","icon":"03d"}],"clouds":{"all":36},"wind":{"speed":5.13,"deg":347},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-27 09:00:00"},{"dt":1495886400,"main":{"temp":292.663,"temp_min":292.663,"temp_max":292.663,"pressure":1014.29,"sea_level":1029.64,"grnd_level":1014.29,"humidity":62,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"облачно","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":4.96,"deg":348.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-27 12:00:00"},{"dt":1495897200,"main":{"temp":292.407,"temp_min":292.407,"temp_max":292.407,"pressure":1014.3,"sea_level":1029.61,"grnd_level":1014.3,"humidity":53,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"слегка облачно","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":5.13,"deg":340.014},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-27 15:00:00"},{"dt":1495908000,"main":{"temp":289.463,"temp_min":289.463,"temp_max":289.463,"pressure":1014.79,"sea_level":1030.17,"grnd_level":1014.79,"humidity":52,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":3.72,"deg":332},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-27 18:00:00"},{"dt":1495918800,"main":{"temp":284.286,"temp_min":284.286,"temp_max":284.286,"pressure":1014.63,"sea_level":1030.26,"grnd_level":1014.63,"humidity":77,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"облачно","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":1.66,"deg":262.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-27 21:00:00"},{"dt":1495929600,"main":{"temp":283.975,"temp_min":283.975,"temp_max":283.975,"pressure":1014.57,"sea_level":1030.26,"grnd_level":1014.57,"humidity":66,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"облачно","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":4.66,"deg":303.505},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-28 00:00:00"},{"dt":1495940400,"main":{"temp":285.292,"temp_min":285.292,"temp_max":285.292,"pressure":1013.95,"sea_level":1029.7,"grnd_level":1013.95,"humidity":76,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":2.36,"deg":281.507},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-28 03:00:00"},{"dt":1495951200,"main":{"temp":290.52,"temp_min":290.52,"temp_max":290.52,"pressure":1013.33,"sea_level":1028.87,"grnd_level":1013.33,"humidity":66,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":7.47,"deg":297.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-28 06:00:00"},{"dt":1495962000,"main":{"temp":289.836,"temp_min":289.836,"temp_max":289.836,"pressure":1015.2,"sea_level":1030.62,"grnd_level":1015.2,"humidity":72,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":6.66,"deg":22.5015},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-28 09:00:00"},{"dt":1495972800,"main":{"temp":290.32,"temp_min":290.32,"temp_max":290.32,"pressure":1017.57,"sea_level":1033,"grnd_level":1017.57,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":5.66,"deg":28.5011},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-28 12:00:00"},{"dt":1495983600,"main":{"temp":290.068,"temp_min":290.068,"temp_max":290.068,"pressure":1018.74,"sea_level":1034.2,"grnd_level":1018.74,"humidity":57,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.86,"deg":31.5006},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-28 15:00:00"},{"dt":1495994400,"main":{"temp":286.312,"temp_min":286.312,"temp_max":286.312,"pressure":1019.36,"sea_level":1035,"grnd_level":1019.36,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.26,"deg":46.0005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-28 18:00:00"},{"dt":1496005200,"main":{"temp":282.798,"temp_min":282.798,"temp_max":282.798,"pressure":1019.33,"sea_level":1035.08,"grnd_level":1019.33,"humidity":57,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":3.66,"deg":126.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-28 21:00:00"},{"dt":1496016000,"main":{"temp":282.244,"temp_min":282.244,"temp_max":282.244,"pressure":1018.25,"sea_level":1034.09,"grnd_level":1018.25,"humidity":62,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"слегка облачно","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":5.01,"deg":171.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-29 00:00:00"},{"dt":1496026800,"main":{"temp":283.85,"temp_min":283.85,"temp_max":283.85,"pressure":1015.79,"sea_level":1031.43,"grnd_level":1015.79,"humidity":58,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":7.2,"deg":184.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-29 03:00:00"},{"dt":1496037600,"main":{"temp":289.849,"temp_min":289.849,"temp_max":289.849,"pressure":1012.61,"sea_level":1028.06,"grnd_level":1012.61,"humidity":59,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":8.72,"deg":207.504},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-29 06:00:00"},{"dt":1496048400,"main":{"temp":295.791,"temp_min":295.791,"temp_max":295.791,"pressure":1009.56,"sea_level":1024.83,"grnd_level":1009.56,"humidity":55,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":92},"wind":{"speed":9.71,"deg":239},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-29 09:00:00"},{"dt":1496059200,"main":{"temp":297.489,"temp_min":297.489,"temp_max":297.489,"pressure":1006.82,"sea_level":1022.09,"grnd_level":1006.82,"humidity":52,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":92},"wind":{"speed":11.96,"deg":255.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-29 12:00:00"},{"dt":1496070000,"main":{"temp":296.104,"temp_min":296.104,"temp_max":296.104,"pressure":1005.78,"sea_level":1021,"grnd_level":1005.78,"humidity":48,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"пасмурно","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":12.31,"deg":265.511},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-29 15:00:00"},{"dt":1496080800,"main":{"temp":292.984,"temp_min":292.984,"temp_max":292.984,"pressure":1005.12,"sea_level":1020.37,"grnd_level":1005.12,"humidity":67,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"легкий дождь","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":9.06,"deg":262.501},"rain":{"3h":0.08},"sys":{"pod":"d"},"dt_txt":"2017-05-29 18:00:00"},{"dt":1496091600,"main":{"temp":291.045,"temp_min":291.045,"temp_max":291.045,"pressure":1004.35,"sea_level":1019.59,"grnd_level":1004.35,"humidity":87,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"легкий дождь","icon":"10n"}],"clouds":{"all":44},"wind":{"speed":6.71,"deg":268.501},"rain":{"3h":0.48},"sys":{"pod":"n"},"dt_txt":"2017-05-29 21:00:00"},{"dt":1496102400,"main":{"temp":290.091,"temp_min":290.091,"temp_max":290.091,"pressure":1003.58,"sea_level":1018.82,"grnd_level":1003.58,"humidity":84,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"слегка облачно","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":5.21,"deg":276},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-30 00:00:00"},{"dt":1496113200,"main":{"temp":289.128,"temp_min":289.128,"temp_max":289.128,"pressure":1003.12,"sea_level":1018.49,"grnd_level":1003.12,"humidity":91,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"легкий дождь","icon":"10d"}],"clouds":{"all":32},"wind":{"speed":4.06,"deg":264.508},"rain":{"3h":0.0099999999999998},"sys":{"pod":"d"},"dt_txt":"2017-05-30 03:00:00"},{"dt":1496124000,"main":{"temp":292.453,"temp_min":292.453,"temp_max":292.453,"pressure":1003.44,"sea_level":1018.71,"grnd_level":1003.44,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.57,"deg":280.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-30 06:00:00"},{"dt":1496134800,"main":{"temp":294.872,"temp_min":294.872,"temp_max":294.872,"pressure":1002.58,"sea_level":1017.84,"grnd_level":1002.58,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.3,"deg":281.008},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-30 09:00:00"},{"dt":1496145600,"main":{"temp":295.995,"temp_min":295.995,"temp_max":295.995,"pressure":1002.02,"sea_level":1017.15,"grnd_level":1002.02,"humidity":55,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":8.51,"deg":272.505},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-30 12:00:00"},{"dt":1496156400,"main":{"temp":295.289,"temp_min":295.289,"temp_max":295.289,"pressure":1001.12,"sea_level":1016.36,"grnd_level":1001.12,"humidity":48,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":8.41,"deg":274.5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-30 15:00:00"},{"dt":1496167200,"main":{"temp":291.342,"temp_min":291.342,"temp_max":291.342,"pressure":1001.32,"sea_level":1016.6,"grnd_level":1001.32,"humidity":41,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.36,"deg":287.008},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-05-30 18:00:00"},{"dt":1496178000,"main":{"temp":287.373,"temp_min":287.373,"temp_max":287.373,"pressure":1002.88,"sea_level":1018.25,"grnd_level":1002.88,"humidity":54,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":6.8,"deg":306.509},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-05-30 21:00:00"}],"city":{"id":619762,"name":"Yakubovka","coord":{"lat":52.4167,"lon":31.0293},"country":"BY"}};
        testvar=JSON.stringify(testvar);
        console.log(testvar);

        request(url, function (error, response, body2) {
            if (!error && response.statusCode == 200) {
                var importedJSON = JSON.parse(body2);
                //console.log(body2);
                var mass=[];
                mass[0]=req.initTimestamp;
                mass[1]=body2;
                //console.log(mass);

                 //console.log(importedJSON["weather"][0]["main"]);
                 //var main=importedJSON["weather"][0]["main"];
                 //var description=importedJSON["weather"][0]["description"];
                // var pressure=(importedJSON["main"]["pressure"]*0.75006375541921).toFixed(0);
                // var windspeed=importedJSON["wind"]["speed"];
                // var temp=(importedJSON["main"]["temp"]-273.15).toFixed(2);
                // var humidity=importedJSON["main"]["humidity"]; //влажность
                // var city=importedJSON["name"];

                // res.render('daily',{city:city,main:main,description:description,pressure:pressure,windspeed:windspeed,temp:temp,humidity:humidity});
                res.send(mass);
            }
            else {
                console.log("error2");
                var mass=[];
                mass[0]=req.initTimestamp;
                //res.send(mass[0]);
            }

        })

        /*var mass=[];
        mass[0]=req.initTimestamp;
        mass[1]=testvar;
        res.send(mass);*/
    }

});

module.exports = router;
