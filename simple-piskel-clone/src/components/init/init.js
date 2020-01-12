import { context } from '../../screens/canvas/canvas';

const eventClick = new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true,
});

function madeToolActive(tool) {
  const activeTool = document.getElementById(tool);
  activeTool.dispatchEvent(eventClick);
  localStorage.setItem('tool', tool);
}

function restoreImage() {
  const img = new Image();
  img.src = localStorage.getItem('image');
  img.onload = function () {
    context.drawImage(img, 0, 0);
  };
}

// предустановка сохранёных значений после перезагрузки
if (localStorage.getItem('tool')) {
  madeToolActive(localStorage.getItem('tool'));
} else {
  madeToolActive('pencil');
}

if (localStorage.getItem('color')) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('prevColor'));
  document.body.style.setProperty('--color', localStorage.getItem('color'));
}

if (localStorage.getItem('image')) {
  restoreImage();
}
