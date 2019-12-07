export class Wallpaper{
  init(weather){
    this.weather = weather;
  }

  async getWallpaper(){
    //const request = search.value.split(' ').join(',');
    console.log(this.getDayOrNight(), this.weather.main, this.getSeason());
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ae54ce17ef1d06ba9a9aeb7a6e1579f&tags=
    ${this.getDayOrNight(), this.weather.main, this.getSeason()}&tag_mode=all&sort=relevance&per_page=10&content_type=4&format=json&nojsoncallback=1`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      localStorage.setItem("favoriteColor", "чёрный");
      let photo = data.photos.photo[0];
     let img_url = "http://farm" + photo.farm + ".static.flickr.com/" + 
        photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg";
  
        this.render(img_url);
    } catch (e) {
      throw new Error(e);
    }
  }

  render(img){
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${img}) ` ;
  }

  getNow(){
    let now = new Date();
    return now;
  }

  getDayOrNight(){ 
    if(this.getNow() > this.weather.sunrise && this.getNow() < this.weather.sunset){
      return 'day';
    }
    return 'night';
  }

  getSeason(){
    if(this.getNow().getMonth() === 11 || this.getNow().getMonth() < 2){
      return 'winter';
    }else if (this.getNow().getMonth() > 1 && this.getNow().getMonth() < 5){
      return 'spring';
    }else if (this.getNow().getMonth() > 4 && this.getNow().getMonth() < 8){
      return 'summer';
    }else
    return 'fall';
  }
}