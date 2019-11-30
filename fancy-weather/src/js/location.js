export class Location{
  constructor(latitude, longitude){
    this.latitude = latitude;
    this.longitude = longitude;
    
  }

  getPosition(){
    let success = (pos) => {
      let crd = pos.coords;
      console.log(this.latitude, 1);
      this.latitude = crd.latitude;
      this.longitude = crd.longitude;
      console.log(this.latitude, 2);
      this.renderCoord();
      //console.log(this);
    }
    //console.dir(this);

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    
    
  }

  getDeg(coord){
    return Math.trunc(coord);
  }

  getMinutes(coord){
    console.log((coord - this.getDeg(coord)) * 60);
    return Math.trunc((coord - this.getDeg(coord)) * 60);
  }

  renderCoord(){
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');
    latitude.innerHTML = `${this.getDeg(this.latitude)}&deg; ${this.getMinutes(this.latitude)}&prime;`
    longitude.innerHTML = `${this.getDeg(this.longitude)}&deg; ${this.getMinutes(this.longitude)}&prime;`
  }
    
}


