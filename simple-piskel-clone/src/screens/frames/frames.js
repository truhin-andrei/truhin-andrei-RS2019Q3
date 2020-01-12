import {canvas} from '../canvas/canvas';
const framesList = document.getElementById('framesList');
const addFrameBtn = document.getElementById('addFrameBtn');

function addFrame() {
  const img = new Image();
  img.src = canvas.toDataURL();
  
  img.setAttribute('width', localStorage.getItem('canvasSize'));
  img.setAttribute('height', localStorage.getItem('canvasSize'));
  let div = document.createElement('div');
  div.classList.add('frames__frame');
  div.append(img);
  framesList.insertAdjacentElement('beforeend', div);
}

addFrameBtn.addEventListener('click', addFrame);