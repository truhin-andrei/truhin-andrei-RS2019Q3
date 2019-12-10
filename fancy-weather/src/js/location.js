export class Location{
  constructor(latitude, longitude, city){
    this.latitude = latitude;
    this.longitude = longitude;
    this.city = city;
    
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

  getDeg(coord) {
    return Math.trunc(coord);
  }

  getMinutes(coord) {
    return Math.trunc((coord - this.getDeg(coord)) * 60);
  }

  renderCoord() {
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');
    latitude.innerHTML = `${this.getDeg(this.latitude)}&deg; ${this.getMinutes(this.latitude)}&prime;`
    longitude.innerHTML = `${this.getDeg(this.longitude)}&deg; ${this.getMinutes(this.longitude)}&prime;`
  }

  renderCity(){
    const cityEl = document.getElementById('city');
    cityEl.innerText = this.city;
  }

  renderCountry(){
    const countryEl = document.getElementById('country');
    countryEl.innerText = this.country;
  }

  getNameArea(){
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=b58ea381-e37e-43d1-95fc-ec3da56fccd0&format=json&geocode=${this.longitude},${this.latitude}&kind=locality&lang=${'en_RU'}&results=1`)
   .then(response => response.json())
   .then(res => {
    this.city = res.response.GeoObjectCollection.featureMember[0].GeoObject.name;
    this.country = res.response.GeoObjectCollection.featureMember[0].GeoObject.description;
    this.renderCity();
    this.renderCountry();
   });
  }

  async getDataBySearch(city){
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=b58ea381-e37e-43d1-95fc-ec3da56fccd0&format=json&geocode=${city}&kind=locality&lang=${'en_RU'}&results=1`)
   .then(response => response.json())
   .then(res => {
    
    this.city = res.response.GeoObjectCollection.featureMember[0].GeoObject.name;
    this.country = res.response.GeoObjectCollection.featureMember[0].GeoObject.description;
    let coord = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
  
    this.latitude = coord[0];
    this.longitude = coord[1];
    this.renderCity();
    this.renderCountry();
    this.renderCoord();
   });
  }

  async getCity(){
    let data = {};
   let request = await fetch('https://ipinfo.io?token=a4998744625b7b', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
   //console.log(request, 23);
   let response = await request.json();
  // console.log(response, 24);
   this.city = response.city;
  }

    
}


