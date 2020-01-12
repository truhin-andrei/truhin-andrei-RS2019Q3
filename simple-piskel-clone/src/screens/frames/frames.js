import {canvas} from '../canvas/canvas';
const framesList = document.getElementById('framesList');
const addFrameBtn = document.getElementById('addFrameBtn');

function addFrame() {
  const img = new Image();
  img.src = canvas.toDataURL();
  
  img.setAttribute('width', localStorage.getItem('canvasSize'));
  img.setAttribute('height', localStorage.getItem('canvasSize'));
  let btn = document.createElement('button');
  btn.innerText = 'X';
  btn.classList.add('deleteBtn');
  let div = document.createElement('div');
  div.classList.add('frames__frame');
  div.append(img);
  div.append(btn);

  framesList.insertAdjacentElement('beforeend', div);
}

function removeFrame() {
  
  if (event.target.classList.contains('deleteBtn')){
    console.dir(event.target.parentNode);
    event.target.parentNode.remove();
  }
}

addFrameBtn.addEventListener('click', addFrame);
framesList.addEventListener('click', removeFrame);