const panelColor = document.getElementById('panelColor');
const colorSelector = document.getElementById('choseColor');
let color = localStorage.getItem('color');
const sample = document.getElementById('sample');


function swapColor(event, newColor = sample.style.background) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('color'));
  localStorage.setItem('prevColor', color);
  color = newColor;
  document.body.style.setProperty('--color', color);
  localStorage.setItem('color', color);
}

function colorSwitch(event) {
  if (event.target.id === 'red') {
    swapColor(null, '#F74141');
  } else if (event.target.id === 'blue') {
    swapColor(null, '#41B6F7');
  } else if (event.target.id === 'prevColor') {
    swapColor(null, localStorage.getItem('prevColor'));
  }
}

// выбор цвета
colorSelector.addEventListener('input', (event) => {
  localStorage.setItem('prevColor', localStorage.getItem('color'));
  document.body.style.setProperty('--prevColor', localStorage.getItem('color'));
  localStorage.setItem('color', event.srcElement.value);
  document.body.style.setProperty('--color', event.srcElement.value);
  color = localStorage.getItem('color');
});