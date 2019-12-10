export class Search{
  init(location, weather, wallpaper, map){
    this.location = location;
    this.weather = weather;
    this.wallpaper = wallpaper;
    this.map = map;
  }

  async searchApply() {
    const searchInput = document.getElementById('searchInput');
    let searchCity = searchInput.value;
    console.log(searchCity, 777);
    this.location.getDataBySearch(searchCity);
    await this.weather.getWeather(searchCity);
    //wallpaper.init(weather);
    await this.wallpaper.getWallpaper();
    await this.weather.render();
    await this.weather.getForecast();
    await this.map.render();
  }
}




