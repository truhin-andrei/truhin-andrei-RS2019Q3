import {Location} from './location.js';
import {Map} from './map.js';
import {DateNow} from './dateNow.js';
import {Weather} from './weather.js';

let location = new Location();
let map = new Map();
let dateNow = new DateNow();
let weather = new Weather();
async function init(){
  location.getPosition();
  await location.getCity();
  map.init(location);
  await map.render();
  
  dateNow.render();
  
  weather.init(location);
  await weather.getWeather();
  await weather.getForecast();
 
}
//location.getPosition();
init();
setTimeout(() => {
 
}, 1);






//console.log(location);
