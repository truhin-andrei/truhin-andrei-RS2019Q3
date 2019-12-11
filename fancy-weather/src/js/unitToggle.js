import {convertFtoC, convertCtoF} from './func.js';

export default class unitToggle{
  constructor(){
    this.unit = localStorage.getItem('unit');
  }

  init(){

  }

  toggle(){
    const btnC = document.getElementById('btnC');
    const btnF = document.getElementById('btnF');

    let newUnit = (localStorage.getItem('unit') === 'C') ? 'F' : 'C';
    localStorage.setItem('unit', newUnit);
    btnC.classList.toggle('btn__deg--active');
    btnF.classList.toggle('btn__deg--active');
  }

  reRender(){

  }
}