import { canvas } from '../canvas/canvas';

const framesList = document.getElementById('framesList');
const addFrameBtn = document.getElementById('addFrameBtn');

function addFrame() {
  const img = new Image();
  img.src = canvas.toDataURL();

  img.setAttribute('width', localStorage.getItem('canvasSize'));
  img.setAttribute('height', localStorage.getItem('canvasSize'));
  
  const div = document.createElement('div');
  div.classList.add('frames__frame');
  div.append(img);
  div.append(createBtn('deleteBtn'));
  div.append(createBtn('copyBtn'));
  framesList.insertAdjacentElement('beforeend', div);
}

function createBtn(className){
  const btn = document.createElement('button');
  btn.innerText = (className === 'deleteBtn')? 'X' : 'V';
  btn.classList.add(className);
  return btn;
}

function copyFrame(event) {
  if (event.target.classList.contains('copyBtn')) {
    event.target.parentNode.after(event.target.parentNode.cloneNode(true));
  }
}

function removeFrame(event) {
  if (event.target.classList.contains('deleteBtn')) {
    event.target.parentNode.remove();
  }
}

addFrameBtn.addEventListener('click', addFrame);
framesList.addEventListener('click', removeFrame);
framesList.addEventListener('click', copyFrame);