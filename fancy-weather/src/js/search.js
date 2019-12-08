export class Search{
  init(location){
    this.location = location;
  }

  searchApply() {
    const searchInput = document.getElementById('searchInput');
    let searchCity = searchInput.value;
    this.location.getDataBySearch(searchCity);
  }
}




