import { getDict } from './language';

export default function pageRender() {
  const page = document.querySelector('body');
  const dict = getDict();

  page.innerHTML = ` <div class="container">
<div class="control-panel">
  <div class="btn">
    <button id="reloadBtn" class="btn__reload">              
        <svg id="reloader" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id=""  d="M14.0492 23.7003C13.9314 22.6417 14.0296 21.6198 14.2966 20.6753C15.1841 17.5362 17.9684 15.2278 21.2711 15.1871V13.1351C21.2711 13.0211 21.4086
           12.96 21.4989 13.0292L25.5713 16.1316C25.638 16.1845 25.638 16.2904 25.5713 16.3392L21.5028 19.4416C21.4086 19.5108 21.275 19.4498 21.275 19.3358V17.2879C19.1034
            17.3245 17.2498 18.7129 16.4526 20.6753C16.1502 21.4162 15.997 22.2346 16.0402 23.0936C16.0991 24.2743 16.5272 25.3614 17.2027 26.2408C17.5639 26.709 17.4775 27.393
             17.0102 27.7472C16.5665 28.0851 15.946 27.9915 15.6043 27.5436C14.7679 26.4607 14.2102 25.1415 14.0492 23.7003ZM25.8069 19.7592C26.4863 20.6345 26.9144 21.7257
              26.9693 22.9064C27.0125 23.7695 26.8554 24.5878 26.557 25.3247C25.7598 27.2871 23.9062 28.6796 21.7345 28.7121V26.6642C21.7345 26.5502 21.5971 26.4892 21.5067
               26.5584L17.4344 29.6607C17.3676 29.7137 17.3676 29.8195 17.4344 29.8684L21.5028 32.9708C21.5971 33.04 21.7306 32.9789 21.7306 32.8649V30.8129C25.0333 30.7763
                27.8215 28.4678 28.7051 25.3247C28.9721 24.3802 29.0664 23.3583 28.9525 22.2997C28.7954 20.8585 28.2378 19.5393 27.4013 18.4564C27.0557 18.0085 26.4392
                 17.9149 25.9954 18.2528C25.532 18.6 25.4 19.291 25.8069 19.7592Z" fill="white"/>
        </svg>
    </button>
    <select id="selectLang" class="btn__lang">
        <option value=”En”>En</option>                   
        <option value=”Ru”>Ru</option>                                      
    </select>
    <div  id="btnDeg" class="btn__deg-wrap">
        <button id="btnC" class="btn__deg-c">C</button><button id="btnF" class="btn__deg-f">F</button>
    </div>    
  </div>
  <form action="#" class="search">
    <input id="searchInput" type="text" class="search__input" pattern="[A-Za-zА-Яа-яЁё]" placeholder="${dict[5]}">
    <button id="audioSearchBtn" class="search__btn--audio">v</button>
    <button id="searchBtn" class="search__btn">${dict[6]}</button>
  </form>
</div>
<div class="info">
  <div class="weather">
     
    <div class="location"><span id="city"></span><span id="country"></span> </div>
    <div id="date" class="date"><span id="day"></span> <span id="date"></span> <span id="month"></span> 
        <span id="time"></span></div>
    <div class="forecast">
        <div class="forecast__deg"><span id="degToday"></span>&deg;</div>
        <div class="forecast__desc">
            <div id="cast" class="forecast__cloud">overcast</div>
            <div class="pressure">${dict[0]}: <span id="apparentTemp"></span>&deg;</div>
            <div class="wind">${dict[1]}: <span id="wind"></span>m/s </div>
            <div class="humidity">${dict[2]}: <span id="humidity"></span>%</div>
        </div>
    </div>
    <div class="next-forecast">
        <div class="next-forecast__day"><span class="nextDay"></span> <span id="nextForecast1" class="next-forecast__degr"></span></div>
        <div class="next-forecast__day"><span class="nextDay"></span> <span id="nextForecast2" class="next-forecast__degr"></span></div>
        <div class="next-forecast__day"><span class="nextDay"></span> <span id="nextForecast3" class="next-forecast__degr"></span></div>
    </div>
</div>
<div class="position">       
        <div id="map" class="map"></div>
        <div class="latitude"><span class="latitude__name">${dict[3]}: </span><span id="latitude" class="latitude__value">53&deg;54&prime;</span></div>
        <div class="longitude"><span class="longitude__name">${dict[4]}: </span><span id="longitude" class="longitude__value">53&deg;54&prime;</span></div>    
</div>
</div>

  
</div>
<div id="screenSaver" class="screen-saver">
<div id="fountainG" >
  <div id="fountainG_1" class="fountainG"></div>
  <div id="fountainG_2" class="fountainG"></div>
  <div id="fountainG_3" class="fountainG"></div>
  <div id="fountainG_4" class="fountainG"></div>
  <div id="fountainG_5" class="fountainG"></div>
  <div id="fountainG_6" class="fountainG"></div>
  <div id="fountainG_7" class="fountainG"></div>
  <div id="fountainG_8" class="fountainG"></div>
</div>
</div>`;
}
