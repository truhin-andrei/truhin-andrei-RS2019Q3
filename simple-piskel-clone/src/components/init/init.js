const eventClick = new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true,
});

localStorage.setItem('color', 'black');
localStorage.setItem('pixel.x', 4);
    localStorage.setItem('pixel.y', 4);

function madeToolActive(tool) {
  activeTool = document.getElementById(tool);
  activeTool.dispatchEvent(eventClick);
  localStorage.setItem('tool', tool);
}

// предустановка сохранёных значений после перезагрузки
if (localStorage.getItem('tool')) {
  activeTool = document.getElementById(localStorage.getItem('tool'));
  activeTool.dispatchEvent(eventClick);
} else {
  madeToolActive('pencil');
}

if (localStorage.getItem('color')) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('prevColor'));
  document.body.style.setProperty('--color', localStorage.getItem('color'));
}

// if (localStorage.getItem('image')) {
//   restoreImage();
// }

if (localStorage.getItem('imgType')) {
  activeTool = document.getElementById(localStorage.getItem('imgType'));
  activeTool.classList.add('panel-tools--active');
} else {
  activeTool = document.getElementById('four');
  activeTool.classList.add('panel-tools--active');
  localStorage.setItem('imgType', 'four');
}
