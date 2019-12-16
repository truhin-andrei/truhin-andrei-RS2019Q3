import { convertFtoC, convertCtoF } from './func';

export default class UnitToggle {
  constructor() {
    this.unit = localStorage.getItem('unit');
    this.btnC = document.getElementById('btnC');
    this.btnF = document.getElementById('btnF');
    this.mainDeg = document.getElementById('degToday');
    this.apparentTemp = document.getElementById('apparentTemp');
    this.forecastEl = document.getElementsByClassName('next-forecast__degr');
  }

  madeToggleBtnActive() {
    if (!localStorage.getItem('unit')) {
      this.btnC.classList.add('btn__deg--active');
    }
    if (localStorage.getItem('unit') === 'C') {
      this.btnC.classList.add('btn__deg--active');
    } else {
      this.btnF.classList.add('btn__deg--active');
    }
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
    const newDeg = (localStorage.getItem('unit') === 'F')
      ? convertFtoC(this.mainDeg.innerText) : convertCtoF(this.mainDeg.innerText);
    this.mainDeg.innerText = Math.round(newDeg);
  }

  reRenderApparentTemp() {
    const newApparentTemp = (localStorage.getItem('unit') === 'F')
      ? convertFtoC(this.apparentTemp.innerText) : convertCtoF(this.apparentTemp.innerText);
    this.apparentTemp.innerText = Math.round(newApparentTemp);
  }

  reRenderForecast() {
    let newTemp;
    for (let i = 0; i < 3; i += 1) {
      if (localStorage.getItem('unit') === 'F') {
        newTemp = convertFtoC(parseInt(this.forecastEl[i].innerText, 10));
        this.forecastEl[i].innerText = Math.round(newTemp);
      } else {
        newTemp = convertCtoF(parseInt(this.forecastEl[i].innerText, 10));
        this.forecastEl[i].innerText = Math.round(newTemp);
      }
    }
  }
}
