export default class Search {
  init(location, weather, wallpaper, map, dateNow) {
    this.location = location;
    this.weather = weather;
    this.wallpaper = wallpaper;
    this.map = map;
    this.dateNow = dateNow;
  }

  async searchApply() {
    const searchInput = document.getElementById('searchInput');
    let searchCity = '';
    if (!searchInput.value.match(/\d/g)) {
      searchCity = searchInput.value;
    }
    if (searchCity === '') {
      return;
    }
    searchInput.value = '';

    this.location.getDataBySearch(searchCity);
    await this.weather.getWeather(searchCity);
    await this.wallpaper.getWallpaper();
    this.wallpaper.render();
    await this.weather.render();
    await this.weather.getForecast();
    this.map.reRender();
    this.dateNow.render(this.weather.timeZone);
  }
}
