export class Weather{

  

  init(location){
    this.location = location;
  }

  async getWeather(){
    try  {
      let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location.city}&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);
      let response = await request.json();
      console.log(response);
      let temp = this.convertKtoC(response.main.temp);
      let cond = response.weather[0].description;
      
      let windValue = response.wind.speed;
      let humid = response.main.humidity;
      
      this.render(temp, cond, pres, windValue, humid);
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
    //console.log(forecast[forecastNum]);
     
    let img = document.createElement('img');
    img.classList.add('forecastImg') ;
    forecast[forecastNum].append(img);
    img.src = URL.createObjectURL(responseIcon); 
  }

  renderForecast(tempArr){
    const forecastEl = document.getElementsByClassName('next-forecast__degr');
    
    for(let i=0; i < 3; i++){
      forecastEl[i].innerHTML=this.convertKtoC(tempArr[(i+1)*8].main.temp);
      this.getIcon(tempArr[(i+1)*8].weather[0].icon, i+1);
    }
  }

  render(temp, cond, pres, windValue, humid){
    const degToday = document.getElementById('degToday');
    const cast = document.getElementById('cast');
    const pressure = document.getElementById('pressure');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');

    degToday.innerText = temp;
    cast.innerText = cond;
    pressure.innerText = pres;
    wind.innerText = windValue;
    humidity.innerText = humid;
  }

  convertKtoC(k){
    return Math.round(k-273.15);
  }

  convertKtoF(k){
    return (9/5)*(convertKtoC(k)+32);
  }

  converthPaToMM(hPa){
    return Math.round(hPa * 0.75006375541921);
  }
}