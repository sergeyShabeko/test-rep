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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

const bodyContent = `<div id = 'wrapper'>
    <section class = 'menu'>
        <button id = 'reloadImage'><img src="https://img.icons8.com/cute-clipart/64/000000/process.png"></button>
        <input id = 'searchArea' type="text">
        <button class = 'anim' id = 'buttonSearch'><img src="https://img.icons8.com/color/48/000000/search.png" alt="Search"></button>
        <button class = 'anim' id = 'speach'><img src="https://img.icons8.com/metro/26/000000/micro.png"></button>
        <div class = 'temp'>
          <button class = 'item_temp active'>C</button>
          <button class = 'item_temp'>F</button>
        </div>
        <div class = 'language'>
            <button class = 'item_language'>RU</button>
            <button class = 'item_language'>BE</button>
            <button class = 'item_language active_lang'>EN</button>
        </div>
    </section>
    <section class = 'weather_container'>
      <div class = 'current_weather'>
        <div> 
          <p id = 'weather_location'></p>
          <p id = 'weather_date'></p>
        </div>       
        <div class = 'weather_today'>
          <div><p id = 'temperatureToday'>°</p></div>
          <div class = 'iconsToday'>
              <div id = 'iconWeather'></div>
                <div class = 'todayCharacter'>
                  <p id = 'summary'></p>
                  <p id = 'feelLike'></p>
                  <p id = 'wind'></p>
                  <p id = 'humidity'></p>
                </div>
              </div>          
        </div>
        <div class = 'sameDayWeather'>
          <div id = 'weatherDay1'>
            <p id = 'dayOfWeek1'></p>
            <div id = characterDay1>
              <p id = 'day1Temp'></p>
            </div>
          </div>
          <div id = 'weatherDay2'>
              <p id = 'dayOfWeek2'></p>
              <div id = characterDay2>
                <p id = 'day2Temp'></p>
              </div>
          </div>
          <div id = 'weatherDay3'>
              <p id = 'dayOfWeek3'></p>
              <div id = characterDay3>
                <p id = 'day3Temp'></p>
              </div>
          </div>
        </div>
      </div>
      <div class = 'map'>
        <div id='map'></div>
        <p class = 'coordinats' id = 'latitude'></p>
        <p class = 'coordinats' id = 'longitude'></p>
      </div>
    </section>
    </div>`;
document.getElementsByTagName('body')[0].innerHTML = bodyContent;


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests */ "./src/js/requests.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_requests__WEBPACK_IMPORTED_MODULE_2__);



 
_dom__WEBPACK_IMPORTED_MODULE_1__
_requests__WEBPACK_IMPORTED_MODULE_2__ 


/***/ }),

