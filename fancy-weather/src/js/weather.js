export class Weather{

  init(location){
    this.location = location;
   // console.log(this.location);
  }

  async getWeather(){
    try  {
      console.log(this.location.latitude, 'getW');
      let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.location.latitude}&lon=${this.location.longitude}&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);
      let response = await request.json();
  
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
    return k-273.15;
  }

  convertKtoF(k){
    return (9/5)*(convertKtoC(k)+32);
  }

  converthPaToMM(hPa){
    return Math.round(hPa * 0.75006375541921);
  }
}