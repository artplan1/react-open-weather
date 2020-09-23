'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var moment = require('moment');
var fetch = require('isomorphic-unfetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

var icons = {
  "01d": "wi-day-sunny",
  "02d": "wi-day-cloudy",
  "03d": "wi-cloudy",
  "04d": "wi-cloudy",
  "09d": "wi-showers",
  "10d": "wi-day-rain",
  "11d": "wi-day-thunderstorm",
  "13d": "wi-day-snow-thunderstorm",
  "50d": "wi-fog",
  "01n": "wi-day-sunny",
  "02n": "wi-day-cloudy",
  "03n": "wi-cloudy",
  "04n": "wi-cloudy",
  "09n": "wi-showers",
  "10n": "wi-day-rain",
  "11n": "wi-day-thunderstorm",
  "13n": "wi-day-snow-thunderstorm",
  "50n": "wi-fog",
};

var langText = {
  en: {
    wind: "Wind",
    humidity: "Humidity",
    uvi: "UV Index",
    precipitation: "Chance of rain",
    todayWeather: "Today's Weather",
  },
  es: {
    wind: "Viento",
    humidity: "Humedad",
    uvi: "Índice UV",
    precipitation: "Probabilidad de lluvia",
    todayWeather: "El tiempo de hoy",
  },
  pt: {
    wind: "Vento",
    humidity: "Umidade",
    uvi: "Índice UV",
    precipitation: "Chance de chover",
    todayWeather: "Clima de hoje",
  },
  ru: {
    wind: "Ветер",
    humidity: "Влажность",
    uvi: "УФ-индекс",
    precipitation: "Вероятность осадков",
    todayWeather: "Погода сегодня",
  },
};

function getIcon(icon) {
  if (!icon) {
    return "na";
  }
  const icoClass = icons[icon];
  if (icoClass) {
    return icoClass;
  }
  return "na";
}

function getUnits(unit) {
  if (unit === "metric") {
    return {
      temp: "°C",
      speed: "km/h",
    };
  } else if (unit === "imperial") {
    return {
      temp: "°F",
      speed: "mph",
    };
  }
  return { temp: "", speed: "" };
}

function formatDateTime(dte, lang) {
  if (dte && moment__default['default'](dte).isValid()) {
    moment__default['default'].locale(lang);
    return moment__default['default'].unix(dte).format("dddd D, HH:mm");
  }
  return "";
}

function getLangs(lang) {
  return langText[lang] === undefined ? langText.en : langText[lang];
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@charset \"UTF-8\";\n@font-face {\n  font-family: \"weathericons\";\n  src: url(\"https://erikflowers.github.io/weather-icons/font/weathericons-regular-webfont.eot\");\n  src: url(\"https://erikflowers.github.io/weather-icons/font/weathericons-regular-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://erikflowers.github.io/weather-icons/font/weathericons-regular-webfont.woff2\") format(\"woff2\"), url(\"https://erikflowers.github.io/weather-icons/font/weathericons-regular-webfont.woff\") format(\"woff\"), url(\"https://erikflowers.github.io/weather-icons/font/weathericons-regular-webfont.ttf\") format(\"truetype\"), url(\"https://erikflowers.github.io/weather-icons/font/weathericons-regular-webfont.svg#weather_iconsregular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.wi {\n  display: inline-block;\n  font-family: \"weathericons\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.wi-fw {\n  width: 1.4em;\n  text-align: center; }\n\n.wi-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.wi-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.wi-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.wi-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.wi-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n.wi-day-sunny:before {\n  content: \"\"; }\n\n.wi-day-cloudy:before {\n  content: \"\"; }\n\n.wi-day-cloudy-gusts:before {\n  content: \"\"; }\n\n.wi-day-cloudy-windy:before {\n  content: \"\"; }\n\n.wi-day-fog:before {\n  content: \"\"; }\n\n.wi-day-hail:before {\n  content: \"\"; }\n\n.wi-day-haze:before {\n  content: \"\"; }\n\n.wi-day-lightning:before {\n  content: \"\"; }\n\n.wi-day-rain:before {\n  content: \"\"; }\n\n.wi-day-rain-mix:before {\n  content: \"\"; }\n\n.wi-day-rain-wind:before {\n  content: \"\"; }\n\n.wi-day-showers:before {\n  content: \"\"; }\n\n.wi-day-sleet:before {\n  content: \"\"; }\n\n.wi-day-sleet-storm:before {\n  content: \"\"; }\n\n.wi-day-snow:before {\n  content: \"\"; }\n\n.wi-day-snow-thunderstorm:before {\n  content: \"\"; }\n\n.wi-day-snow-wind:before {\n  content: \"\"; }\n\n.wi-day-sprinkle:before {\n  content: \"\"; }\n\n.wi-day-storm-showers:before {\n  content: \"\"; }\n\n.wi-day-sunny-overcast:before {\n  content: \"\"; }\n\n.wi-day-thunderstorm:before {\n  content: \"\"; }\n\n.wi-day-windy:before {\n  content: \"\"; }\n\n.wi-solar-eclipse:before {\n  content: \"\"; }\n\n.wi-hot:before {\n  content: \"\"; }\n\n.wi-day-cloudy-high:before {\n  content: \"\"; }\n\n.wi-day-light-wind:before {\n  content: \"\"; }\n\n.wi-night-clear:before {\n  content: \"\"; }\n\n.wi-night-alt-cloudy:before {\n  content: \"\"; }\n\n.wi-night-alt-cloudy-gusts:before {\n  content: \"\"; }\n\n.wi-night-alt-cloudy-windy:before {\n  content: \"\"; }\n\n.wi-night-alt-hail:before {\n  content: \"\"; }\n\n.wi-night-alt-lightning:before {\n  content: \"\"; }\n\n.wi-night-alt-rain:before {\n  content: \"\"; }\n\n.wi-night-alt-rain-mix:before {\n  content: \"\"; }\n\n.wi-night-alt-rain-wind:before {\n  content: \"\"; }\n\n.wi-night-alt-showers:before {\n  content: \"\"; }\n\n.wi-night-alt-sleet:before {\n  content: \"\"; }\n\n.wi-night-alt-sleet-storm:before {\n  content: \"\"; }\n\n.wi-night-alt-snow:before {\n  content: \"\"; }\n\n.wi-night-alt-snow-thunderstorm:before {\n  content: \"\"; }\n\n.wi-night-alt-snow-wind:before {\n  content: \"\"; }\n\n.wi-night-alt-sprinkle:before {\n  content: \"\"; }\n\n.wi-night-alt-storm-showers:before {\n  content: \"\"; }\n\n.wi-night-alt-thunderstorm:before {\n  content: \"\"; }\n\n.wi-night-cloudy:before {\n  content: \"\"; }\n\n.wi-night-cloudy-gusts:before {\n  content: \"\"; }\n\n.wi-night-cloudy-windy:before {\n  content: \"\"; }\n\n.wi-night-fog:before {\n  content: \"\"; }\n\n.wi-night-hail:before {\n  content: \"\"; }\n\n.wi-night-lightning:before {\n  content: \"\"; }\n\n.wi-night-partly-cloudy:before {\n  content: \"\"; }\n\n.wi-night-rain:before {\n  content: \"\"; }\n\n.wi-night-rain-mix:before {\n  content: \"\"; }\n\n.wi-night-rain-wind:before {\n  content: \"\"; }\n\n.wi-night-showers:before {\n  content: \"\"; }\n\n.wi-night-sleet:before {\n  content: \"\"; }\n\n.wi-night-sleet-storm:before {\n  content: \"\"; }\n\n.wi-night-snow:before {\n  content: \"\"; }\n\n.wi-night-snow-thunderstorm:before {\n  content: \"\"; }\n\n.wi-night-snow-wind:before {\n  content: \"\"; }\n\n.wi-night-sprinkle:before {\n  content: \"\"; }\n\n.wi-night-storm-showers:before {\n  content: \"\"; }\n\n.wi-night-thunderstorm:before {\n  content: \"\"; }\n\n.wi-lunar-eclipse:before {\n  content: \"\"; }\n\n.wi-stars:before {\n  content: \"\"; }\n\n.wi-storm-showers:before {\n  content: \"\"; }\n\n.wi-thunderstorm:before {\n  content: \"\"; }\n\n.wi-night-alt-cloudy-high:before {\n  content: \"\"; }\n\n.wi-night-cloudy-high:before {\n  content: \"\"; }\n\n.wi-night-alt-partly-cloudy:before {\n  content: \"\"; }\n\n.wi-cloud:before {\n  content: \"\"; }\n\n.wi-cloudy:before {\n  content: \"\"; }\n\n.wi-cloudy-gusts:before {\n  content: \"\"; }\n\n.wi-cloudy-windy:before {\n  content: \"\"; }\n\n.wi-fog:before {\n  content: \"\"; }\n\n.wi-hail:before {\n  content: \"\"; }\n\n.wi-rain:before {\n  content: \"\"; }\n\n.wi-rain-mix:before {\n  content: \"\"; }\n\n.wi-rain-wind:before {\n  content: \"\"; }\n\n.wi-showers:before {\n  content: \"\"; }\n\n.wi-sleet:before {\n  content: \"\"; }\n\n.wi-snow:before {\n  content: \"\"; }\n\n.wi-sprinkle:before {\n  content: \"\"; }\n\n.wi-storm-showers:before {\n  content: \"\"; }\n\n.wi-thunderstorm:before {\n  content: \"\"; }\n\n.wi-snow-wind:before {\n  content: \"\"; }\n\n.wi-snow:before {\n  content: \"\"; }\n\n.wi-smog:before {\n  content: \"\"; }\n\n.wi-smoke:before {\n  content: \"\"; }\n\n.wi-lightning:before {\n  content: \"\"; }\n\n.wi-raindrops:before {\n  content: \"\"; }\n\n.wi-raindrop:before {\n  content: \"\"; }\n\n.wi-dust:before {\n  content: \"\"; }\n\n.wi-snowflake-cold:before {\n  content: \"\"; }\n\n.wi-windy:before {\n  content: \"\"; }\n\n.wi-strong-wind:before {\n  content: \"\"; }\n\n.wi-sandstorm:before {\n  content: \"\"; }\n\n.wi-earthquake:before {\n  content: \"\"; }\n\n.wi-fire:before {\n  content: \"\"; }\n\n.wi-flood:before {\n  content: \"\"; }\n\n.wi-meteor:before {\n  content: \"\"; }\n\n.wi-tsunami:before {\n  content: \"\"; }\n\n.wi-volcano:before {\n  content: \"\"; }\n\n.wi-hurricane:before {\n  content: \"\"; }\n\n.wi-tornado:before {\n  content: \"\"; }\n\n.wi-small-craft-advisory:before {\n  content: \"\"; }\n\n.wi-gale-warning:before {\n  content: \"\"; }\n\n.wi-storm-warning:before {\n  content: \"\"; }\n\n.wi-hurricane-warning:before {\n  content: \"\"; }\n\n.wi-wind-direction:before {\n  content: \"\"; }\n\n.wi-alien:before {\n  content: \"\"; }\n\n.wi-celsius:before {\n  content: \"\"; }\n\n.wi-fahrenheit:before {\n  content: \"\"; }\n\n.wi-degrees:before {\n  content: \"\"; }\n\n.wi-thermometer:before {\n  content: \"\"; }\n\n.wi-thermometer-exterior:before {\n  content: \"\"; }\n\n.wi-thermometer-internal:before {\n  content: \"\"; }\n\n.wi-cloud-down:before {\n  content: \"\"; }\n\n.wi-cloud-up:before {\n  content: \"\"; }\n\n.wi-cloud-refresh:before {\n  content: \"\"; }\n\n.wi-horizon:before {\n  content: \"\"; }\n\n.wi-horizon-alt:before {\n  content: \"\"; }\n\n.wi-sunrise:before {\n  content: \"\"; }\n\n.wi-sunset:before {\n  content: \"\"; }\n\n.wi-moonrise:before {\n  content: \"\"; }\n\n.wi-moonset:before {\n  content: \"\"; }\n\n.wi-refresh:before {\n  content: \"\"; }\n\n.wi-refresh-alt:before {\n  content: \"\"; }\n\n.wi-umbrella:before {\n  content: \"\"; }\n\n.wi-barometer:before {\n  content: \"\"; }\n\n.wi-humidity:before {\n  content: \"\"; }\n\n.wi-na:before {\n  content: \"\"; }\n\n.wi-train:before {\n  content: \"\"; }\n\n.wi-moon-new:before {\n  content: \"\"; }\n\n.wi-moon-waxing-crescent-1:before {\n  content: \"\"; }\n\n.wi-moon-waxing-crescent-2:before {\n  content: \"\"; }\n\n.wi-moon-waxing-crescent-3:before {\n  content: \"\"; }\n\n.wi-moon-waxing-crescent-4:before {\n  content: \"\"; }\n\n.wi-moon-waxing-crescent-5:before {\n  content: \"\"; }\n\n.wi-moon-waxing-crescent-6:before {\n  content: \"\"; }\n\n.wi-moon-first-quarter:before {\n  content: \"\"; }\n\n.wi-moon-waxing-gibbous-1:before {\n  content: \"\"; }\n\n.wi-moon-waxing-gibbous-2:before {\n  content: \"\"; }\n\n.wi-moon-waxing-gibbous-3:before {\n  content: \"\"; }\n\n.wi-moon-waxing-gibbous-4:before {\n  content: \"\"; }\n\n.wi-moon-waxing-gibbous-5:before {\n  content: \"\"; }\n\n.wi-moon-waxing-gibbous-6:before {\n  content: \"\"; }\n\n.wi-moon-full:before {\n  content: \"\"; }\n\n.wi-moon-waning-gibbous-1:before {\n  content: \"\"; }\n\n.wi-moon-waning-gibbous-2:before {\n  content: \"\"; }\n\n.wi-moon-waning-gibbous-3:before {\n  content: \"\"; }\n\n.wi-moon-waning-gibbous-4:before {\n  content: \"\"; }\n\n.wi-moon-waning-gibbous-5:before {\n  content: \"\"; }\n\n.wi-moon-waning-gibbous-6:before {\n  content: \"\"; }\n\n.wi-moon-third-quarter:before {\n  content: \"\"; }\n\n.wi-moon-waning-crescent-1:before {\n  content: \"\"; }\n\n.wi-moon-waning-crescent-2:before {\n  content: \"\"; }\n\n.wi-moon-waning-crescent-3:before {\n  content: \"\"; }\n\n.wi-moon-waning-crescent-4:before {\n  content: \"\"; }\n\n.wi-moon-waning-crescent-5:before {\n  content: \"\"; }\n\n.wi-moon-waning-crescent-6:before {\n  content: \"\"; }\n\n.wi-moon-alt-new:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-crescent-1:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-crescent-2:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-crescent-3:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-crescent-4:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-crescent-5:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-crescent-6:before {\n  content: \"\"; }\n\n.wi-moon-alt-first-quarter:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-gibbous-1:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-gibbous-2:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-gibbous-3:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-gibbous-4:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-gibbous-5:before {\n  content: \"\"; }\n\n.wi-moon-alt-waxing-gibbous-6:before {\n  content: \"\"; }\n\n.wi-moon-alt-full:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-gibbous-1:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-gibbous-2:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-gibbous-3:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-gibbous-4:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-gibbous-5:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-gibbous-6:before {\n  content: \"\"; }\n\n.wi-moon-alt-third-quarter:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-crescent-1:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-crescent-2:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-crescent-3:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-crescent-4:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-crescent-5:before {\n  content: \"\"; }\n\n.wi-moon-alt-waning-crescent-6:before {\n  content: \"\"; }\n\n.wi-moon-0:before {\n  content: \"\"; }\n\n.wi-moon-1:before {\n  content: \"\"; }\n\n.wi-moon-2:before {\n  content: \"\"; }\n\n.wi-moon-3:before {\n  content: \"\"; }\n\n.wi-moon-4:before {\n  content: \"\"; }\n\n.wi-moon-5:before {\n  content: \"\"; }\n\n.wi-moon-6:before {\n  content: \"\"; }\n\n.wi-moon-7:before {\n  content: \"\"; }\n\n.wi-moon-8:before {\n  content: \"\"; }\n\n.wi-moon-9:before {\n  content: \"\"; }\n\n.wi-moon-10:before {\n  content: \"\"; }\n\n.wi-moon-11:before {\n  content: \"\"; }\n\n.wi-moon-12:before {\n  content: \"\"; }\n\n.wi-moon-13:before {\n  content: \"\"; }\n\n.wi-moon-14:before {\n  content: \"\"; }\n\n.wi-moon-15:before {\n  content: \"\"; }\n\n.wi-moon-16:before {\n  content: \"\"; }\n\n.wi-moon-17:before {\n  content: \"\"; }\n\n.wi-moon-18:before {\n  content: \"\"; }\n\n.wi-moon-19:before {\n  content: \"\"; }\n\n.wi-moon-20:before {\n  content: \"\"; }\n\n.wi-moon-21:before {\n  content: \"\"; }\n\n.wi-moon-22:before {\n  content: \"\"; }\n\n.wi-moon-23:before {\n  content: \"\"; }\n\n.wi-moon-24:before {\n  content: \"\"; }\n\n.wi-moon-25:before {\n  content: \"\"; }\n\n.wi-moon-26:before {\n  content: \"\"; }\n\n.wi-moon-27:before {\n  content: \"\"; }\n\n.wi-time-1:before {\n  content: \"\"; }\n\n.wi-time-2:before {\n  content: \"\"; }\n\n.wi-time-3:before {\n  content: \"\"; }\n\n.wi-time-4:before {\n  content: \"\"; }\n\n.wi-time-5:before {\n  content: \"\"; }\n\n.wi-time-6:before {\n  content: \"\"; }\n\n.wi-time-7:before {\n  content: \"\"; }\n\n.wi-time-8:before {\n  content: \"\"; }\n\n.wi-time-9:before {\n  content: \"\"; }\n\n.wi-time-10:before {\n  content: \"\"; }\n\n.wi-time-11:before {\n  content: \"\"; }\n\n.wi-time-12:before {\n  content: \"\"; }\n\n.wi-direction-up:before {\n  content: \"\"; }\n\n.wi-direction-up-right:before {\n  content: \"\"; }\n\n.wi-direction-right:before {\n  content: \"\"; }\n\n.wi-direction-down-right:before {\n  content: \"\"; }\n\n.wi-direction-down:before {\n  content: \"\"; }\n\n.wi-direction-down-left:before {\n  content: \"\"; }\n\n.wi-direction-left:before {\n  content: \"\"; }\n\n.wi-direction-up-left:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-0:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-1:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-2:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-3:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-4:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-5:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-6:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-7:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-8:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-9:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-10:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-11:before {\n  content: \"\"; }\n\n.wi-wind-beaufort-12:before {\n  content: \"\"; }\n\n.wi-owm-200:before {\n  content: \"\"; }\n\n.wi-owm-201:before {\n  content: \"\"; }\n\n.wi-owm-202:before {\n  content: \"\"; }\n\n.wi-owm-210:before {\n  content: \"\"; }\n\n.wi-owm-211:before {\n  content: \"\"; }\n\n.wi-owm-212:before {\n  content: \"\"; }\n\n.wi-owm-221:before {\n  content: \"\"; }\n\n.wi-owm-230:before {\n  content: \"\"; }\n\n.wi-owm-231:before {\n  content: \"\"; }\n\n.wi-owm-232:before {\n  content: \"\"; }\n\n.wi-owm-300:before {\n  content: \"\"; }\n\n.wi-owm-301:before {\n  content: \"\"; }\n\n.wi-owm-302:before {\n  content: \"\"; }\n\n.wi-owm-310:before {\n  content: \"\"; }\n\n.wi-owm-311:before {\n  content: \"\"; }\n\n.wi-owm-312:before {\n  content: \"\"; }\n\n.wi-owm-313:before {\n  content: \"\"; }\n\n.wi-owm-314:before {\n  content: \"\"; }\n\n.wi-owm-321:before {\n  content: \"\"; }\n\n.wi-owm-500:before {\n  content: \"\"; }\n\n.wi-owm-501:before {\n  content: \"\"; }\n\n.wi-owm-502:before {\n  content: \"\"; }\n\n.wi-owm-503:before {\n  content: \"\"; }\n\n.wi-owm-504:before {\n  content: \"\"; }\n\n.wi-owm-511:before {\n  content: \"\"; }\n\n.wi-owm-520:before {\n  content: \"\"; }\n\n.wi-owm-521:before {\n  content: \"\"; }\n\n.wi-owm-522:before {\n  content: \"\"; }\n\n.wi-owm-531:before {\n  content: \"\"; }\n\n.wi-owm-600:before {\n  content: \"\"; }\n\n.wi-owm-601:before {\n  content: \"\"; }\n\n.wi-owm-602:before {\n  content: \"\"; }\n\n.wi-owm-611:before {\n  content: \"\"; }\n\n.wi-owm-612:before {\n  content: \"\"; }\n\n.wi-owm-615:before {\n  content: \"\"; }\n\n.wi-owm-616:before {\n  content: \"\"; }\n\n.wi-owm-620:before {\n  content: \"\"; }\n\n.wi-owm-621:before {\n  content: \"\"; }\n\n.wi-owm-622:before {\n  content: \"\"; }\n\n.wi-owm-701:before {\n  content: \"\"; }\n\n.wi-owm-711:before {\n  content: \"\"; }\n\n.wi-owm-721:before {\n  content: \"\"; }\n\n.wi-owm-731:before {\n  content: \"\"; }\n\n.wi-owm-741:before {\n  content: \"\"; }\n\n.wi-owm-761:before {\n  content: \"\"; }\n\n.wi-owm-762:before {\n  content: \"\"; }\n\n.wi-owm-771:before {\n  content: \"\"; }\n\n.wi-owm-781:before {\n  content: \"\"; }\n\n.wi-owm-800:before {\n  content: \"\"; }\n\n.wi-owm-801:before {\n  content: \"\"; }\n\n.wi-owm-802:before {\n  content: \"\"; }\n\n.wi-owm-803:before {\n  content: \"\"; }\n\n.wi-owm-804:before {\n  content: \"\"; }\n\n.wi-owm-900:before {\n  content: \"\"; }\n\n.wi-owm-901:before {\n  content: \"\"; }\n\n.wi-owm-902:before {\n  content: \"\"; }\n\n.wi-owm-903:before {\n  content: \"\"; }\n\n.wi-owm-904:before {\n  content: \"\"; }\n\n.wi-owm-905:before {\n  content: \"\"; }\n\n.wi-owm-906:before {\n  content: \"\"; }\n\n.wi-owm-957:before {\n  content: \"\"; }\n\n.wi-owm-day-200:before {\n  content: \"\"; }\n\n.wi-owm-day-201:before {\n  content: \"\"; }\n\n.wi-owm-day-202:before {\n  content: \"\"; }\n\n.wi-owm-day-210:before {\n  content: \"\"; }\n\n.wi-owm-day-211:before {\n  content: \"\"; }\n\n.wi-owm-day-212:before {\n  content: \"\"; }\n\n.wi-owm-day-221:before {\n  content: \"\"; }\n\n.wi-owm-day-230:before {\n  content: \"\"; }\n\n.wi-owm-day-231:before {\n  content: \"\"; }\n\n.wi-owm-day-232:before {\n  content: \"\"; }\n\n.wi-owm-day-300:before {\n  content: \"\"; }\n\n.wi-owm-day-301:before {\n  content: \"\"; }\n\n.wi-owm-day-302:before {\n  content: \"\"; }\n\n.wi-owm-day-310:before {\n  content: \"\"; }\n\n.wi-owm-day-311:before {\n  content: \"\"; }\n\n.wi-owm-day-312:before {\n  content: \"\"; }\n\n.wi-owm-day-313:before {\n  content: \"\"; }\n\n.wi-owm-day-314:before {\n  content: \"\"; }\n\n.wi-owm-day-321:before {\n  content: \"\"; }\n\n.wi-owm-day-500:before {\n  content: \"\"; }\n\n.wi-owm-day-501:before {\n  content: \"\"; }\n\n.wi-owm-day-502:before {\n  content: \"\"; }\n\n.wi-owm-day-503:before {\n  content: \"\"; }\n\n.wi-owm-day-504:before {\n  content: \"\"; }\n\n.wi-owm-day-511:before {\n  content: \"\"; }\n\n.wi-owm-day-520:before {\n  content: \"\"; }\n\n.wi-owm-day-521:before {\n  content: \"\"; }\n\n.wi-owm-day-522:before {\n  content: \"\"; }\n\n.wi-owm-day-531:before {\n  content: \"\"; }\n\n.wi-owm-day-600:before {\n  content: \"\"; }\n\n.wi-owm-day-601:before {\n  content: \"\"; }\n\n.wi-owm-day-602:before {\n  content: \"\"; }\n\n.wi-owm-day-611:before {\n  content: \"\"; }\n\n.wi-owm-day-612:before {\n  content: \"\"; }\n\n.wi-owm-day-615:before {\n  content: \"\"; }\n\n.wi-owm-day-616:before {\n  content: \"\"; }\n\n.wi-owm-day-620:before {\n  content: \"\"; }\n\n.wi-owm-day-621:before {\n  content: \"\"; }\n\n.wi-owm-day-622:before {\n  content: \"\"; }\n\n.wi-owm-day-701:before {\n  content: \"\"; }\n\n.wi-owm-day-711:before {\n  content: \"\"; }\n\n.wi-owm-day-721:before {\n  content: \"\"; }\n\n.wi-owm-day-731:before {\n  content: \"\"; }\n\n.wi-owm-day-741:before {\n  content: \"\"; }\n\n.wi-owm-day-761:before {\n  content: \"\"; }\n\n.wi-owm-day-762:before {\n  content: \"\"; }\n\n.wi-owm-day-781:before {\n  content: \"\"; }\n\n.wi-owm-day-800:before {\n  content: \"\"; }\n\n.wi-owm-day-801:before {\n  content: \"\"; }\n\n.wi-owm-day-802:before {\n  content: \"\"; }\n\n.wi-owm-day-803:before {\n  content: \"\"; }\n\n.wi-owm-day-804:before {\n  content: \"\"; }\n\n.wi-owm-day-900:before {\n  content: \"\"; }\n\n.wi-owm-day-902:before {\n  content: \"\"; }\n\n.wi-owm-day-903:before {\n  content: \"\"; }\n\n.wi-owm-day-904:before {\n  content: \"\"; }\n\n.wi-owm-day-906:before {\n  content: \"\"; }\n\n.wi-owm-day-957:before {\n  content: \"\"; }\n\n.wi-owm-night-200:before {\n  content: \"\"; }\n\n.wi-owm-night-201:before {\n  content: \"\"; }\n\n.wi-owm-night-202:before {\n  content: \"\"; }\n\n.wi-owm-night-210:before {\n  content: \"\"; }\n\n.wi-owm-night-211:before {\n  content: \"\"; }\n\n.wi-owm-night-212:before {\n  content: \"\"; }\n\n.wi-owm-night-221:before {\n  content: \"\"; }\n\n.wi-owm-night-230:before {\n  content: \"\"; }\n\n.wi-owm-night-231:before {\n  content: \"\"; }\n\n.wi-owm-night-232:before {\n  content: \"\"; }\n\n.wi-owm-night-300:before {\n  content: \"\"; }\n\n.wi-owm-night-301:before {\n  content: \"\"; }\n\n.wi-owm-night-302:before {\n  content: \"\"; }\n\n.wi-owm-night-310:before {\n  content: \"\"; }\n\n.wi-owm-night-311:before {\n  content: \"\"; }\n\n.wi-owm-night-312:before {\n  content: \"\"; }\n\n.wi-owm-night-313:before {\n  content: \"\"; }\n\n.wi-owm-night-314:before {\n  content: \"\"; }\n\n.wi-owm-night-321:before {\n  content: \"\"; }\n\n.wi-owm-night-500:before {\n  content: \"\"; }\n\n.wi-owm-night-501:before {\n  content: \"\"; }\n\n.wi-owm-night-502:before {\n  content: \"\"; }\n\n.wi-owm-night-503:before {\n  content: \"\"; }\n\n.wi-owm-night-504:before {\n  content: \"\"; }\n\n.wi-owm-night-511:before {\n  content: \"\"; }\n\n.wi-owm-night-520:before {\n  content: \"\"; }\n\n.wi-owm-night-521:before {\n  content: \"\"; }\n\n.wi-owm-night-522:before {\n  content: \"\"; }\n\n.wi-owm-night-531:before {\n  content: \"\"; }\n\n.wi-owm-night-600:before {\n  content: \"\"; }\n\n.wi-owm-night-601:before {\n  content: \"\"; }\n\n.wi-owm-night-602:before {\n  content: \"\"; }\n\n.wi-owm-night-611:before {\n  content: \"\"; }\n\n.wi-owm-night-612:before {\n  content: \"\"; }\n\n.wi-owm-night-615:before {\n  content: \"\"; }\n\n.wi-owm-night-616:before {\n  content: \"\"; }\n\n.wi-owm-night-620:before {\n  content: \"\"; }\n\n.wi-owm-night-621:before {\n  content: \"\"; }\n\n.wi-owm-night-622:before {\n  content: \"\"; }\n\n.wi-owm-night-701:before {\n  content: \"\"; }\n\n.wi-owm-night-711:before {\n  content: \"\"; }\n\n.wi-owm-night-721:before {\n  content: \"\"; }\n\n.wi-owm-night-731:before {\n  content: \"\"; }\n\n.wi-owm-night-741:before {\n  content: \"\"; }\n\n.wi-owm-night-761:before {\n  content: \"\"; }\n\n.wi-owm-night-762:before {\n  content: \"\"; }\n\n.wi-owm-night-781:before {\n  content: \"\"; }\n\n.wi-owm-night-800:before {\n  content: \"\"; }\n\n.wi-owm-night-801:before {\n  content: \"\"; }\n\n.wi-owm-night-802:before {\n  content: \"\"; }\n\n.wi-owm-night-803:before {\n  content: \"\"; }\n\n.wi-owm-night-804:before {\n  content: \"\"; }\n\n.wi-owm-night-900:before {\n  content: \"\"; }\n\n.wi-owm-night-902:before {\n  content: \"\"; }\n\n.wi-owm-night-903:before {\n  content: \"\"; }\n\n.wi-owm-night-904:before {\n  content: \"\"; }\n\n.wi-owm-night-906:before {\n  content: \"\"; }\n\n.wi-owm-night-957:before {\n  content: \"\"; }\n\n.rw-main {\n  font-family: Helvetica, sans-serif;\n  color: #fff;\n  background: linear-gradient(to top left, #008dbe, #43b0d3, #8ddbf2);\n  padding: 1rem;\n  border: 1px solid #f0f0f0; }\n  .rw-main p {\n    margin: 0; }\n  .rw-main .rw-box > * {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .rw-main .rw-box__top > * {\n    flex: 1;\n    text-align: right; }\n  .rw-main .rw-box__top .current-temp {\n    display: flex;\n    align-items: center;\n    text-transform: capitalize; }\n    .rw-main .rw-box__top .current-temp__temp {\n      margin: 0 1rem; }\n    .rw-main .rw-box__top .current-temp__temp, .rw-main .rw-box__top .current-temp i {\n      font-size: 2rem; }\n  .rw-main .rw-box__top .current-dt {\n    font-size: 0.875rem; }\n  .rw-main .rw-box__bottom {\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 0.875rem; }\n    .rw-main .rw-box__bottom > * {\n      flex: 1; }\n      .rw-main .rw-box__bottom > *:not(:last-child) {\n        border-right: 1px solid #fff; }\n";
styleInject(css_248z);

var endPointToday = "https://api.openweathermap.org/data/2.5/onecall";
var ReactWeather = function (_a) {
    var lat = _a.lat, lon = _a.lon, apiKey = _a.apiKey, _b = _a.lang, lang = _b === void 0 ? "en" : _b, _c = _a.unit, unit = _c === void 0 ? "metric" : _c, loadingComponent = _a.loadingComponent;
    var _d = React.useState(null), data = _d[0], setData = _d[1];
    React.useEffect(function () {
        var params = {
            appid: apiKey,
            units: unit,
            lang: lang,
            lat: lat,
            lon: lon,
        };
        var url = new URL(endPointToday);
        Object.keys(params).forEach(function (key) {
            return url.searchParams.append(key, params[key]);
        });
        fetch__default['default'](String(url))
            .then(function (response) {
            return response.json();
        })
            .then(function (resp) {
            if (resp) {
                var todayData = resp.current;
                setData({
                    description: todayData.weather[0].description,
                    icon: todayData.weather[0].icon,
                    temperature: {
                        current: todayData.temp.toFixed(0),
                    },
                    wind: todayData.wind_speed.toFixed(0),
                    humidity: todayData.humidity,
                    date: formatDateTime(todayData.dt, lang),
                    uvi: todayData.uvi,
                    precipitation: resp.minutely[0].precipitation * 100,
                });
            }
        });
    }, []);
    if (!data)
        return loadingComponent || React__default['default'].createElement("div", null, "Loading...");
    var todayIcon = getIcon(data.icon);
    var units = getUnits(unit);
    var langs = getLangs(lang);
    return (React__default['default'].createElement("div", { className: "rw-main" },
        React__default['default'].createElement("p", null, langs.todayWeather),
        React__default['default'].createElement("div", { className: "rw-box" },
            React__default['default'].createElement("div", { className: "rw-box__top" },
                React__default['default'].createElement("div", { className: "current-temp" },
                    React__default['default'].createElement("i", { className: "wicon wi " + todayIcon }),
                    React__default['default'].createElement("span", { className: "current-temp__temp" },
                        data.temperature.current,
                        " ",
                        units.temp),
                    React__default['default'].createElement("span", null, data.description)),
                React__default['default'].createElement("div", { className: "current-dt" }, data.date)),
            React__default['default'].createElement("div", { className: "rw-box__bottom" },
                React__default['default'].createElement("div", null,
                    langs.wind,
                    React__default['default'].createElement("br", null),
                    data.wind,
                    " ",
                    units.speed),
                React__default['default'].createElement("div", null,
                    langs.uvi,
                    React__default['default'].createElement("br", null),
                    data.uvi),
                React__default['default'].createElement("div", null,
                    langs.humidity,
                    React__default['default'].createElement("br", null),
                    data.humidity,
                    "%"),
                React__default['default'].createElement("div", null,
                    langs.precipitation,
                    React__default['default'].createElement("br", null),
                    data.precipitation,
                    "%")))));
};

exports.ReactWeather = ReactWeather;
//# sourceMappingURL=index.js.map
