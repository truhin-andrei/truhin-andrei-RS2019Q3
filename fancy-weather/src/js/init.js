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

pageRender();

const searchBtn = document.getElementById('searchBtn');
const wallpaperReloadBtn = document.getElementById('reloadBtn');
const btnDeg = document.getElementById('btnDeg');
const audioSearchBtn = document.getElementById('audioSearchBtn');
const screenSaver = document.getElementById('screenSaver');
const location = new Location();
const map = new Map();
const dateNow = new DateNow();
const weather = new Weather();
const wallpaper = new Wallpaper();
const search = new Search();
const unitToggle = new UnitToggle();
// const audioSearch = new AudioSearch();

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
  speechRecognitionInit();
});
