import {convertKtoC, convertKtoF} from './func.js';
export class Weather{

  constructor(){
    this.temp;
    this.condition;
    this.windValue;
    this.humidity;
    this.sunrise;
    this.sunset;
    this.main;
    this.timeZone;
  } 

  init(location){
    this.location = location;
  }

  async getWeather(city = this.location.city){
    try  {
      
      let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);
      let response = await request.json();
      console.log(response);
      this.temp = convertKtoC(response.main.temp);
      this.condition = response.weather[0].description;
      this.main = response.weather[0].main;
      this.windValue = response.wind.speed;
      this.humidity = response.main.humidity;
      this.sunrise = response.sys.sunrise;
      this.sunset = response.sys.sunset;
      this.timeZone = response.timezone;
      console.log(this.timeZone);
      this.getIcon(response.weather[0].icon);
      
    }catch(err){
      console.log('error of getWeather');
    }  
  }

  async getForecast(){
    try  { 
      let request = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.location.city}&cnt=26&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);
      let response = await request.json();
     
      this.renderForecast(response.list);
  
    }catch(err){
      console.log('error of forecast');
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }

  async getIcon(iconId, forecastNum = false){
    try  {
      let request = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`);
      let responseIcon = await request.blob();
      if(forecastNum){
        this.renderForecastIcon(responseIcon, forecastNum-1)
      }else{
        this.renderIcon(responseIcon); 
      }
      
    }catch(err){
      console.log('error of geticon');
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }

  renderIcon(responseIcon){
    const mainDeg = document.querySelector('.forecast');  
    let img = document.createElement('img');

    img.classList.add('mainDegImg') ;
    mainDeg.append(img);
    img.src = URL.createObjectURL(responseIcon); 
  }

  renderForecastIcon(responseIcon, forecastNum){
    const forecast = document.querySelectorAll('.next-forecast__day'); 
    let img = document.createElement('img');

    img.classList.add('forecastImg') ;
    forecast[forecastNum].append(img);
    img.src = URL.createObjectURL(responseIcon); 
  }

  renderForecast(tempArr){
    const forecastEl = document.getElementsByClassName('next-forecast__degr');
    
    for(let i=0; i < 3; i++){
      forecastEl[i].innerHTML=convertKtoC(tempArr[(i+1)*8].main.temp);
      this.getIcon(tempArr[(i+1)*8].weather[0].icon, i+1);
    }
  }

  render(){
    const degToday = document.getElementById('degToday');
    const cast = document.getElementById('cast');
    const pressure = document.getElementById('pressure');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');

    degToday.innerText = this.temp;
    cast.innerText = this.condition;
    wind.innerText = this.windValue;
    humidity.innerText = this.humidity;
    
  }

 

}