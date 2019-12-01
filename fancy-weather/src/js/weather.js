export class Weather{

  init(location){
    this.location = location;
   // console.log(this.location);
  }

  async getWeather(){
    try  {
      console.log(this.location, 'getW');
      //let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.location.latitude}&lon=${this.location.longitude}&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);
      let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location.city}&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);
      let response = await request.json();
     // console.log(response);
      let temp = this.convertKtoC(response.main.temp);
      let cond = response.weather[0].description;
      let pres = this.converthPaToMM(response.main.pressure);
      let windValue = response.wind.speed;
      let humid = response.main.humidity;
      
      this.render(temp, cond, pres, windValue, humid);
      
    }catch(err){
      console.log('error of getWeather');
    }
    
    
  }

  async getForecast(){
    try  {
      
      let request = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.location.city}&cnt=26&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);
      let response = await request.json();
     // console.log(response.list[0]);
     // console.log(this.convertKtoC(response.list[0].main.temp));
      //let temp = this.convertKtoC(response.main.temp);
      console.log(response.list);
     this.renderForecast(response.list);
      
    }catch(err){
      console.log('error of forecast');
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }

  renderForecast(tempArr){
    const forecastEl = document.getElementsByClassName('next-forecast__degr');
    console.log(forecastEl[0]);
    for(let i=0; i < 3; i++){
      forecastEl[i].innerHTML=this.convertKtoC(tempArr[(i+1)*8].main.temp);
     console.log(tempArr[(i+1)*8]);
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