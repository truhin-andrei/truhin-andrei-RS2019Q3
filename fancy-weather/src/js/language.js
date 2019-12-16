export function getDict() {
  if (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'En') {
    return ['Feels like', 'Wind', 'Humidity', 'Latitude', 'Longitude', 'Search city', 'Search'];
  }
  return ['Ощущается', 'Ветер', 'Влажность', 'Широта', 'Долгота', 'Введите город', 'Поиск'];
}

export function renderPageWithNewLang() {
  const dict = getDict();
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const pressure = document.querySelector('.pressure');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const latitude = document.querySelector('.latitude__name');
  const longitude = document.querySelector('.longitude__name');

  [searchInput.placeholder, searchBtn.innerHTML] = [dict[5], dict[6]];
  pressure.outerHTML = `<div class="pressure">${dict[0]}: <span id="apparentTemp"></span>&deg;</div>`;

  wind.outerHTML = `<div class="wind">${dict[1]}: <span id="wind"></span>m/s </div>`;
  humidity.outerHTML = `<div class="humidity">${dict[2]}: <span id="humidity"></span>%</div>`;
  latitude.outerHTML = `<span class="latitude__name">${dict[3]}: </span>`;
  longitude.outerHTML = `<span class="longitude__name">${dict[4]}: </span>`;
}

export function langToggleController() {
  const selectLang = document.getElementById('selectLang');
  if (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'En') {
    selectLang.options[0].innerText = 'En';
    selectLang.options[1].innerText = 'Ru';
    selectLang.defaultSelected = 0;
    selectLang.options[0].selected = true;
  } else {
    selectLang.options[0].innerText = 'Ru';
    selectLang.options[1].innerText = 'En';
    selectLang.defaultSelected = 0;
    selectLang.options[0].selected = true;
  }
}
