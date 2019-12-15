export default class Wallpaper {
  constructor(photoArray) {
    this.photoArray = photoArray;
  }

  init(weather) {
    this.weather = weather;
  }

  async getWallpaper() {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ae54ce17ef1d06ba9a9aeb7a6e1579f&tags=
    ${this.getDayOrNight()}, ${this.weather.main}, ${this.getSeason()}&tag_mode=all&sort=relevance&per_page=20&content_type=4&format=json&nojsoncallback=1`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      this.photoArray = data.photos.photo;
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    const randomIndex = Math.floor(Math.random() * 19);
    const photo = this.photoArray[randomIndex];
    const imgUrl = `http://farm${photo.farm}.static.flickr.com/${
      photo.server}/${photo.id}_${photo.secret}_b.jpg`;
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${imgUrl}) `;
  }

  getNow() {
    const now = new Date();
    return now;
  }

  getDayOrNight() {
    if (this.getNow() > this.weather.sunrise && this.getNow() < this.weather.sunset) {
      return 'day';
    }
    return 'night';
  }

  getSeason() {
    if (this.getNow().getMonth() === 11 || this.getNow().getMonth() < 2) {
      return 'winter';
    } if (this.getNow().getMonth() > 1 && this.getNow().getMonth() < 5) {
      return 'spring';
    } if (this.getNow().getMonth() > 4 && this.getNow().getMonth() < 8) {
      return 'summer';
    } return 'fall';
  }
}
