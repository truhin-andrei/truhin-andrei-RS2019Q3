import { canvas } from '../canvas/canvas';

const framesList = document.getElementById('framesList');
const addFrameBtn = document.getElementById('addFrameBtn');

function addFrame() {
  const img = new Image();
  img.src = canvas.toDataURL();

  img.setAttribute('width', localStorage.getItem('canvasSize'));
  img.setAttribute('height', localStorage.getItem('canvasSize'));
  const btn = document.createElement('button');
  btn.innerText = 'X';
  btn.classList.add('deleteBtn');
  const div = document.createElement('div');
  div.classList.add('frames__frame');
  div.append(img);
  div.append(btn);

  framesList.insertAdjacentElement('beforeend', div);
}

function removeFrame(event) {
  if (event.target.classList.contains('deleteBtn')) {
    event.target.parentNode.remove();
  }
}

addFrameBtn.addEventListener('click', addFrame);
framesList.addEventListener('click', removeFrame);
