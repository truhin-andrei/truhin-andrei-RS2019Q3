export default class Map {
  constructor(myMap) {
    this.myMap = myMap;
  }

  init(location) {
    this.location = location;
  }

  async render() {
    const init = () => {
      const that = this;
      this.myMap = new window.ymaps.Map('map', {
        center: [that.location.latitude, that.location.longitude],
        zoom: 10,

      });
    };
    try {
      ymaps.ready(init);
    } catch (err) {
      console.log('error Map');
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }

  reRender() {
    this.myMap.setCenter([this.location.longitude, this.location.latitude], 6);
  }
}
