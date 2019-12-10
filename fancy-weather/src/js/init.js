import {Location} from './location.js';
import {Map} from './map.js';
import {DateNow} from './dateNow.js';
import {Weather} from './weather.js';
import {Wallpaper} from './wallpaper.js';

import {Search} from './search.js';

import {MINUTE_IN_MILISEC} from './const.js';

const searchBtn = document.getElementById('searchBtn');
let location = new Location();
let map = new Map();
let dateNow = new DateNow();
let weather = new Weather();
let wallpaper = new Wallpaper();
let search = new Search();

async function init(){
  location.getPosition();
  await location.getCity();
  map.init(location);
  await map.render();
  
  dateNow.render();
  
  weather.init(location);
  
  
  await weather.getWeather();
  wallpaper.init(weather);
  await wallpaper.getWallpaper();
  await weather.render();
  await weather.getForecast();
  //location.getCoordByCity('minsk');
  search.init(location, weather, wallpaper, map);
  
 
}
//location.getPosition();
init();
setInterval(() => {
  dateNow.render();
 
}, MINUTE_IN_MILISEC);

searchBtn.addEventListener('click' || 'keydown', (event) => {

  search.searchApply();
});




//console.log(location);
