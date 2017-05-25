let babelcheck;
var PouchDB = require('pouchdb-browser');
var db = new PouchDB('mydb');
function addTodo(text) {
    var info = {
        _id: new Date().toISOString(),
        title: text,
        completed: false
    };
    db.put(info, function callback(err, result) {
        if (!err) {
            console.log('Successfully posted an info!');
        }
    });
}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function showTodos(cityname) {
    db.allDocs({include_docs: true, descending: true}, function (err, doc) {
        var b;
        console.log(doc);
        try {
            console.log(cityname);
            for (var i = 0; i < doc.rows.length; i++) {
                if (ucFirst(cityname) === doc.rows[i]["doc"]["title"]["name"]) {
                    b = doc.rows[i]["doc"]["title"];
                    break;
                }
            }
            render_current(b);
        }
        catch (error) {
            console.log(error);
        }
    });
}

function render_current(importedJSON) {
    var main = importedJSON["weather"][0]["main"];
    var description = importedJSON["weather"][0]["description"];
    var weathericon = "http://openweathermap.org/img/w/" + importedJSON["weather"][0]["icon"] + ".png";
    var pressure = (importedJSON["main"]["pressure"] * 0.75006375541921).toFixed(0);
    var windspeed = importedJSON["wind"]["speed"];
    var temp = (importedJSON["main"]["temp"] - 273.15).toFixed(2);
    var humidity = importedJSON["main"]["humidity"]; //влажность
    var city = importedJSON["name"];
    var newdiv = "<div class='current'>" +
        "<div class='type'>Текущая</div>" +
        "<div class='city'>" + city + "</div>" +
        "<div class='description'><img src='" + weathericon + "'/>" + description + "</div>" +
        "<div class='temp'>Температура: " + temp + " °C</div>" +
        "<div class='humidity'>Влажность воздуха: " + humidity + " %</div>" +
        "<div class='pressure'>Атмосферное давление: " + pressure + " мм рт. ст</div>" +
        "<div class='windspeed'>Скорость ветра: " + windspeed + " м/с</div>" +
        "</div>";
    $(".current").replaceWith(newdiv);
}

function render_week(importedJSON) {
    let city=importedJSON["city"]["name"];
    let newdivcontainer=[];

    for(let i=importedJSON["list"].length-3;i>=0;i-=8)
    {
     let dt_txt=importedJSON["list"][i]["dt_txt"];
     let description = importedJSON["list"][i]["weather"][0]["description"];
     let weathericon = "http://openweathermap.org/img/w/" + importedJSON["list"][i]["weather"][0]["icon"] + ".png";
     let temp = (importedJSON["list"][i]["main"]["temp"] - 273.15).toFixed(2);
     let humidity = importedJSON["list"][i]["main"]["humidity"]; //влажность
     let pressure = (importedJSON["list"][i]["main"]["pressure"] * 0.75006375541921).toFixed(0);
     let windspeed = importedJSON["list"][i]["wind"]["speed"];

        newdivcontainer[newdivcontainer.length]="<div class='weatherblock'>"+
         "<div class='city'>" + city + "</div>" +
         "<div class='type'>"+dt_txt+"</div>" +
         "<div class='description'><img src='" + weathericon + "'/>" + description + "</div>" +
         "<div class='temp'>Температура: " + temp + " °C</div>" +
         "<div class='humidity'>Влажность воздуха: " + humidity + " %</div>" +
         "<div class='pressure'>Атмосферное давление: " + pressure + " мм рт. ст</div>" +
         "<div class='windspeed'>Скорость ветра: " + windspeed + " м/с</div>" +
         "</div>";
     //console.log(dt_txt);
    }

    let newdiv = "<div class='weekforecast'>";

    for(let i=newdivcontainer.length-1;i>=0;i--)
    {
        newdiv+=newdivcontainer[i];
    }

    newdiv+="</div>";
    $(".weekweather").replaceWith(newdiv);

}

$(document).ready(function () {

    $("#like").on("click", function () {
        if ($('#textbox').val().length > 0) {
            var city = $('input#textbox').val();
            /*
             db.get('mydb').then(function (doc) {
             console.log(doc); // handle doc
             }).catch(function (err) {
             console.log(err);
             });*/
            $.ajax({
                type: "GET",
                url: "current/" + city,
                contentType: "application/json",
                timeout: 3000,
                success: function (data) {
                    console.log("succes");
                    //console.log(data);
                    var currentweather = JSON.parse(data[0]);
                    addTodo(currentweather);
                    render_current(currentweather);

                    if(data.length>1) {
                        //console.log(data[1]);
                        var weekweather = $.parseJSON(data[1]);
                        //console.log(weekweather["list"].length);
                        render_week(weekweather);
                    }
                    // var massvremennui=[2];
                   // massvremennui[0]=currentweather;

                },
                error: function () {
                    try {
                        showTodos($('input#textbox').val());
                    }
                    catch (error1) {
                        console.log(error1);
                    }
                }
            });
        }
        else {
            console.log("Input box is empty");
        }
    });

});