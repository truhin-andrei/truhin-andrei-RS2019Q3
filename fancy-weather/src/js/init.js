import pageRender from './pageRender.js';
import Location from './location.js';
import Map from './map.js';
import DateNow from './dateNow.js';
import Weather from './weather.js';
import Wallpaper from './wallpaper.js';
import Search from './search.js';
import speechRecognitionInit from './speechRecognitionInit.js';
import UnitToggle from './unitToggle.js';
import MINUTE_IN_MILISEC from './const.js';

import {renderPageWithNewLang, langToggleController} from './language';

pageRender();
langToggleController();

let lang = localStorage.getItem('lang') || 'en';

const searchBtn = document.getElementById('searchBtn');
const wallpaperReloadBtn = document.getElementById('reloadBtn');
const btnDeg = document.getElementById('btnDeg');
const audioSearchBtn = document.getElementById('audioSearchBtn');
const screenSaver = document.getElementById('screenSaver');
const selectLang = document.getElementById('selectLang');
const location = new Location(lang);
const map = new Map();
const dateNow = new DateNow(lang);
const weather = new Weather(lang);
const wallpaper = new Wallpaper();
const search = new Search();
const unitToggle = new UnitToggle();


async function init() {
  unitToggle.madeToggleBtnActive();
  await location.getCity();
  map.init(location);
  await map.render();
  dateNow.render();
  weather.init(location);
  await weather.getWeather();
  wallpaper.init(weather);
  await wallpaper.getWallpaper();
  wallpaper.render();
  await weather.render();
  await dateNow.render(weather.timeZone);
  await weather.getForecast();
  search.init(location, weather, wallpaper, map, dateNow);
}

init().then(() => {
  screenSaver.style.display = 'none';
});

setInterval(() => {
  dateNow.render(weather.timeZone);
}, MINUTE_IN_MILISEC);

searchBtn.addEventListener('click' || 'keydown', () => {
  search.searchApply();
});

wallpaperReloadBtn.addEventListener('click' || 'keydown', () => {
  wallpaper.render();
});

btnDeg.addEventListener('click' || 'keydown', (event) => {
  if (event.target.id === 'btnC') {
    if (localStorage.getItem('unit') === 'F') {
      unitToggle.reRender();
    }
    unitToggle.toggleToC();
  }
  if (event.target.id === 'btnF') {
    if (localStorage.getItem('unit') === 'C') {
      unitToggle.reRender();
    }
    unitToggle.toggleToF();
  }
});

audioSearchBtn.addEventListener('click' || 'keydown', () => {
  speechRecognitionInit(lang);
});

selectLang.addEventListener('change', () => {
  lang = selectLang.options[selectLang.selectedIndex].innerText;
  localStorage.setItem('lang', lang);
  dateNow.setLang(lang);
  weather.setLang(lang);
  weather.getWeather().then(() => {
    weather.render();
  }); 
  location.setLang(lang);
  location.getNameArea();
  langToggleController();
  renderPageWithNewLang();
});





