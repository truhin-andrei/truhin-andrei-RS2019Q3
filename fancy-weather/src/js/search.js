export class Search{
  init(location, weather, wallpaper, map, dateNow){
    this.location = location;
    this.weather = weather;
    this.wallpaper = wallpaper;
    this.map = map;
    this.dateNow = dateNow;
  }

  async searchApply() {
    const searchInput = document.getElementById('searchInput');
    let searchCity = searchInput.value;
    searchInput.value = '';
    
    this.location.getDataBySearch(searchCity);
    await this.weather.getWeather(searchCity);
    //wallpaper.init(weather);
    await this.wallpaper.getWallpaper();
    this.wallpaper.render();
    await this.weather.render();
    await this.weather.getForecast();
    this.map.reRender();
    console.log(this.weather.timeZone, 777);
    this.dateNow.render(this.weather.timeZone);
  }
}




