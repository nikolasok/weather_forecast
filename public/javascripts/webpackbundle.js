/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

    $("#like").on("click", function () {
        if ($('#textbox').val().length > 0) {
            var city = $('input#textbox').val();

            $.ajax({
                type: "GET",
                url: "current/" + city,
                contentType: "application/json",
                success: function success(data) {
                    console.log(data);
                    var importedJSON = $.parseJSON(data);
                    //console.log(importedJSON);
                    var main = importedJSON["weather"][0]["main"];
                    var description = importedJSON["weather"][0]["description"];
                    var weathericon = "http://openweathermap.org/img/w/" + importedJSON["weather"][0]["icon"] + ".png";
                    var pressure = (importedJSON["main"]["pressure"] * 0.75006375541921).toFixed(0);
                    var windspeed = importedJSON["wind"]["speed"];
                    var temp = (importedJSON["main"]["temp"] - 273.15).toFixed(2);
                    var humidity = importedJSON["main"]["humidity"]; //влажность
                    var city = importedJSON["name"];
                    var newdiv = "<div class='current'>" + "<div class='type'>Текущая</div>" + "<div class='city'>" + city + "</div>" + "<div class='description'><img src='" + weathericon + "'/>" + description + "</div>" + "<div class='temp'>Температура: " + temp + " °C</div>" + "<div class='humidity'>Влажность воздуха: " + humidity + " %</div>" + "<div class='pressure'>Атмосферное давление: " + pressure + " мм рт. ст</div>" + "<div class='windspeed'>Скорость ветра: " + windspeed + " м/с</div>" + "</div>";
                    $(".current").replaceWith(newdiv);
                }
            });
        } else {
            console.log("Input box is empty");
        }
    });
});

/***/ })
/******/ ]);