const canvasSize = document.getElementById('canvasSize');
import {canvas, context} from '../canvas/canvas';

function setCanvasSize(event) {

  saveImage() ;

  context.clearRect(0, 0, canvas.width, canvas.height);
  restoreImage() ;
  localStorage.setItem('canvasSize', event.target.value);
}

function saveImage() {
 const data = canvas.toDataURL();
  localStorage.setItem('image', data);
}

function restoreImage() {
  const img = new Image();
  img.src = localStorage.getItem('image');
  const newSide = canvas.width / (event.target.value /localStorage.getItem('canvasSize'));
  img.onload = function () {
    context.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, newSide, newSide);
  };
}

canvasSize.addEventListener('change', setCanvasSize);

const optionItem =canvasSize.getElementsByTagName('option');

if (localStorage.getItem('canvasSize')) {
  for (let i = 0; i < optionItem.length; i++) {
      if (optionItem[i].value === localStorage.getItem('canvasSize')) optionItem[i].selected = true;
  }
} else {
  for (let i = 0; i < optionItem.length; i++) {
    if (optionItem[i].value === '128') optionItem[i].selected = true;
}
}