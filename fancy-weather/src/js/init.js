import {Location} from './location.js';
import {Map} from './map.js';
import {DateNow} from './dateNow.js';
import {Weather} from './weather.js';
import {Wallpaper} from './wallpaper.js';

import {Search} from './search.js';
import UnitToggle from './unitToggle.js';

import {MINUTE_IN_MILISEC} from './const.js';

const searchBtn = document.getElementById('searchBtn');
const wallpaperReloadBtn = document.getElementById('reloadBtn');
const btnDeg = document.getElementById('btnDeg');
let location = new Location();
let map = new Map();
let dateNow = new DateNow();
let weather = new Weather();
let wallpaper = new Wallpaper();
let search = new Search();
let unitToggle = new UnitToggle();

async function init(){
  unitToggle.madeToggleBtnActive()
  location.getPosition();
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
  //location.getCoordByCity('minsk');
  search.init(location, weather, wallpaper, map, dateNow);
  
 
}
//location.getPosition();
init();

setInterval(() => {
  dateNow.render(weather.timeZone);
 
}, MINUTE_IN_MILISEC);


searchBtn.addEventListener('click' || 'keydown', (event) => {
  search.searchApply();
});

wallpaperReloadBtn.addEventListener('click' || 'keydown', (event) => {
  wallpaper.render();
});

btnDeg.addEventListener('click' || 'keydown', (event) => {
  if (event.target.id === 'btnC') {
    
    console.log(localStorage.getItem('unit'));
    if (localStorage.getItem('unit') === 'F') {
      unitToggle.reRender();
    }
    unitToggle.toggleToC();
  }
  if (event.target.id === 'btnF') {
    
    console.log(localStorage.getItem('unit'));
    if (localStorage.getItem('unit') === 'C') {
      unitToggle.reRender();
    }
    unitToggle.toggleToF();
    
  }
});


//console.log(location);
