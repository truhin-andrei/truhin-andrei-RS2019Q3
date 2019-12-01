export class Location{
  constructor(latitude, longitude){
    this.latitude = latitude;
    this.longitude = longitude;
    
  }

  getPosition(){
    let success = (pos) => {
      let crd = pos.coords;
      //console.log(this.latitude, 1);
      this.latitude = crd.latitude;
      this.longitude = crd.longitude;
      //console.log(this.latitude, 2);
      this.renderCoord();
      this.getNameArea();
      //console.log(this);
    }
    //console.dir(this);

    function error(err) {
      console.log('error of location');
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    // const options = {
    //   enableHighAccuracy: true,
    //   timeout: 5,
    //   maximumAge: 0
    // };

    navigator.geolocation.getCurrentPosition(success, error);
    
    
  }

  getDeg(coord){
    return Math.trunc(coord);
  }

  getMinutes(coord){
    return Math.trunc((coord - this.getDeg(coord)) * 60);
  }

  renderCoord(){
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');
    latitude.innerHTML = `${this.getDeg(this.latitude)}&deg; ${this.getMinutes(this.latitude)}&prime;`
    longitude.innerHTML = `${this.getDeg(this.longitude)}&deg; ${this.getMinutes(this.longitude)}&prime;`
  }

  renderCity(city){
    const cityEl = document.getElementById('city');
    cityEl.innerText = city;
  }

  renderCountry(country){
    const countryEl = document.getElementById('country');
    countryEl.innerText = country;
  }

  getNameArea(){
   
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=b58ea381-e37e-43d1-95fc-ec3da56fccd0&format=json&geocode=${this.longitude},${this.latitude}&kind=locality&lang=${'en_RU'}&results=1`)
   .then(response => response.json())
   .then(res => {
    let city = res.response.GeoObjectCollection.featureMember[0].GeoObject.name;
    let country = res.response.GeoObjectCollection.featureMember[0].GeoObject.description;
    this.renderCity(city);
    this.renderCountry(country);
   });
  }

  getCoordByIp(){
  
  }

    
}


