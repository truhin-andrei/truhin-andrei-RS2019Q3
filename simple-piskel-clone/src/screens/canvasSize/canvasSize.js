import { canvas, context } from '../canvas/canvas';

const canvasSize = document.getElementById('canvasSize');

if (!localStorage.getItem('canvasSize')) {
  localStorage.setItem('canvasSize', canvasSize.value);
}

function saveImage() {
  const data = canvas.toDataURL();
  localStorage.setItem('image', data);
}

function restoreImage(event) {
  const img = new Image();
  img.src = localStorage.getItem('image');
  const newSide = canvas.width / (event.target.value / localStorage.getItem('canvasSize'));
  img.onload = function () {
    context.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, newSide, newSide);
  };
}

function setCanvasSize(event) {
  saveImage();

  context.clearRect(0, 0, canvas.width, canvas.height);
  restoreImage(event);
  localStorage.setItem('canvasSize', event.target.value);
}

canvasSize.addEventListener('change', setCanvasSize);

const optionItem = canvasSize.getElementsByTagName('option');

if (localStorage.getItem('canvasSize')) {
  for (let i = 0; i < optionItem.length; i += 1) {
    if (optionItem[i].value === localStorage.getItem('canvasSize')) optionItem[i].selected = true;
  }
} else {
  for (let i = 0; i < optionItem.length; i += 1) {
    if (optionItem[i].value === '128') optionItem[i].selected = true;
  }
}
