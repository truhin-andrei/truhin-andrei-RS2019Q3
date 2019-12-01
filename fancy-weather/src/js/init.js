import {Location} from './location.js';
import {Map} from './map.js';
import {DateNow} from './dateNow.js';
import {Weather} from './weather.js';

let location = new Location();
let map = new Map();
let dateNow = new DateNow();
let weather = new Weather();
async function init(){
  await location.getPosition();
  map.init(location);
  map.render();
  
  dateNow.render();
  
  weather.init(location);
  weather.getWeather();
}
//location.getPosition();
init();
setTimeout(() => {
 
}, 1);






//console.log(location);
