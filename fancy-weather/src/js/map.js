export class Map{
  // constructor(latitude, longitude){
  //   this.latitude = latitude;
  //   this.longitude = longitude;
    
  // }
  init(location) {
    this.location = location;
}

 async render(){  
    let  init =  () => {
      let that = this;
      //console.dir(this.location.latitude,1);
        let myMap = new ymaps.Map("map", {
            center: [that.location.latitude, that.location.longitude],
            zoom: 10
            
        });
        console.dir(this.location,2);
  }
  try{
    ymaps.ready(init);
  }
  catch(err){
    console.log('error Map')
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
}


}