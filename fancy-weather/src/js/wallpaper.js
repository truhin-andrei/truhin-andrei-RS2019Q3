export class Wallpaper{
  init(weather){
    this.weather = weather;
  }

  async getWallpaper(){
    //const request = search.value.split(' ').join(',');
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ae54ce17ef1d06ba9a9aeb7a6e1579f&tags=${'snow,day'}&tag_mode=all&sort=relevance&per_page=10&content_type=4&format=json&nojsoncallback=1`;
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

  checkDayOrNight(){
    let now = new Date();
  }
}