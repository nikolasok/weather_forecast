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
                url: "current/" + city + "",
                contentType: "application/json",
                timeout: 3000,
                success: function (data) {
                    //console.log(data);
                    var importedJSON = $.parseJSON(data);
                    addTodo(importedJSON);
                    render_current(importedJSON);
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