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
      temp();
    } else if (element.textContent == 'BE') {
      languageSelect = 'be';
      removeIcon();
      temp();
    } else  {
      languageSelect = 'en';
      removeIcon();
      temp();
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
  
  
  let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  let dateWeather = new Date(weatherCurrent.currently.time*1000).toLocaleString(`${languageSelect}`, options);
  let currentTemperature = weatherCurrent.currently.temperature; 
  let descriptionWeather = weatherCurrent.currently.summary; 
  let feelsLike = weatherCurrent.currently.apparentTemperature;  
  let wind = weatherCurrent.currently.windSpeed;
  let humidity = weatherCurrent.currently.humidity * 100;
  let iconWaether = weatherCurrent.currently.icon;

  let weatherDate = document.getElementById('weather_date');
  weatherDate.innerText = dateWeather;
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

  
  document.getElementById('latitude').innerText = (TRANSLATE[`latitude-${languageSelect}`] + ': ' + latitude.toFixed(2));
  document.getElementById('longitude').innerText = (TRANSLATE[`longitude-${languageSelect}`] + ': ' + longitude.toFixed(2));
  drawMap(latitude, longitude);

  let cityImage = weatherCurrent.currently.timezone;
  getLinkToImage(cityImage, iconWaether);
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
    init((value.results[0].geometry.lat + ',' + value.results[0].geometry.lng), unitsTemp);
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




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVxdWVzdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRyxFO0FBQ0gsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUSxNQUFNO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxtQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBib2R5Q29udGVudCA9IGA8ZGl2IGlkID0gJ3dyYXBwZXInPlxyXG48c2VjdGlvbiBjbGFzcyA9ICdtZW51Jz5cclxuICAgIDxidXR0b24gaWQgPSAncmVsb2FkSW1hZ2UnPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNjQvMDAwMDAwL3Byb2Nlc3MucG5nXCI+PC9idXR0b24+XHJcbiAgICA8aW5wdXQgaWQgPSAnc2VhcmNoQXJlYScgdHlwZT1cInRleHRcIj5cclxuICAgIDxidXR0b24gY2xhc3MgPSAnYW5pbScgaWQgPSAnYnV0dG9uU2VhcmNoJz48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvNDgvMDAwMDAwL3NlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIj48L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3MgPSAnYW5pbScgaWQgPSAnc3BlYWNoJz48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMjYvMDAwMDAwL21pY3JvLnBuZ1wiPjwvYnV0dG9uPlxyXG4gICAgPGRpdiBjbGFzcyA9ICd0ZW1wJz5cclxuICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdpdGVtX3RlbXAgYWN0aXZlJz5DPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3MgPSAnaXRlbV90ZW1wJz5GPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3MgPSAnbGFuZ3VhZ2UnPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3MgPSAnaXRlbV9sYW5ndWFnZSc+UlU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gJ2l0ZW1fbGFuZ3VhZ2UnPkJFPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdpdGVtX2xhbmd1YWdlIGFjdGl2ZV9sYW5nJz5FTjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuPHNlY3Rpb24gY2xhc3MgPSAnd2VhdGhlcl9jb250YWluZXInPlxyXG4gIDxkaXYgY2xhc3MgPSAnY3VycmVudF93ZWF0aGVyJz5cclxuICAgIDxkaXY+IFxyXG4gICAgICA8cCBpZCA9ICd3ZWF0aGVyX2xvY2F0aW9uJz48L3A+XHJcbiAgICAgIDxwIGlkID0gJ3dlYXRoZXJfZGF0ZSc+PC9wPlxyXG4gICAgPC9kaXY+ICAgICAgIFxyXG4gICAgPGRpdiBjbGFzcyA9ICd3ZWF0aGVyX3RvZGF5Jz5cclxuICAgICAgPGRpdj48cCBpZCA9ICd0ZW1wZXJhdHVyZVRvZGF5Jz7CsDwvcD48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcyA9ICdpY29uc1RvZGF5Jz5cclxuICAgICAgICAgIDxkaXYgaWQgPSAnaWNvbldlYXRoZXInPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gJ3RvZGF5Q2hhcmFjdGVyJz5cclxuICAgICAgICAgICAgICA8cCBpZCA9ICdzdW1tYXJ5Jz48L3A+XHJcbiAgICAgICAgICAgICAgPHAgaWQgPSAnZmVlbExpa2UnPjwvcD5cclxuICAgICAgICAgICAgICA8cCBpZCA9ICd3aW5kJz48L3A+XHJcbiAgICAgICAgICAgICAgPHAgaWQgPSAnaHVtaWRpdHknPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3MgPSAnc2FtZURheVdlYXRoZXInPlxyXG4gICAgICA8ZGl2IGlkID0gJ3dlYXRoZXJEYXkxJz5cclxuICAgICAgICA8cCBpZCA9ICdkYXlPZldlZWsxJz48L3A+XHJcbiAgICAgICAgPGRpdiBpZCA9IGNoYXJhY3RlckRheTE+XHJcbiAgICAgICAgICA8cCBpZCA9ICdkYXkxVGVtcCc+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZCA9ICd3ZWF0aGVyRGF5Mic+XHJcbiAgICAgICAgICA8cCBpZCA9ICdkYXlPZldlZWsyJz48L3A+XHJcbiAgICAgICAgICA8ZGl2IGlkID0gY2hhcmFjdGVyRGF5Mj5cclxuICAgICAgICAgICAgPHAgaWQgPSAnZGF5MlRlbXAnPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZCA9ICd3ZWF0aGVyRGF5Myc+XHJcbiAgICAgICAgICA8cCBpZCA9ICdkYXlPZldlZWszJz48L3A+XHJcbiAgICAgICAgICA8ZGl2IGlkID0gY2hhcmFjdGVyRGF5Mz5cclxuICAgICAgICAgICAgPHAgaWQgPSAnZGF5M1RlbXAnPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3MgPSAnbWFwJz5cclxuICAgIDxkaXYgaWQ9J21hcCc+PC9kaXY+XHJcbiAgICA8cCBjbGFzcyA9ICdjb29yZGluYXRzJyBpZCA9ICdsYXRpdHVkZSc+PC9wPlxyXG4gICAgPHAgY2xhc3MgPSAnY29vcmRpbmF0cycgaWQgPSAnbG9uZ2l0dWRlJz48L3A+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuPC9kaXY+YDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5pbm5lckhUTUwgPSBib2R5Q29udGVudDtcclxuIiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuaW1wb3J0ICogYXMgcmVxdWVzdHMgZnJvbSAnLi9yZXF1ZXN0cyc7XHJcbiBcclxuZG9tXHJcbnJlcXVlc3RzIFxyXG4iLCJsZXQgbGFuZ3VhZ2VTZWxlY3QgPSAnZW4nO1xyXG5sZXQgdGVtcFNlbGVjdCA9ICdzaSc7XHJcblxyXG5jb25zdCBUUkFOU0xBVEUgPSB7XHJcbiAgJ2xhdGl0dWRlLWVuJzogJ0xhdGl0dWRlJyxcclxuICAnbGF0aXR1ZGUtcnUnOiAn0KjQuNGA0L7RgtCwJyxcclxuICAnbGF0aXR1ZGUtYmUnOiAn0KjRi9GA0LDRgtCwJyxcclxuICAnbG9uZ2l0dWRlLWVuJzogJ0xvbmdpdHVkZScsXHJcbiAgJ2xvbmdpdHVkZS1ydSc6ICfQlNC+0LvQs9C+0YLQsCcsXHJcbiAgJ2xvbmdpdHVkZS1iZSc6ICfQlNCw0Z7Qs9Cw0YLQsCcsXHJcbiAgJ2ZlZWxzLWVuJzogJ0ZFRUxTIExJS0UnLFxyXG4gICdmZWVscy1ydSc6ICfQntCp0KPQqdCQ0JXQotCh0K8g0JrQkNCaJyxcclxuICAnZmVlbHMtYmUnOiAn0JDQlNCn0KPQktCQ0JXQptCm0JAg0K/QmicsXHJcbiAgJ3dpbmQtZW4nOiAnV0lORCcsXHJcbiAgJ3dpbmQtcnUnOiAn0JLQldCi0JXQoCcsXHJcbiAgJ3dpbmQtYmUnOiAn0JLQldCm0JXQoCcsXHJcbiAgJ2h1bWlkaXR5LWVuJzogJ0hVTUlESVRZJyxcclxuICAnaHVtaWRpdHktcnUnOiAn0JLQm9CQ0JbQndCe0KHQotCsJyxcclxuICAnaHVtaWRpdHktYmUnOiAn0JJJ0JvQrNCT0J7QotCd0JDQodCm0KwnLFxyXG59O1xyXG5cclxuQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtX3RlbXAnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBsZXQgY2l0eUNvb3JkaW5hdHMgPSBnZXRDb29yZGluYXRlcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9sb2NhdGlvbicpLnRleHRDb250ZW50KTtcclxuICAgIGNpdHlDb29yZGluYXRzLnRoZW4oIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIGxldCBsb2NhdGlvbiA9ICh2YWx1ZS5yZXN1bHRzWzBdLmZvcm1hdHRlZCk7XHJcbiAgICAgIGxldCB3ZWF0aGVyTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9sb2NhdGlvbicpO1xyXG4gICAgICB3ZWF0aGVyTG9jYXRpb24uaW5uZXJUZXh0ID0gbG9jYXRpb247XHJcbiAgICAgIHJlbW92ZUljb24oKTtcclxuICAgICAgbGV0IHVuaXRzVGVtcCA9ICcnO1xyXG4gIFxyXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1fdGVtcCcpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS50ZXh0Q29udGVudCA9PSAnQycpIHtcclxuICAgICAgICB1bml0c1RlbXAgPSAnc2knO1xyXG4gICAgICAgIHRlbXBTZWxlY3QgPSAnc2knO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1bml0c1RlbXAgPSAnJztcclxuICAgICAgICAgIHRlbXBTZWxlY3QgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpbml0KCh2YWx1ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxhdCArICcsJyArIHZhbHVlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG5nKSwgdW5pdHNUZW1wKTtcclxuICAgIH0pOyBcclxuICAgIFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vbWVudSBsYW5ndWFnZVxyXG5BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1fbGFuZ3VhZ2UnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmVfbGFuZycpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9sYW5nJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9sYW5nJyk7XHJcbiAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PSAnUlUnKXtcclxuICAgICAgbGFuZ3VhZ2VTZWxlY3QgPSAncnUnO1xyXG4gICAgICByZW1vdmVJY29uKCk7XHJcbiAgICAgIHRlbXAoKTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PSAnQkUnKSB7XHJcbiAgICAgIGxhbmd1YWdlU2VsZWN0ID0gJ2JlJztcclxuICAgICAgcmVtb3ZlSWNvbigpO1xyXG4gICAgICB0ZW1wKCk7XHJcbiAgICB9IGVsc2UgIHtcclxuICAgICAgbGFuZ3VhZ2VTZWxlY3QgPSAnZW4nO1xyXG4gICAgICByZW1vdmVJY29uKCk7XHJcbiAgICAgIHRlbXAoKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XHJcbiAgY29uc3QgQVBJX0lQSU5GTyA9ICcyODUyZWU0MDMwN2E5Myc7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL2lwaW5mby5pby9qc29uP3Rva2VuPSR7QVBJX0lQSU5GT31gKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiBhc3luYyBmdW5jdGlvbiB0ZW1wKCkge1xyXG4gICBsZXQgbG9jYXRpb25JUCA9IGF3YWl0IGdldFBvc2l0aW9uKCk7ICBcclxuICAgbGV0IGNpdHlDb29yZGluYXRzID0gZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb25JUC5jaXR5KTs7XHJcbiAgIGNpdHlDb29yZGluYXRzLnRoZW4oIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgbGV0IGxvY2F0aW9uID0gdmFsdWUucmVzdWx0c1swXS5mb3JtYXR0ZWQ7XHJcbiAgICAgbGV0IHdlYXRoZXJMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2xvY2F0aW9uJyk7XHJcbiAgICAgd2VhdGhlckxvY2F0aW9uLmlubmVyVGV4dCA9IGxvY2F0aW9uO1xyXG4gICAgIGluaXQoKHZhbHVlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubGF0ICsgJywnICsgdmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sbmcpLCBgJHt0ZW1wU2VsZWN0fWApO1xyXG4gICB9KTsgXHJcbiB9XHJcbiB0ZW1wKCk7XHJcblxyXG4vLyBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXIoY29vcmRpbmF0ZXMsIHVuaXRzVGVtcCkgeyAgXHJcbiAgICAgY29uc3QgU0VDUkVUX0tFWV9EQVJLX1NLWSA9ICdkMzgzZmU0YzI4YTQzY2FmNGU1OGQ3Yjg4YzNiY2Y1YSc7XHJcbiAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC8ke1NFQ1JFVF9LRVlfREFSS19TS1l9LyR7Y29vcmRpbmF0ZXN9P3VuaXRzPSR7dW5pdHNUZW1wfSZsYW5nPSR7bGFuZ3VhZ2VTZWxlY3R9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4od2VhdGhlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHdlYXRoZXI7XHJcbiAgICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoaW5pdENpdHksIHVuaXRzVGVtcCkge1xyXG4gIGxldCB3ZWF0aGVyQ3VycmVudCA9IGF3YWl0IGdldFdlYXRoZXIoaW5pdENpdHksIHVuaXRzVGVtcCk7XHJcbiAgXHJcbiAgXHJcbiAgbGV0IG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycgfTtcclxuICBsZXQgZGF0ZVdlYXRoZXIgPSBuZXcgRGF0ZSh3ZWF0aGVyQ3VycmVudC5jdXJyZW50bHkudGltZSoxMDAwKS50b0xvY2FsZVN0cmluZyhgJHtsYW5ndWFnZVNlbGVjdH1gLCBvcHRpb25zKTtcclxuICBsZXQgY3VycmVudFRlbXBlcmF0dXJlID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5LnRlbXBlcmF0dXJlOyBcclxuICBsZXQgZGVzY3JpcHRpb25XZWF0aGVyID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5LnN1bW1hcnk7IFxyXG4gIGxldCBmZWVsc0xpa2UgPSB3ZWF0aGVyQ3VycmVudC5jdXJyZW50bHkuYXBwYXJlbnRUZW1wZXJhdHVyZTsgIFxyXG4gIGxldCB3aW5kID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5LndpbmRTcGVlZDtcclxuICBsZXQgaHVtaWRpdHkgPSB3ZWF0aGVyQ3VycmVudC5jdXJyZW50bHkuaHVtaWRpdHkgKiAxMDA7XHJcbiAgbGV0IGljb25XYWV0aGVyID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5Lmljb247XHJcblxyXG4gIGxldCB3ZWF0aGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2RhdGUnKTtcclxuICB3ZWF0aGVyRGF0ZS5pbm5lclRleHQgPSBkYXRlV2VhdGhlcjtcclxuICBsZXQgd2VhdGhlclRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlVG9kYXknKTtcclxuICB3ZWF0aGVyVG9kYXkuaW5uZXJUZXh0ID0gKE1hdGgucm91bmQoY3VycmVudFRlbXBlcmF0dXJlKSArICfCsCcpO1xyXG4gIGxldCBzdW1tYXJ5SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1tYXJ5Jyk7XHJcbiAgc3VtbWFyeUl0ZW0uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25XZWF0aGVyO1xyXG4gIGxldCBmZWVsc0xpa2VJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxMaWtlJyk7XHJcbiAgZmVlbHNMaWtlSXRlbS5pbm5lclRleHQgPSAoVFJBTlNMQVRFW2BmZWVscy0ke2xhbmd1YWdlU2VsZWN0fWBdICsgJzogJyArIE1hdGgucm91bmQoZmVlbHNMaWtlKSk7XHJcbiAgbGV0IHdpbmRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcclxuICB3aW5kSXRlbS5pbm5lclRleHQgPSAoVFJBTlNMQVRFW2B3aW5kLSR7bGFuZ3VhZ2VTZWxlY3R9YF0gKyAnOiAnICsgd2luZCk7XHJcbiAgbGV0IGh1bWlkaXR5SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xyXG4gIGh1bWlkaXR5SXRlbS5pbm5lclRleHQgPSAoVFJBTlNMQVRFW2BodW1pZGl0eS0ke2xhbmd1YWdlU2VsZWN0fWBdICsgJzogJyArIGh1bWlkaXR5ICsgJyUnKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb25DbGFzc05hbWUgPSB7XHJcbiAgICAnY2xlYXItZGF5JzogJ2ljb24gd2kgd2ktZGF5LXN1bm55JyxcclxuICAgICdjbGVhci1uaWdodCc6ICdpY29uIHdpIHdpLW5pZ2h0LWNsZWFyJyxcclxuICAgICdyYWluJzogJ2ljb24gd2kgd2ktcmFpbicsXHJcbiAgICAnc25vdyc6ICdpY29uIHdpIHdpLXNub3cnLFxyXG4gICAgJ3NsZWV0JzogJ2ljb24gd2kgd2ktcmFpbi13aW5kJyxcclxuICAgICd3aW5kJzogJ2ljb24gd2kgd2ktc3Ryb25nLXdpbmQnLFxyXG4gICAgJ2ZvZyc6ICdpY29uIHdpIHdpLXNtb2cnLFxyXG4gICAgJ2Nsb3VkeSc6ICdpY29uIHdpIHdpLWZ3IHdpLWNsb3VkJyxcclxuICAgICdwYXJ0bHktY2xvdWR5LWRheSc6ICdpY29uIHdpIHdpLW5pZ2h0LXBhcnRseS1jbG91ZHknLFxyXG4gICAgJ3BhcnRseS1jbG91ZHktbmlnaHQnOiAnaWNvbiB3aSB3aS1kYXktY2xvdWR5JyxcclxuICB9O1xyXG5cclxuICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbkVsLmNsYXNzTmFtZSA9IHdlYXRoZXJJY29uQ2xhc3NOYW1lW2ljb25XYWV0aGVyXTtcclxuICBsZXQgaWNvbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbldlYXRoZXInKTtcclxuICBpY29uV2VhdGhlci5hcHBlbmRDaGlsZChpY29uRWwpO1xyXG5cclxuICAvLyBUaHJlZSBkYXlzXHJcbiAgLy9EYXkgMVxyXG4gIGxldCBvcHRpb25zRGF5ID0geyB3ZWVrZGF5OiAnbG9uZycgfTtcclxuICBsZXQgZGF0ZURheTEgPSBuZXcgRGF0ZSh3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzBdLnRpbWUqMTAwMCkudG9Mb2NhbGVTdHJpbmcoYCR7bGFuZ3VhZ2VTZWxlY3R9YCwgb3B0aW9uc0RheSk7XHJcblxyXG4gIGxldCB0ZW1wZXJhdHVyZURheTEgPSB3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzBdLnRlbXBlcmF0dXJlSGlnaDtcclxuICBsZXQgaWNvbkRheTEgPSB3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzBdLmljb247IFxyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5T2ZXZWVrMScpLmlubmVyVGV4dCA9IGRhdGVEYXkxO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXkxVGVtcCcpLmlubmVyVGV4dCA9IChNYXRoLnJvdW5kKHRlbXBlcmF0dXJlRGF5MSkgKyAnwrAnKTtcclxuXHJcbiAgbGV0IGljb25FbEZvckRheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcmFjdGVyRGF5MScpO1xyXG4gIGNvbnN0IGljb25FbERheTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbkVsRGF5MS5jbGFzc05hbWUgPSB3ZWF0aGVySWNvbkNsYXNzTmFtZVtpY29uRGF5MV07XHJcbiAgaWNvbkVsRm9yRGF5MS5hcHBlbmRDaGlsZChpY29uRWxEYXkxKTtcclxuXHJcbiAgLy8gRGF5IDJcclxuICBsZXQgZGF0ZURheTIgPSBuZXcgRGF0ZSh3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzFdLnRpbWUqMTAwMCkudG9Mb2NhbGVTdHJpbmcoYCR7bGFuZ3VhZ2VTZWxlY3R9YCwgb3B0aW9uc0RheSk7ICBcclxuICBsZXQgdGVtcGVyYXR1cmVEYXkyID0gd2VhdGhlckN1cnJlbnQuZGFpbHkuZGF0YVsxXS50ZW1wZXJhdHVyZUhpZ2g7ICBcclxuXHJcbiAgbGV0IGljb25EYXkyID0gd2VhdGhlckN1cnJlbnQuZGFpbHkuZGF0YVsxXS5pY29uOyAgXHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlPZldlZWsyJykuaW5uZXJUZXh0ID0gZGF0ZURheTI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheTJUZW1wJykuaW5uZXJUZXh0ID0gKE1hdGgucm91bmQodGVtcGVyYXR1cmVEYXkyKSArICfCsCcpO1xyXG5cclxuICBsZXQgaWNvbkVsRm9yRGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFyYWN0ZXJEYXkyJyk7XHJcbiAgY29uc3QgaWNvbkVsRGF5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBpY29uRWxEYXkyLmNsYXNzTmFtZSA9IHdlYXRoZXJJY29uQ2xhc3NOYW1lW2ljb25EYXkyXTtcclxuICBpY29uRWxGb3JEYXkyLmFwcGVuZENoaWxkKGljb25FbERheTIpO1xyXG5cclxuICAvL0RheSAzXHJcbiAgbGV0IGRhdGVEYXkzID0gbmV3IERhdGUod2VhdGhlckN1cnJlbnQuZGFpbHkuZGF0YVsyXS50aW1lKjEwMDApLnRvTG9jYWxlU3RyaW5nKGAke2xhbmd1YWdlU2VsZWN0fWAsIG9wdGlvbnNEYXkpOyBcclxuICBsZXQgdGVtcGVyYXR1cmVEYXkzID0gd2VhdGhlckN1cnJlbnQuZGFpbHkuZGF0YVsyXS50ZW1wZXJhdHVyZUhpZ2g7ICBcclxuICBsZXQgaWNvbkRheTMgPSB3ZWF0aGVyQ3VycmVudC5kYWlseS5kYXRhWzJdLmljb247ICBcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheU9mV2VlazMnKS5pbm5lclRleHQgPSBkYXRlRGF5MztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5M1RlbXAnKS5pbm5lclRleHQgPSAoTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZURheTMpICsgJ8KwJyk7XHJcblxyXG4gIGxldCBpY29uRWxGb3JEYXkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJhY3RlckRheTMnKTtcclxuICBjb25zdCBpY29uRWxEYXkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb25FbERheTMuY2xhc3NOYW1lID0gd2VhdGhlckljb25DbGFzc05hbWVbaWNvbkRheTNdO1xyXG4gIGljb25FbEZvckRheTMuYXBwZW5kQ2hpbGQoaWNvbkVsRGF5Myk7XHJcblxyXG4gIGxldCBsYXRpdHVkZSA9IHdlYXRoZXJDdXJyZW50LmxhdGl0dWRlO1xyXG4gIGxldCBsb25naXR1ZGUgPSB3ZWF0aGVyQ3VycmVudC5sb25naXR1ZGU7XHJcblxyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRpdHVkZScpLmlubmVyVGV4dCA9IChUUkFOU0xBVEVbYGxhdGl0dWRlLSR7bGFuZ3VhZ2VTZWxlY3R9YF0gKyAnOiAnICsgbGF0aXR1ZGUudG9GaXhlZCgyKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvbmdpdHVkZScpLmlubmVyVGV4dCA9IChUUkFOU0xBVEVbYGxvbmdpdHVkZS0ke2xhbmd1YWdlU2VsZWN0fWBdICsgJzogJyArIGxvbmdpdHVkZS50b0ZpeGVkKDIpKTtcclxuICBkcmF3TWFwKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xyXG5cclxuICBsZXQgY2l0eUltYWdlID0gd2VhdGhlckN1cnJlbnQuY3VycmVudGx5LnRpbWV6b25lO1xyXG4gIGdldExpbmtUb0ltYWdlKGNpdHlJbWFnZSwgaWNvbldhZXRoZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3TWFwKGxhdCwgbG5nKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLnJlbW92ZSgpO1xyXG4gIGxldCBtYXBDb250YWluZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXAnKVswXTtcclxuICBsZXQgbmV3TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3TWFwLmlkID0gJ21hcCc7XHJcbiAgbWFwQ29udGFpbmV0LmFwcGVuZENoaWxkKG5ld01hcCk7XHJcbm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pYzNOb1lXSmxhMjhpTENKaElqb2lZMnN6ZVhobWNYYzFNVFJsY3pOa2NEZDJlblpzTld0M2FpSjkuZnpDZVpHVkx1bkdsU2FxS0NfZlJHZydcclxuXHJcbnZhciBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICBjb250YWluZXI6ICdtYXAnLCAvLyBIVE1MIGNvbnRhaW5lciBpZFxyXG4gIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JywgLy8gc3R5bGUgVVJMXHJcbiAgY2VudGVyOiBbYCR7bG5nfWAsIGAke2xhdH1gXSwgLy8gc3RhcnRpbmcgcG9zaXRpb24gYXMgW2xuZywgbGF0XVxyXG4gIHpvb206IDEwXHJcbn0pOyAgXHJcbn1cclxuXHJcbmxldCBtaWNyb2ZvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVhY2gnKTtcclxubWljcm9mb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgc3BlYWNoKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc3BlYWNoKCl7XHJcbiAgdmFyIFNwZWVjaFJlY29nbml0aW9uID0gbmV3ICh3aW5kb3cuU3BlZWNoUmVjb2duaXRpb24gfHwgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uIHx8IHdpbmRvdy5tb3pTcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cubXNTcGVlY2hSZWNvZ25pdGlvbikoKTtcclxuICBTcGVlY2hSZWNvZ25pdGlvbi5sYW5nID0gXCJydS1SVVwiO1xyXG4gICAgU3BlZWNoUmVjb2duaXRpb24ub25yZXN1bHQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hBcmVhJykudmFsdWUgPSBldmVudC5yZXN1bHRzWzBdWzBdLnRyYW5zY3JpcHQ7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25TZWFyY2gnKS5jbGljaygpO1xyXG4gICAgfTtcclxuIFNwZWVjaFJlY29nbml0aW9uLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldExpbmtUb0ltYWdlKGNpdHlWYWx1ZSwgd2VhdGhlcikge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbT9xdWVyeT10b3duLCR7Y2l0eVZhbHVlfSYke3dlYXRoZXJ9JmNsaWVudF9pZD1kNWU3NzBkZTRiNmFiOGE0Nzc4N2YyM2E0OTM5MDIzZDgyMmY3ZDQzOTUwMjU0N2M3MzNkY2ZjMzEwMWQzN2ViYDtcclxuICBjb25zdCBwcm9taXNlID0gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgbGV0IHVybEJhY2tJbWFnZSA9IGRhdGEudXJscy5yZWd1bGFyO1xyXG4gICAgbGV0IGJhY2tXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcclxuICAgIGJhY2tXcmFwcGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxCYWNrSW1hZ2V9KWA7XHJcbiAgICBiYWNrV3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XHJcbiAgICBiYWNrV3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgKTtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4vLyDQs9C10L7QutC+0LTQuNC90LMg0LDQv9C4IGFkNTMwZjFjMDI5MzQ3ZjA4NDFjZmY1MzliNjMzNmMxIFxyXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjaXR5KSB7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9xPSR7Y2l0eX0ma2V5PWFkNTMwZjFjMDI5MzQ3ZjA4NDFjZmY1MzliNjMzNmMxJmxhbmd1YWdlPSR7bGFuZ3VhZ2VTZWxlY3R9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oY29vcmRzID0+IHtcclxuICAgIHJldHVybiBjb29yZHM7XHJcbiB9KTtcclxufVxyXG5cclxuXHJcbmxldCBidXR0b25TZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uU2VhcmNoJyk7XHJcbmJ1dHRvblNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZiA9PiB7XHJcbiAgbGV0IGNpdHlDb29yZGluYXRzID0gZ2V0Q29vcmRpbmF0ZXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEFyZWEnKS52YWx1ZSk7XHJcbiAgY2l0eUNvb3JkaW5hdHMudGhlbiggZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGxldCBsb2NhdGlvbiA9ICh2YWx1ZS5yZXN1bHRzWzBdLmZvcm1hdHRlZCk7XHJcbiAgICBsZXQgd2VhdGhlckxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfbG9jYXRpb24nKTtcclxuICAgIHdlYXRoZXJMb2NhdGlvbi5pbm5lclRleHQgPSBsb2NhdGlvbjtcclxuICAgIHJlbW92ZUljb24oKTtcclxuICAgIGxldCB1bml0c1RlbXAgPSAnJztcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1fdGVtcCcpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmICggZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF0udGV4dENvbnRlbnQgPT0gJ0MnKSB7XHJcbiAgICAgIHVuaXRzVGVtcCA9ICdzaSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdW5pdHNUZW1wID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaW5pdCgodmFsdWUucmVzdWx0c1swXS5nZW9tZXRyeS5sYXQgKyAnLCcgKyB2YWx1ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxuZyksIHVuaXRzVGVtcCk7XHJcbiAgfSk7ICBcclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUljb24oKSB7XHJcbiAgbGV0IGFycmF5SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ljb24nKTs7XHJcbiAgZm9yKGxldCBpID0gYXJyYXlJY29uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXthcnJheUljb25baV0ucmVtb3ZlKCk7fVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQXJlYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGU7XHJcbiAgaWYgKGtleSA9PT0gMTMpIHsgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uU2VhcmNoJykuY2xpY2soKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbG9hZEltYWdlJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgbGV0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9sb2NhdGlvbicpLnRleHRDb250ZW50O1xyXG4gIGxldCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS50ZXh0Q29udGVudDtcclxuICBnZXRMaW5rVG9JbWFnZShjaXR5LCB3ZWF0aGVyKTtcclxufSk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==