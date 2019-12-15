import { convertFtoC, convertCtoF } from './func.js';

export default class UnitToggle {
  constructor() {
    this.unit = localStorage.getItem('unit');
    this.btnC = document.getElementById('btnC');
    this.btnF = document.getElementById('btnF');
  }

  madeToggleBtnActive() {
    if (!localStorage.getItem('unit')) {
      this.btnC.classList.add('btn__deg--active');
    }
    (localStorage.getItem('unit') === 'C')
      ? this.btnC.classList.add('btn__deg--active') : this.btnF.classList.add('btn__deg--active');
  }

  toggleToC() {
    localStorage.setItem('unit', 'C');
    this.btnC.classList.add('btn__deg--active');
    this.btnF.classList.remove('btn__deg--active');
  }

  toggleToF() {
    localStorage.setItem('unit', 'F');
    this.btnF.classList.add('btn__deg--active');
    this.btnC.classList.remove('btn__deg--active');
  }

  reRender() {
    this.reRenderMain();
    this.reRenderForecast();
    this.reRenderApparentTemp();
  }

  reRenderMain() {
    const mainDeg = document.getElementById('degToday');
    const newDeg = (localStorage.getItem('unit') === 'F')
      ? convertFtoC(mainDeg.innerText) : convertCtoF(mainDeg.innerText);
    mainDeg.innerText = Math.round(newDeg);
  }

  reRenderApparentTemp() {
    const apparentTemp = document.getElementById('apparentTemp');
    const newApparentTemp = (localStorage.getItem('unit') === 'F')
      ? convertFtoC(apparentTemp.innerText) : convertCtoF(apparentTemp.innerText);
    apparentTemp.innerText = Math.round(newApparentTemp);
  }

  reRenderForecast() {
    const forecastEl = document.getElementsByClassName('next-forecast__degr');

    for (let i = 0; i < 3; i += 1) {
      if (localStorage.getItem('unit') === 'F') {
        forecastEl[i].innerText = Math.round(convertFtoC(parseInt(forecastEl[i].innerText, 10)));
      } else {
        forecastEl[i].innerText = Math.round(convertCtoF(parseInt(forecastEl[i].innerText, 10)));
      }
    }
  }
}