/***/ "./src/js/requests.js":
/*!****************************!*\
  !*** ./src/js/requests.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

let languageSelect = 'en';
let tempSelect = 'si';
let localLat = 0;
let localLng = 0;
let correctTime = 0;

async function correctTimeZone(lat, lng) {
  let localTime = await getLocalTime(lat, lng);
 correctTime = localTime.gmtOffset;
}


const TRANSLATE = {
  'latitude-en': 'Latitude',
  'latitude-ru': 'Широта',
  'latitude-be': 'Шырата',
  'longitude-en': 'Longitude',
  'longitude-ru': 'Долгота',
  'longitude-be': 'Даўгата',
  'feels-en': 'FEELS LIKE',
  'feels-ru': 'ОЩУЩАЕТСЯ КАК',
  'feels-be': 'АДЧУВАЕЦЦА ЯК',
  'wind-en': 'WIND',
  'wind-ru': 'ВЕТЕР',
  'wind-be': 'ВЕЦЕР',
  'humidity-en': 'HUMIDITY',
  'humidity-ru': 'ВЛАЖНОСТЬ',
  'humidity-be': 'ВIЛЬГОТНАСЦЬ',
  'понедельник': 'ПАНЯДЗЕЛАК',
  'вторник': 'АЎТОРАК',
  'среда': 'СЕРАДА',
  'четверг': 'ЧАЦЬВЕРГ',
  'пятница': 'ПЯТНIЦА',
  'суббота': 'СЫБОТА',
  'воскресенье': 'НЯДЗЕЛЯ',
  'пн,': 'пан,',
  'вт,': 'аўт,',
  'ср,': 'сер,',
  'чт,': 'чац,',
  'пт,': 'пят,',
  'сб,': 'сыб,',
  'января': 'студзеня',
  'февраля': 'лютага',
  'марта': 'сакавiка',
  'апреля': 'красавiка',
  'мая': 'мая',
  'июня': 'чэрвеня',
  'июля': 'лiпеня',
  'августа': 'жнiвеня',
  'сентября': 'верасеня',
  'октября': 'кастрычнiка',
  'ноября': 'лiстапада',
  'декабря': 'снежня',
  'ПАНЯДЗЕЛАК': 'ПАНЯДЗЕЛАК',
  'АЎТОРАК': 'АЎТОРАК',
  'СЕРАДА': 'СЕРАДА',
  'ЧАЦЬВЕРГ': 'ЧАЦЬВЕРГ',
  'ПЯТНIЦА': 'ПЯТНIЦА',
  'СЫБОТА': 'СЫБОТА',
  'НЯДЗЕЛЯ': 'НЯДЗЕЛЯ',
};

Array.from(document.getElementsByClassName('item_temp')).forEach((element) => {
  element.addEventListener('click', () => {
    document.getElementsByClassName('active')[0].classList.remove('active');
    element.classList.add('active');
    let cityCoordinats = getCoordinates(document.getElementById('weather_location').textContent);
    cityCoordinats.then( function(value) {
      let location = (value.results[0].formatted);
      let weatherLocation = document.getElementById('weather_location');
      weatherLocation.innerText = location;
      removeIcon();
      let unitsTemp = '';

      Array.from(document.getElementsByClassName('item_temp')).forEach((element) => {
        if ( document.getElementsByClassName('active')[0].textContent == 'C') {
        unitsTemp = 'si';
        tempSelect = 'si';
        } else {
          unitsTemp = '';
          tempSelect = '';
        }
      });
      localLat = value.results[0].geometry.lat;
     localLng = value.results[0].geometry.lng;
      init((value.results[0].geometry.lat + ',' + value.results[0].geometry.lng), unitsTemp);
    });

  });
});

//menu language
Array.from(document.getElementsByClassName('item_language')).forEach((element) => {
  element.addEventListener('click', () => {
    document.getElementsByClassName('active_lang')[0].classList.remove('active_lang');
    element.classList.add('active_lang');
    if (element.textContent == 'RU'){
      languageSelect = 'ru';
      removeIcon();
      document.getElementById('buttonSearch').click();
    } else if (element.textContent == 'BE') {
      languageSelect = 'be';
      removeIcon();
      document.getElementById('buttonSearch').click();
    } else  {
      languageSelect = 'en';
      removeIcon();
      document.getElementById('buttonSearch').click();
    }
  });
});





function getPosition() {
  const API_IPINFO = '2852ee40307a93';
  return fetch(`https://ipinfo.io/json?token=${API_IPINFO}`).then(response => {
    return response.json();
  });
}

 async function temp() {
   let locationIP = await getPosition();
   let cityCoordinats = getCoordinates(locationIP.city);;
   cityCoordinats.then( function(value) {
     let location = value.results[0].formatted;
     let weatherLocation = document.getElementById('weather_location');
     weatherLocation.innerText = location;
     document.getElementById('searchArea').value = location;
     localLat = value.results[0].geometry.lat;
     localLng = value.results[0].geometry.lng;
     correctTimeZone(localLat, localLng);
     init((value.results[0].geometry.lat + ',' + value.results[0].geometry.lng), `${tempSelect}`);
   });
 }
 temp();

// https://cors-anywhere.herokuapp.com/

function getWeather(coordinates, unitsTemp) {
     const SECRET_KEY_DARK_SKY = 'd383fe4c28a43caf4e58d7b88c3bcf5a';
     return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${SECRET_KEY_DARK_SKY}/${coordinates}?units=${unitsTemp}&lang=${languageSelect}`).then(response => response.json()).then(weather => {
        return weather;
     });
}



async function init(initCity, unitsTemp) {
  let weatherCurrent = await getWeather(initCity, unitsTemp);
  let localTime = await getLocalTime(localLat, localLng);
    
    let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    let dateWeather = new Date(localTime.timestamp*1000 - correctTime*1000).toLocaleString(`${languageSelect}`, options);
   

    let weatherDate = document.getElementById('weather_date');
    weatherDate.innerText = dateWeather;

  setInterval(async function f(){  let localTime = await getLocalTime(localLat, localLng);
    let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    let dateWeather = new Date(localTime.timestamp*1000 - correctTime*1000).toLocaleString(`${languageSelect}`, options);
    let weatherDate = document.getElementById('weather_date');
    weatherDate.innerText = dateWeather;
    if (languageSelect === 'be') {
      translateDay();
    }
  },62000);


  let currentTemperature = weatherCurrent.currently.temperature;
  let descriptionWeather = weatherCurrent.currently.summary;
  let feelsLike = weatherCurrent.currently.apparentTemperature;
  let wind = weatherCurrent.currently.windSpeed;
  let humidity = weatherCurrent.currently.humidity * 100;
  let iconWaether = weatherCurrent.currently.icon;


  let weatherToday = document.getElementById('temperatureToday');
  weatherToday.innerText = (Math.round(currentTemperature) + '°');
  let summaryItem = document.getElementById('summary');
  summaryItem.innerText = descriptionWeather;
  let feelsLikeItem = document.getElementById('feelLike');
  feelsLikeItem.innerText = (TRANSLATE[`feels-${languageSelect}`] + ': ' + Math.round(feelsLike));
  let windItem = document.getElementById('wind');
  windItem.innerText = (TRANSLATE[`wind-${languageSelect}`] + ': ' + wind);
  let humidityItem = document.getElementById('humidity');
  humidityItem.innerText = (TRANSLATE[`humidity-${languageSelect}`] + ': ' + humidity + '%');

  const weatherIconClassName = {
    'clear-day': 'icon wi wi-day-sunny',
    'clear-night': 'icon wi wi-night-clear',
    'rain': 'icon wi wi-rain',
    'snow': 'icon wi wi-snow',
    'sleet': 'icon wi wi-rain-wind',
    'wind': 'icon wi wi-strong-wind',
    'fog': 'icon wi wi-smog',
    'cloudy': 'icon wi wi-fw wi-cloud',
    'partly-cloudy-day': 'icon wi wi-night-partly-cloudy',
    'partly-cloudy-night': 'icon wi wi-day-cloudy',
  };

  const iconEl = document.createElement('i');
  iconEl.className = weatherIconClassName[iconWaether];
  let iconWeather = document.getElementById('iconWeather');
  iconWeather.appendChild(iconEl);

  // Three days
  //Day 1
  let optionsDay = { weekday: 'long' };
  let dateDay1 = new Date(weatherCurrent.daily.data[0].time*1000).toLocaleString(`${languageSelect}`, optionsDay);

  let temperatureDay1 = weatherCurrent.daily.data[0].temperatureHigh;
  let iconDay1 = weatherCurrent.daily.data[0].icon;

  document.getElementById('dayOfWeek1').innerText = dateDay1;
  document.getElementById('day1Temp').innerText = (Math.round(temperatureDay1) + '°');

  let iconElForDay1 = document.getElementById('characterDay1');
  const iconElDay1 = document.createElement('i');
  iconElDay1.className = weatherIconClassName[iconDay1];
  iconElForDay1.appendChild(iconElDay1);

  // Day 2
  let dateDay2 = new Date(weatherCurrent.daily.data[1].time*1000).toLocaleString(`${languageSelect}`, optionsDay);
  let temperatureDay2 = weatherCurrent.daily.data[1].temperatureHigh;

  let iconDay2 = weatherCurrent.daily.data[1].icon;

  document.getElementById('dayOfWeek2').innerText = dateDay2;
  document.getElementById('day2Temp').innerText = (Math.round(temperatureDay2) + '°');

  let iconElForDay2 = document.getElementById('characterDay2');
  const iconElDay2 = document.createElement('i');
  iconElDay2.className = weatherIconClassName[iconDay2];
  iconElForDay2.appendChild(iconElDay2);

  //Day 3
  let dateDay3 = new Date(weatherCurrent.daily.data[2].time*1000).toLocaleString(`${languageSelect}`, optionsDay);
  let temperatureDay3 = weatherCurrent.daily.data[2].temperatureHigh;
  let iconDay3 = weatherCurrent.daily.data[2].icon;

  document.getElementById('dayOfWeek3').innerText = dateDay3;
  document.getElementById('day3Temp').innerText = (Math.round(temperatureDay3) + '°');

  let iconElForDay3 = document.getElementById('characterDay3');
  const iconElDay3 = document.createElement('i');
  iconElDay3.className = weatherIconClassName[iconDay3];
  iconElForDay3.appendChild(iconElDay3);

  let latitude = weatherCurrent.latitude;
  let longitude = weatherCurrent.longitude;
  let latitudeGradus = Math.trunc(latitude);
  let latitudeMinute = Math.abs((Math.abs(latitude.toFixed(2)) - Math.abs(latitudeGradus))*0.6);
  let longitudeGradus = Math.trunc(longitude);
  let longitudeMinute = Math.abs((Math.abs(longitude.toFixed(2)) - Math.abs(longitudeGradus))*0.6);

  document.getElementById('latitude').innerText = (TRANSLATE[`latitude-${languageSelect}`] + ': ' + latitudeGradus + '°' + (latitudeMinute*100).toFixed(0) + '\'');
  document.getElementById('longitude').innerText = (TRANSLATE[`longitude-${languageSelect}`] + ': ' + longitudeGradus + '°' + (longitudeMinute*100).toFixed(0) + '\'');
  drawMap(latitude, longitude);

  let cityImage = weatherCurrent.currently.timezone;
  getLinkToImage(cityImage, iconWaether);

  if (languageSelect === 'be') {
    translateDay();
  }
}

function drawMap(lat, lng) {
  document.getElementById('map').remove();
  let mapContainet = document.getElementsByClassName('map')[0];
  let newMap = document.createElement('div');
  newMap.id = 'map';
  mapContainet.appendChild(newMap);
mapboxgl.accessToken = 'pk.eyJ1Ijoic3NoYWJla28iLCJhIjoiY2szeXhmcXc1MTRlczNkcDd2enZsNWt3aiJ9.fzCeZGVLunGlSaqKC_fRGg'

var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [`${lng}`, `${lat}`], // starting position as [lng, lat]
  zoom: 10
});
}

let microfon = document.getElementById('speach');
microfon.addEventListener("click", function(){
  speach();
});

function speach(){
  var SpeechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  SpeechRecognition.lang = "ru-RU";
    SpeechRecognition.onresult = function(event){
      document.getElementById('searchArea').value = event.results[0][0].transcript;
      document.getElementById('buttonSearch').click();
    };
 SpeechRecognition.start();
}

async function getLinkToImage(cityValue, weather) {
  const url = `https://api.unsplash.com/photos/random?query=town,${cityValue}&${weather}&client_id=d5e770de4b6ab8a47787f23a4939023d822f7d439502547c733dcfc3101d37eb`;
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => {
    let urlBackImage = data.urls.regular;
    let backWrapper = document.getElementById('wrapper');
    backWrapper.style.backgroundImage = `url(${urlBackImage})`;
    backWrapper.style.backgroundRepeat = 'no-repeat';
    backWrapper.style.backgroundSize = 'cover';

      }
    );

}



// геокодинг апи ad530f1c029347f0841cff539b6336c1
function getCoordinates(city) {
  return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=ad530f1c029347f0841cff539b6336c1&language=${languageSelect}`).then(response => response.json()).then(coords => {
    return coords;
 });
}


let buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener("click", f => {
  let cityCoordinats = getCoordinates(document.getElementById('searchArea').value);
  cityCoordinats.then( function(value) {
    let location = (value.results[0].formatted);
    let weatherLocation = document.getElementById('weather_location');
    weatherLocation.innerText = location;
    removeIcon();
    let unitsTemp = '';

    Array.from(document.getElementsByClassName('item_temp')).forEach((element) => {
      if ( document.getElementsByClassName('active')[0].textContent == 'C') {
      unitsTemp = 'si';
      } else {
        unitsTemp = '';
      }
    });
    localLat = value.results[0].geometry.lat;
     localLng = value.results[0].geometry.lng;
    init((value.results[0].geometry.lat + ',' + value.results[0].geometry.lng), unitsTemp);
  }).catch(function(e) {
    alert('Wrong location!!! Please enter the correct location.');
  });
});



function removeIcon() {
  let arrayIcon = document.getElementsByClassName('icon');;
  for(let i = arrayIcon.length - 1; i >= 0; i--){arrayIcon[i].remove();}
}

document.getElementById('searchArea').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    document.getElementById('buttonSearch').click();
  }
});

document.getElementById('reloadImage').addEventListener("click", function(){
  let city = document.getElementById('weather_location').textContent;
  let weather = document.getElementById('summary').textContent;
  getLinkToImage(city, weather);
});

// TimeZone API 2CL1OINWLDGQ

function getLocalTime(lat, lng) {
  return fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=2CL1OINWLDGQ&format=json&by=position&lat=${lat}&lng=${lng}`).then(response => response.json()).then(coords => {
    return coords;
 });
}

function translateDay() {
  let day1 = document.getElementById('dayOfWeek1');
  let day2 = document.getElementById('dayOfWeek2');
  let day3 = document.getElementById('dayOfWeek3');
  let todayDate = document.getElementById('weather_date');

  day1.innerText = TRANSLATE[day1.textContent];
  day2.innerText = TRANSLATE[day2.textContent];
  day3.innerText = TRANSLATE[day3.textContent];

  let dayArray = todayDate.textContent.split(' ');

  todayDate.innerText = `${TRANSLATE[dayArray[0]]} ${dayArray[1]} ${TRANSLATE[dayArray[2]]} ${dayArray[3]} ${dayArray[5]}`;
}




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVxdWVzdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNHO0FBQ1U7O0FBRXZDLGlDQUFHO0FBQ0gsc0NBQVE7Ozs7Ozs7Ozs7OztBQ0xSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0EsK0NBQStDLFdBQVc7QUFDMUQ7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixXQUFXO0FBQy9GLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEYsb0JBQW9CLEdBQUcsWUFBWSxTQUFTLFVBQVUsUUFBUSxlQUFlO0FBQ3ZLO0FBQ0EsTUFBTTtBQUNOOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQiw4RkFBOEYsZUFBZTs7O0FBRzdHO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDLG1CQUFtQjtBQUNuQiw4RkFBOEYsZUFBZTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWU7QUFDL0Q7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RDtBQUNBLGtEQUFrRCxlQUFlOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixvRkFBb0YsZUFBZTs7QUFFbkc7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0ZBQW9GLGVBQWU7QUFDbkc7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRixlQUFlO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXlFLGVBQWU7QUFDeEYsMkVBQTJFLGVBQWU7QUFDMUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksTUFBTSxJQUFJO0FBQzVCO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FLFVBQVUsR0FBRyxRQUFRO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0EsaUVBQWlFLEtBQUssaURBQWlELGVBQWU7QUFDdEk7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUSxNQUFNO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLDRHQUE0RyxJQUFJLE9BQU8sSUFBSTtBQUMzSDtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkIsdUJBQXVCLEdBQUcsWUFBWSxHQUFHLHVCQUF1QixHQUFHLFlBQVksR0FBRyxZQUFZO0FBQ3pIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IGJvZHlDb250ZW50ID0gYDxkaXYgaWQgPSAnd3JhcHBlcic+XHJcbiAgICA8c2VjdGlvbiBjbGFzcyA9ICdtZW51Jz5cclxuICAgICAgICA8YnV0dG9uIGlkID0gJ3JlbG9hZEltYWdlJz48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzY0LzAwMDAwMC9wcm9jZXNzLnBuZ1wiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCBpZCA9ICdzZWFyY2hBcmVhJyB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3MgPSAnYW5pbScgaWQgPSAnYnV0dG9uU2VhcmNoJz48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvNDgvMDAwMDAwL3NlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gJ2FuaW0nIGlkID0gJ3NwZWFjaCc+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzI2LzAwMDAwMC9taWNyby5wbmdcIj48L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzID0gJ3RlbXAnPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdpdGVtX3RlbXAgYWN0aXZlJz5DPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gJ2l0ZW1fdGVtcCc+RjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSAnbGFuZ3VhZ2UnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gJ2l0ZW1fbGFuZ3VhZ2UnPlJVPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSAnaXRlbV9sYW5ndWFnZSc+QkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdpdGVtX2xhbmd1YWdlIGFjdGl2ZV9sYW5nJz5FTjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3MgPSAnd2VhdGhlcl9jb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzID0gJ2N1cnJlbnRfd2VhdGhlcic+XHJcbiAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICA8cCBpZCA9ICd3ZWF0aGVyX2xvY2F0aW9uJz48L3A+XHJcbiAgICAgICAgICA8cCBpZCA9ICd3ZWF0aGVyX2RhdGUnPjwvcD5cclxuICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcyA9ICd3ZWF0aGVyX3RvZGF5Jz5cclxuICAgICAgICAgIDxkaXY+PHAgaWQgPSAndGVtcGVyYXR1cmVUb2RheSc+wrA8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzID0gJ2ljb25zVG9kYXknPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQgPSAnaWNvbldlYXRoZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9ICd0b2RheUNoYXJhY3Rlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGlkID0gJ3N1bW1hcnknPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgaWQgPSAnZmVlbExpa2UnPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgaWQgPSAnd2luZCc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBpZCA9ICdodW1pZGl0eSc+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSAnc2FtZURheVdlYXRoZXInPlxyXG4gICAgICAgICAgPGRpdiBpZCA9ICd3ZWF0aGVyRGF5MSc+XHJcbiAgICAgICAgICAgIDxwIGlkID0gJ2RheU9mV2VlazEnPjwvcD5cclxuICAgICAgICAgICAgPGRpdiBpZCA9IGNoYXJhY3RlckRheTE+XHJcbiAgICAgICAgICAgICAgPHAgaWQgPSAnZGF5MVRlbXAnPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQgPSAnd2VhdGhlckRheTInPlxyXG4gICAgICAgICAgICAgIDxwIGlkID0gJ2RheU9mV2VlazInPjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGlkID0gY2hhcmFjdGVyRGF5Mj5cclxuICAgICAgICAgICAgICAgIDxwIGlkID0gJ2RheTJUZW1wJz48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQgPSAnd2VhdGhlckRheTMnPlxyXG4gICAgICAgICAgICAgIDxwIGlkID0gJ2RheU9mV2VlazMnPjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGlkID0gY2hhcmFjdGVyRGF5Mz5cclxuICAgICAgICAgICAgICAgIDxwIGlkID0gJ2RheTNUZW1wJz48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3MgPSAnbWFwJz5cclxuICAgICAgICA8ZGl2IGlkPSdtYXAnPjwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzID0gJ2Nvb3JkaW5hdHMnIGlkID0gJ2xhdGl0dWRlJz48L3A+XHJcbiAgICAgICAgPHAgY2xhc3MgPSAnY29vcmRpbmF0cycgaWQgPSAnbG9uZ2l0dWRlJz48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+YDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5pbm5lckhUTUwgPSBib2R5Q29udGVudDtcclxuIiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuaW1wb3J0ICogYXMgcmVxdWVzdHMgZnJvbSAnLi9yZXF1ZXN0cyc7XHJcbiBcclxuZG9tXHJcbnJlcXVlc3RzIFxyXG4iLCJsZXQgbGFuZ3VhZ2VTZWxlY3QgPSAnZW4nO1xyXG5sZXQgdGVtcFNlbGVjdCA9ICdzaSc7XHJcbmxldCBsb2NhbExhdCA9IDA7XHJcbmxldCBsb2NhbExuZyA9IDA7XHJcbmxldCBjb3JyZWN0VGltZSA9IDA7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb3JyZWN0VGltZVpvbmUobGF0LCBsbmcpIHtcclxuICBsZXQgbG9jYWxUaW1lID0gYXdhaXQgZ2V0TG9jYWxUaW1lKGxhdCwgbG5nKTtcclxuIGNvcnJlY3RUaW1lID0gbG9jYWxUaW1lLmdtdE9mZnNldDtcclxufVxyXG5cclxuXHJcbmNvbnN0IFRSQU5TTEFURSA9IHtcclxuICAnbGF0aXR1ZGUtZW4nOiAnTGF0aXR1ZGUnLFxyXG4gICdsYXRpdHVkZS1ydSc6ICfQqNC40YDQvtGC0LAnLFxyXG4gICdsYXRpdHVkZS1iZSc6ICfQqNGL0YDQsNGC0LAnLFxyXG4gICdsb25naXR1ZGUtZW4nOiAnTG9uZ2l0dWRlJyxcclxuICAnbG9uZ2l0dWRlLXJ1JzogJ9CU0L7Qu9Cz0L7RgtCwJyxcclxuICAnbG9uZ2l0dWRlLWJlJzogJ9CU0LDRntCz0LDRgtCwJyxcclxuICAnZmVlbHMtZW4nOiAnRkVFTFMgTElLRScsXHJcbiAgJ2ZlZWxzLXJ1JzogJ9Ce0KnQo9Cp0JDQldCi0KHQryDQmtCQ0JonLFxyXG4gICdmZWVscy1iZSc6ICfQkNCU0KfQo9CS0JDQldCm0KbQkCDQr9CaJyxcclxuICAnd2luZC1lbic6ICdXSU5EJyxcclxuICAnd2luZC1ydSc6ICfQktCV0KLQldCgJyxcclxuICAnd2luZC1iZSc6ICfQktCV0KbQldCgJyxcclxuICAnaHVtaWRpdHktZW4nOiAnSFVNSURJVFknLFxyXG4gICdodW1pZGl0eS1ydSc6ICfQktCb0JDQltCd0J7QodCi0KwnLFxyXG4gICdodW1pZGl0eS1iZSc6ICfQkknQm9Cs0JPQntCi0J3QkNCh0KbQrCcsXHJcbiAgJ9C/0L7QvdC10LTQtdC70YzQvdC40LonOiAn0J/QkNCd0K/QlNCX0JXQm9CQ0JonLFxyXG4gICfQstGC0L7RgNC90LjQuic6ICfQkNCO0KLQntCg0JDQmicsXHJcbiAgJ9GB0YDQtdC00LAnOiAn0KHQldCg0JDQlNCQJyxcclxuICAn0YfQtdGC0LLQtdGA0LMnOiAn0KfQkNCm0KzQktCV0KDQkycsXHJcbiAgJ9C/0Y/RgtC90LjRhtCwJzogJ9Cf0K/QotCdSdCm0JAnLFxyXG4gICfRgdGD0LHQsdC+0YLQsCc6ICfQodCr0JHQntCi0JAnLFxyXG4gICfQstC+0YHQutGA0LXRgdC10L3RjNC1JzogJ9Cd0K/QlNCX0JXQm9CvJyxcclxuICAn0L/QvSwnOiAn0L/QsNC9LCcsXHJcbiAgJ9Cy0YIsJzogJ9Cw0Z7RgiwnLFxyXG4gICfRgdGALCc6ICfRgdC10YAsJyxcclxuICAn0YfRgiwnOiAn0YfQsNGGLCcsXHJcbiAgJ9C/0YIsJzogJ9C/0Y/RgiwnLFxyXG4gICfRgdCxLCc6ICfRgdGL0LEsJyxcclxuICAn0Y/QvdCy0LDRgNGPJzogJ9GB0YLRg9C00LfQtdC90Y8nLFxyXG4gICfRhNC10LLRgNCw0LvRjyc6ICfQu9GO0YLQsNCz0LAnLFxyXG4gICfQvNCw0YDRgtCwJzogJ9GB0LDQutCw0LJp0LrQsCcsXHJcbiAgJ9Cw0L/RgNC10LvRjyc6ICfQutGA0LDRgdCw0LJp0LrQsCcsXHJcbiAgJ9C80LDRjyc6ICfQvNCw0Y8nLFxyXG4gICfQuNGO0L3Rjyc6ICfRh9GN0YDQstC10L3RjycsXHJcbiAgJ9C40Y7Qu9GPJzogJ9C7adC/0LXQvdGPJyxcclxuICAn0LDQstCz0YPRgdGC0LAnOiAn0LbQvWnQstC10L3RjycsXHJcbiAgJ9GB0LXQvdGC0Y/QsdGA0Y8nOiAn0LLQtdGA0LDRgdC10L3RjycsXHJcbiAgJ9C+0LrRgtGP0LHRgNGPJzogJ9C60LDRgdGC0YDRi9GH0L1p0LrQsCcsXHJcbiAgJ9C90L7Rj9Cx0YDRjyc6ICfQu2nRgdGC0LDQv9Cw0LTQsCcsXHJcbiAgJ9C00LXQutCw0LHRgNGPJzogJ9GB0L3QtdC20L3RjycsXHJcbiAgJ9Cf0JDQndCv0JTQl9CV0JvQkNCaJzogJ9Cf0JDQndCv0JTQl9CV0JvQkNCaJyxcclxuICAn0JDQjtCi0J7QoNCQ0JonOiAn0JDQjtCi0J7QoNCQ0JonLFxyXG4gICfQodCV0KDQkNCU0JAnOiAn0KHQldCg0JDQlNCQJyxcclxuICAn0KfQkNCm0KzQktCV0KDQkyc6ICfQp9CQ0KbQrNCS0JXQoNCTJyxcclxuICAn0J/Qr9Ci0J1J0KbQkCc6ICfQn9Cv0KLQnUnQptCQJyxcclxuICAn0KHQq9CR0J7QotCQJzogJ9Ch0KvQkdCe0KLQkCcsXHJcbiAgJ9Cd0K/QlNCX0JXQm9CvJzogJ9Cd0K/QlNCX0JXQm9CvJyxcclxufTtcclxuXHJcbkFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbV90ZW1wJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgbGV0IGNpdHlDb29yZGluYXRzID0gZ2V0Q29vcmRpbmF0ZXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfbG9jYXRpb24nKS50ZXh0Q29udGVudCk7XHJcbiAgICBjaXR5Q29vcmRpbmF0cy50aGVuKCBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICBsZXQgbG9jYXRpb24gPSAodmFsdWUucmVzdWx0c1swXS5mb3JtYXR0ZWQpO1xyXG4gICAgICBsZXQgd2VhdGhlckxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfbG9jYXRpb24nKTtcclxuICAgICAgd2VhdGhlckxvY2F0aW9uLmlubmVyVGV4dCA9IGxvY2F0aW9uO1xyXG4gICAgICByZW1vdmVJY29uKCk7XHJcbiAgICAgIGxldCB1bml0c1RlbXAgPSAnJztcclxuXHJcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbV90ZW1wJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdLnRleHRDb250ZW50ID09ICdDJykge1xyXG4gICAgICAgIHVuaXRzVGVtcCA9ICdzaSc7XHJcbiAgICAgICAgdGVtcFNlbGVjdCA9ICdzaSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVuaXRzVGVtcCA9ICcnO1xyXG4gICAgICAgICAgdGVtcFNlbGVjdCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGxvY2FsTGF0ID0gdmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sYXQ7XHJcbiAgICAgbG9jYWxMbmcgPSB2YWx1ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxuZztcclxuICAgICAgaW5pdCgodmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sYXQgKyAnLCcgKyB2YWx1ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxuZyksIHVuaXRzVGVtcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy9tZW51IGxhbmd1YWdlXHJcbkFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbV9sYW5ndWFnZScpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZV9sYW5nJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2xhbmcnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2xhbmcnKTtcclxuICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09ICdSVScpe1xyXG4gICAgICBsYW5ndWFnZVNlbGVjdCA9ICdydSc7XHJcbiAgICAgIHJlbW92ZUljb24oKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvblNlYXJjaCcpLmNsaWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT0gJ0JFJykge1xyXG4gICAgICBsYW5ndWFnZVNlbGVjdCA9ICdiZSc7XHJcbiAgICAgIHJlbW92ZUljb24oKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvblNlYXJjaCcpLmNsaWNrKCk7XHJcbiAgICB9IGVsc2UgIHtcclxuICAgICAgbGFuZ3VhZ2VTZWxlY3QgPSAnZW4nO1xyXG4gICAgICByZW1vdmVJY29uKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25TZWFyY2gnKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcclxuICBjb25zdCBBUElfSVBJTkZPID0gJzI4NTJlZTQwMzA3YTkzJztcclxuICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vaXBpbmZvLmlvL2pzb24/dG9rZW49JHtBUElfSVBJTkZPfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KTtcclxufVxyXG5cclxuIGFzeW5jIGZ1bmN0aW9uIHRlbXAoKSB7XHJcbiAgIGxldCBsb2NhdGlvbklQID0gYXdhaXQgZ2V0UG9zaXRpb24oKTtcclxuICAgbGV0IGNpdHlDb29yZGluYXRzID0gZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb25JUC5jaXR5KTs7XHJcbiAgIGNpdHlDb29yZGluYXRzLnRoZW4oIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgbGV0IGxvY2F0aW9uID0gdmFsdWUucmVzdWx0c1swXS5mb3JtYXR0ZWQ7XHJcbiAgICAgbGV0IHdlYXRoZXJMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2xvY2F0aW9uJyk7XHJcbiAgICAgd2VhdGhlckxvY2F0aW9uLmlubmVyVGV4dCA9IGxvY2F0aW9uO1xyXG4gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hBcmVhJykudmFsdWUgPSBsb2NhdGlvbjtcclxuICAgICBsb2NhbExhdCA9IHZhbHVlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubGF0O1xyXG4gICAgIGxvY2FsTG5nID0gdmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sbmc7XHJcbiAgICAgY29ycmVjdFRpbWVab25lKGxvY2FsTGF0LCBsb2NhbExuZyk7XHJcbiAgICAgaW5pdCgodmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sYXQgKyAnLCcgKyB2YWx1ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxuZyksIGAke3RlbXBTZWxlY3R9YCk7XHJcbiAgIH0pO1xyXG4gfVxyXG4gdGVtcCgpO1xyXG5cclxuLy8gaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXHJcblxyXG5mdW5jdGlvbiBnZXRXZWF0aGVyKGNvb3JkaW5hdGVzLCB1bml0c1RlbXApIHtcclxuICAgICBjb25zdCBTRUNSRVRfS0VZX0RBUktfU0tZID0gJ2QzODNmZTRjMjhhNDNjYWY0ZTU4ZDdiODhjM2JjZjVhJztcclxuICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vYXBpLmRhcmtza3kubmV0L2ZvcmVjYXN0LyR7U0VDUkVUX0tFWV9EQVJLX1NLWX0vJHtjb29yZGluYXRlc30/dW5pdHM9JHt1bml0c1RlbXB9Jmxhbmc9JHtsYW5ndWFnZVNlbGVjdH1gKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbih3ZWF0aGVyID0+IHtcclxuICAgICAgICByZXR1cm4gd2VhdGhlcjtcclxuICAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0KGluaXRDaXR5LCB1bml0c1RlbXApIHtcclxuICBsZXQgd2VhdGhlckN1cnJlbnQgPSBhd2FpdCBnZXRXZWF0aGVyKGluaXRDaXR5LCB1bml0c1RlbXApO1xyXG4gIGxldCBsb2NhbFRpbWUgPSBhd2FpdCBnZXRMb2NhbFRpbWUobG9jYWxMYXQsIGxvY2FsTG5nKTtcclxuICAgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYyd9O1xyXG4gICAgbGV0IGRhdGVXZWF0aGVyID0gbmV3IERhdGUobG9jYWxUaW1lLnRpbWVzdGFtcCoxMDAwIC0gY29ycmVjdFRpbWUqMTAwMCkudG9Mb2NhbGVTdHJpbmcoYCR7bGFuZ3VhZ2VTZWxlY3R9YCwgb3B0aW9ucyk7XHJcbiAgIFxyXG5cclxuICAgIGxldCB3ZWF0aGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2RhdGUnKTtcclxuICAgIHdlYXRoZXJEYXRlLmlubmVyVGV4dCA9IGRhdGVXZWF0aGVyO1xyXG5cclxuICBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiBmKCl7ICBsZXQgbG9jYWxUaW1lID0gYXdhaXQgZ2V0TG9jYWxUaW1lKGxvY2FsTGF0LCBsb2NhbExuZyk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHsgd2Vla2RheTogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJ307XHJcbiAgICBsZXQgZGF0ZVdlYXRoZXIgPSBuZXcgRGF0ZShsb2NhbFRpbWUudGltZXN0YW1wKjEwMDAgLSBjb3JyZWN0VGltZSoxMDAwKS50b0xvY2FsZVN0cmluZyhgJHtsYW5ndWFnZVNlbGVjdH1gLCBvcHRpb25zKTtcclxuICAgIGxldCB3ZWF0aGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2RhdGUnKTtcclxuICAgIHdlYXRoZXJEYXRlLmlubmVyVGV4dCA9IGRhdGVXZWF0aGVyO1xyXG4gICAgaWYgKGxhbmd1YWdlU2VsZWN0ID09PSAnYmUnKSB7XHJcbiAgICAgIHRyYW5zbGF0ZURheSgpO1xyXG4gICAgfVxyXG4gIH0sNjIwMDApO1xyXG5cclxuXHJcbiAgbGV0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IHdlYXRoZXJDdXJyZW50LmN1cnJlbnRseS50ZW1wZXJhdHVyZTtcclxuICBsZXQgZGVzY3JpcHRpb25XZWF0aGVyID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5LnN1bW1hcnk7XHJcbiAgbGV0IGZlZWxzTGlrZSA9IHdlYXRoZXJDdXJyZW50LmN1cnJlbnRseS5hcHBhcmVudFRlbXBlcmF0dXJlO1xyXG4gIGxldCB3aW5kID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5LndpbmRTcGVlZDtcclxuICBsZXQgaHVtaWRpdHkgPSB3ZWF0aGVyQ3VycmVudC5jdXJyZW50bHkuaHVtaWRpdHkgKiAxMDA7XHJcbiAgbGV0IGljb25XYWV0aGVyID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5Lmljb247XHJcblxyXG5cclxuICBsZXQgd2VhdGhlclRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlVG9kYXknKTtcclxuICB3ZWF0aGVyVG9kYXkuaW5uZXJUZXh0ID0gKE1hdGgucm91bmQoY3VycmVudFRlbXBlcmF0dXJlKSArICfCsCcpO1xyXG4gIGxldCBzdW1tYXJ5SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1tYXJ5Jyk7XHJcbiAgc3VtbWFyeUl0ZW0uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25XZWF0aGVyO1xyXG4gIGxldCBmZWVsc0xpa2VJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxMaWtlJyk7XHJcbiAgZmVlbHNMaWtlSXRlbS5pbm5lclRleHQgPSAoVFJBTlNMQVRFW2BmZWVscy0ke2xhbmd1YWdlU2VsZWN0fWBdICsgJzogJyArIE1hdGgucm91bmQoZmVlbHNMaWtlKSk7XHJcbiAgbGV0IHdpbmRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcclxuICB3aW5kSXRlbS5pbm5lclRleHQgPSAoVFJBTlNMQVRFW2B3aW5kLSR7bGFuZ3VhZ2VTZWxlY3R9YF0gKyAnOiAnICsgd2luZCk7XHJcbiAgbGV0IGh1bWlkaXR5SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xyXG4gIGh1bWlkaXR5SXRlbS5pbm5lclRleHQgPSAoVFJBTlNMQVRFW2BodW1pZGl0eS0ke2xhbmd1YWdlU2VsZWN0fWBdICsgJzogJyArIGh1bWlkaXR5ICsgJyUnKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb25DbGFzc05hbWUgPSB7XHJcbiAgICAnY2xlYXItZGF5JzogJ2ljb24gd2kgd2ktZGF5LXN1bm55JyxcclxuICAgICdjbGVhci1uaWdodCc6ICdpY29uIHdpIHdpLW5pZ2h0LWNsZWFyJyxcclxuICAgICdyYWluJzogJ2ljb24gd2kgd2ktcmFpbicsXHJcbiAgICAnc25vdyc6ICdpY29uIHdpIHdpLXNub3cnLFxyXG4gICAgJ3NsZWV0JzogJ2ljb24gd2kgd2ktcmFpbi13aW5kJyxcclxuICAgICd3aW5kJzogJ2ljb24gd2kgd2ktc3Ryb25nLXdpbmQnLFxyXG4gICAgJ2ZvZyc6ICdpY29uIHdpIHdpLXNtb2cnLFxyXG4gICAgJ2Nsb3VkeSc6ICdpY29uIHdpIHdpLWZ3IHdpLWNsb3VkJyxcclxuICAgICdwYXJ0bHktY2xvdWR5LWRheSc6ICdpY29uIHdpIHdpLW5pZ2h0LXBhcnRseS1jbG91ZHknLFxyXG4gICAgJ3BhcnRseS1jbG91ZHktbmlnaHQnOiAnaWNvbiB3aSB3aS1kYXktY2xvdWR5JyxcclxuICB9O1xyXG5cclxuICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbkVsLmNsYXNzTmFtZSA9IHdlYXRoZXJJY29uQ2xhc3NOYW1lW2ljb25XYWV0aGVyXTtcclxuICBsZXQgaWNvbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbldlYXRoZXInKTtcclxuICBpY29uV2VhdGhlci5hcHBlbmRDaGlsZChpY29uRWwpO1xyXG5cclxuICAvLyBUaHJlZSBkYXlzXHJcbiAgLy9EYXkgMVxyXG4gIGxldCBvcHRpb25zRGF5ID0geyB3ZWVrZGF5OiAnbG9uZycgfTtcclxuICBsZXQgZGF0ZURheTEgPSBuZXcgRGF0ZSh3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzBdLnRpbWUqMTAwMCkudG9Mb2NhbGVTdHJpbmcoYCR7bGFuZ3VhZ2VTZWxlY3R9YCwgb3B0aW9uc0RheSk7XHJcblxyXG4gIGxldCB0ZW1wZXJhdHVyZURheTEgPSB3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzBdLnRlbXBlcmF0dXJlSGlnaDtcclxuICBsZXQgaWNvbkRheTEgPSB3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzBdLmljb247XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlPZldlZWsxJykuaW5uZXJUZXh0ID0gZGF0ZURheTE7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheTFUZW1wJykuaW5uZXJUZXh0ID0gKE1hdGgucm91bmQodGVtcGVyYXR1cmVEYXkxKSArICfCsCcpO1xyXG5cclxuICBsZXQgaWNvbkVsRm9yRGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFyYWN0ZXJEYXkxJyk7XHJcbiAgY29uc3QgaWNvbkVsRGF5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBpY29uRWxEYXkxLmNsYXNzTmFtZSA9IHdlYXRoZXJJY29uQ2xhc3NOYW1lW2ljb25EYXkxXTtcclxuICBpY29uRWxGb3JEYXkxLmFwcGVuZENoaWxkKGljb25FbERheTEpO1xyXG5cclxuICAvLyBEYXkgMlxyXG4gIGxldCBkYXRlRGF5MiA9IG5ldyBEYXRlKHdlYXRoZXJDdXJyZW50LmRhaWx5LmRhdGFbMV0udGltZSoxMDAwKS50b0xvY2FsZVN0cmluZyhgJHtsYW5ndWFnZVNlbGVjdH1gLCBvcHRpb25zRGF5KTtcclxuICBsZXQgdGVtcGVyYXR1cmVEYXkyID0gd2VhdGhlckN1cnJlbnQuZGFpbHkuZGF0YVsxXS50ZW1wZXJhdHVyZUhpZ2g7XHJcblxyXG4gIGxldCBpY29uRGF5MiA9IHdlYXRoZXJDdXJyZW50LmRhaWx5LmRhdGFbMV0uaWNvbjtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheU9mV2VlazInKS5pbm5lclRleHQgPSBkYXRlRGF5MjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5MlRlbXAnKS5pbm5lclRleHQgPSAoTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZURheTIpICsgJ8KwJyk7XHJcblxyXG4gIGxldCBpY29uRWxGb3JEYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJhY3RlckRheTInKTtcclxuICBjb25zdCBpY29uRWxEYXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb25FbERheTIuY2xhc3NOYW1lID0gd2VhdGhlckljb25DbGFzc05hbWVbaWNvbkRheTJdO1xyXG4gIGljb25FbEZvckRheTIuYXBwZW5kQ2hpbGQoaWNvbkVsRGF5Mik7XHJcblxyXG4gIC8vRGF5IDNcclxuICBsZXQgZGF0ZURheTMgPSBuZXcgRGF0ZSh3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzJdLnRpbWUqMTAwMCkudG9Mb2NhbGVTdHJpbmcoYCR7bGFuZ3VhZ2VTZWxlY3R9YCwgb3B0aW9uc0RheSk7XHJcbiAgbGV0IHRlbXBlcmF0dXJlRGF5MyA9IHdlYXRoZXJDdXJyZW50LmRhaWx5LmRhdGFbMl0udGVtcGVyYXR1cmVIaWdoO1xyXG4gIGxldCBpY29uRGF5MyA9IHdlYXRoZXJDdXJyZW50LmRhaWx5LmRhdGFbMl0uaWNvbjtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheU9mV2VlazMnKS5pbm5lclRleHQgPSBkYXRlRGF5MztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5M1RlbXAnKS5pbm5lclRleHQgPSAoTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZURheTMpICsgJ8KwJyk7XHJcblxyXG4gIGxldCBpY29uRWxGb3JEYXkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJhY3RlckRheTMnKTtcclxuICBjb25zdCBpY29uRWxEYXkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb25FbERheTMuY2xhc3NOYW1lID0gd2VhdGhlckljb25DbGFzc05hbWVbaWNvbkRheTNdO1xyXG4gIGljb25FbEZvckRheTMuYXBwZW5kQ2hpbGQoaWNvbkVsRGF5Myk7XHJcblxyXG4gIGxldCBsYXRpdHVkZSA9IHdlYXRoZXJDdXJyZW50LmxhdGl0dWRlO1xyXG4gIGxldCBsb25naXR1ZGUgPSB3ZWF0aGVyQ3VycmVudC5sb25naXR1ZGU7XHJcbiAgbGV0IGxhdGl0dWRlR3JhZHVzID0gTWF0aC50cnVuYyhsYXRpdHVkZSk7XHJcbiAgbGV0IGxhdGl0dWRlTWludXRlID0gTWF0aC5hYnMoKE1hdGguYWJzKGxhdGl0dWRlLnRvRml4ZWQoMikpIC0gTWF0aC5hYnMobGF0aXR1ZGVHcmFkdXMpKSowLjYpO1xyXG4gIGxldCBsb25naXR1ZGVHcmFkdXMgPSBNYXRoLnRydW5jKGxvbmdpdHVkZSk7XHJcbiAgbGV0IGxvbmdpdHVkZU1pbnV0ZSA9IE1hdGguYWJzKChNYXRoLmFicyhsb25naXR1ZGUudG9GaXhlZCgyKSkgLSBNYXRoLmFicyhsb25naXR1ZGVHcmFkdXMpKSowLjYpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0aXR1ZGUnKS5pbm5lclRleHQgPSAoVFJBTlNMQVRFW2BsYXRpdHVkZS0ke2xhbmd1YWdlU2VsZWN0fWBdICsgJzogJyArIGxhdGl0dWRlR3JhZHVzICsgJ8KwJyArIChsYXRpdHVkZU1pbnV0ZSoxMDApLnRvRml4ZWQoMCkgKyAnXFwnJyk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvbmdpdHVkZScpLmlubmVyVGV4dCA9IChUUkFOU0xBVEVbYGxvbmdpdHVkZS0ke2xhbmd1YWdlU2VsZWN0fWBdICsgJzogJyArIGxvbmdpdHVkZUdyYWR1cyArICfCsCcgKyAobG9uZ2l0dWRlTWludXRlKjEwMCkudG9GaXhlZCgwKSArICdcXCcnKTtcclxuICBkcmF3TWFwKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xyXG5cclxuICBsZXQgY2l0eUltYWdlID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5LnRpbWV6b25lO1xyXG4gIGdldExpbmtUb0ltYWdlKGNpdHlJbWFnZSwgaWNvbldhZXRoZXIpO1xyXG5cclxuICBpZiAobGFuZ3VhZ2VTZWxlY3QgPT09ICdiZScpIHtcclxuICAgIHRyYW5zbGF0ZURheSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd01hcChsYXQsIGxuZykge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKS5yZW1vdmUoKTtcclxuICBsZXQgbWFwQ29udGFpbmV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFwJylbMF07XHJcbiAgbGV0IG5ld01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld01hcC5pZCA9ICdtYXAnO1xyXG4gIG1hcENvbnRhaW5ldC5hcHBlbmRDaGlsZChuZXdNYXApO1xyXG5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaWMzTm9ZV0psYTI4aUxDSmhJam9pWTJzemVYaG1jWGMxTVRSbGN6TmtjRGQyZW5ac05XdDNhaUo5LmZ6Q2VaR1ZMdW5HbFNhcUtDX2ZSR2cnXHJcblxyXG52YXIgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgY29udGFpbmVyOiAnbWFwJywgLy8gSFRNTCBjb250YWluZXIgaWRcclxuICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OScsIC8vIHN0eWxlIFVSTFxyXG4gIGNlbnRlcjogW2Ake2xuZ31gLCBgJHtsYXR9YF0sIC8vIHN0YXJ0aW5nIHBvc2l0aW9uIGFzIFtsbmcsIGxhdF1cclxuICB6b29tOiAxMFxyXG59KTtcclxufVxyXG5cclxubGV0IG1pY3JvZm9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWFjaCcpO1xyXG5taWNyb2Zvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICBzcGVhY2goKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzcGVhY2goKXtcclxuICB2YXIgU3BlZWNoUmVjb2duaXRpb24gPSBuZXcgKHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb24gfHwgd2luZG93Lm1velNwZWVjaFJlY29nbml0aW9uIHx8IHdpbmRvdy5tc1NwZWVjaFJlY29nbml0aW9uKSgpO1xyXG4gIFNwZWVjaFJlY29nbml0aW9uLmxhbmcgPSBcInJ1LVJVXCI7XHJcbiAgICBTcGVlY2hSZWNvZ25pdGlvbi5vbnJlc3VsdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEFyZWEnKS52YWx1ZSA9IGV2ZW50LnJlc3VsdHNbMF1bMF0udHJhbnNjcmlwdDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvblNlYXJjaCcpLmNsaWNrKCk7XHJcbiAgICB9O1xyXG4gU3BlZWNoUmVjb2duaXRpb24uc3RhcnQoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TGlua1RvSW1hZ2UoY2l0eVZhbHVlLCB3ZWF0aGVyKSB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP3F1ZXJ5PXRvd24sJHtjaXR5VmFsdWV9JiR7d2VhdGhlcn0mY2xpZW50X2lkPWQ1ZTc3MGRlNGI2YWI4YTQ3Nzg3ZjIzYTQ5MzkwMjNkODIyZjdkNDM5NTAyNTQ3YzczM2RjZmMzMTAxZDM3ZWJgO1xyXG4gIGNvbnN0IHByb21pc2UgPSBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBsZXQgdXJsQmFja0ltYWdlID0gZGF0YS51cmxzLnJlZ3VsYXI7XHJcbiAgICBsZXQgYmFja1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG4gICAgYmFja1dyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybEJhY2tJbWFnZX0pYDtcclxuICAgIGJhY2tXcmFwcGVyLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcclxuICAgIGJhY2tXcmFwcGVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vINCz0LXQvtC60L7QtNC40L3QsyDQsNC/0LggYWQ1MzBmMWMwMjkzNDdmMDg0MWNmZjUzOWI2MzM2YzFcclxuZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSkge1xyXG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbmNhZ2VkYXRhLmNvbS9nZW9jb2RlL3YxL2pzb24/cT0ke2NpdHl9JmtleT1hZDUzMGYxYzAyOTM0N2YwODQxY2ZmNTM5YjYzMzZjMSZsYW5ndWFnZT0ke2xhbmd1YWdlU2VsZWN0fWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGNvb3JkcyA9PiB7XHJcbiAgICByZXR1cm4gY29vcmRzO1xyXG4gfSk7XHJcbn1cclxuXHJcblxyXG5sZXQgYnV0dG9uU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvblNlYXJjaCcpO1xyXG5idXR0b25TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGYgPT4ge1xyXG4gIGxldCBjaXR5Q29vcmRpbmF0cyA9IGdldENvb3JkaW5hdGVzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hBcmVhJykudmFsdWUpO1xyXG4gIGNpdHlDb29yZGluYXRzLnRoZW4oIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBsZXQgbG9jYXRpb24gPSAodmFsdWUucmVzdWx0c1swXS5mb3JtYXR0ZWQpO1xyXG4gICAgbGV0IHdlYXRoZXJMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2xvY2F0aW9uJyk7XHJcbiAgICB3ZWF0aGVyTG9jYXRpb24uaW5uZXJUZXh0ID0gbG9jYXRpb247XHJcbiAgICByZW1vdmVJY29uKCk7XHJcbiAgICBsZXQgdW5pdHNUZW1wID0gJyc7XHJcblxyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtX3RlbXAnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdLnRleHRDb250ZW50ID09ICdDJykge1xyXG4gICAgICB1bml0c1RlbXAgPSAnc2knO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVuaXRzVGVtcCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvY2FsTGF0ID0gdmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sYXQ7XHJcbiAgICAgbG9jYWxMbmcgPSB2YWx1ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxuZztcclxuICAgIGluaXQoKHZhbHVlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubGF0ICsgJywnICsgdmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sbmcpLCB1bml0c1RlbXApO1xyXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcclxuICAgIGFsZXJ0KCdXcm9uZyBsb2NhdGlvbiEhISBQbGVhc2UgZW50ZXIgdGhlIGNvcnJlY3QgbG9jYXRpb24uJyk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVJY29uKCkge1xyXG4gIGxldCBhcnJheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpY29uJyk7O1xyXG4gIGZvcihsZXQgaSA9IGFycmF5SWNvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7YXJyYXlJY29uW2ldLnJlbW92ZSgpO31cclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEFyZWEnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xyXG4gIGlmIChrZXkgPT09IDEzKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uU2VhcmNoJykuY2xpY2soKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbG9hZEltYWdlJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgbGV0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9sb2NhdGlvbicpLnRleHRDb250ZW50O1xyXG4gIGxldCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS50ZXh0Q29udGVudDtcclxuICBnZXRMaW5rVG9JbWFnZShjaXR5LCB3ZWF0aGVyKTtcclxufSk7XHJcblxyXG4vLyBUaW1lWm9uZSBBUEkgMkNMMU9JTldMREdRXHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhbFRpbWUobGF0LCBsbmcpIHtcclxuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9hcGkudGltZXpvbmVkYi5jb20vdjIuMS9nZXQtdGltZS16b25lP2tleT0yQ0wxT0lOV0xER1EmZm9ybWF0PWpzb24mYnk9cG9zaXRpb24mbGF0PSR7bGF0fSZsbmc9JHtsbmd9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oY29vcmRzID0+IHtcclxuICAgIHJldHVybiBjb29yZHM7XHJcbiB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlRGF5KCkge1xyXG4gIGxldCBkYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheU9mV2VlazEnKTtcclxuICBsZXQgZGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlPZldlZWsyJyk7XHJcbiAgbGV0IGRheTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5T2ZXZWVrMycpO1xyXG4gIGxldCB0b2RheURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9kYXRlJyk7XHJcblxyXG4gIGRheTEuaW5uZXJUZXh0ID0gVFJBTlNMQVRFW2RheTEudGV4dENvbnRlbnRdO1xyXG4gIGRheTIuaW5uZXJUZXh0ID0gVFJBTlNMQVRFW2RheTIudGV4dENvbnRlbnRdO1xyXG4gIGRheTMuaW5uZXJUZXh0ID0gVFJBTlNMQVRFW2RheTMudGV4dENvbnRlbnRdO1xyXG5cclxuICBsZXQgZGF5QXJyYXkgPSB0b2RheURhdGUudGV4dENvbnRlbnQuc3BsaXQoJyAnKTtcclxuXHJcbiAgdG9kYXlEYXRlLmlubmVyVGV4dCA9IGAke1RSQU5TTEFURVtkYXlBcnJheVswXV19ICR7ZGF5QXJyYXlbMV19ICR7VFJBTlNMQVRFW2RheUFycmF5WzJdXX0gJHtkYXlBcnJheVszXX0gJHtkYXlBcnJheVs1XX1gO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==