import {tools} from '../../screens/tools/tools'

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

// предустановка сохранёных значений после перезагрузки
if (localStorage.getItem('tool')) {
  //activeTool = document.getElementById(localStorage.getItem('tool'));
  //activeTool.dispatchEvent(eventClick);
  madeToolActive(localStorage.getItem('tool'));
} else {
  madeToolActive('pencil');
}

if (localStorage.getItem('color')) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('prevColor'));
  document.body.style.setProperty('--color', localStorage.getItem('color'));
}

// const panelTools = document.getElementById('tools');
// panelTools.addEventListener('eventClick', tools);

// if (localStorage.getItem('image')) {
//   restoreImage();
// }

// if (localStorage.getItem('imgType')) {
//   activeTool = document.getElementById(localStorage.getItem('imgType'));
//   activeTool.classList.add('panel-tools--active');
// } else {
//   activeTool = document.getElementById('four');
//   activeTool.classList.add('panel-tools--active');
//   localStorage.setItem('imgType', 'four');
// }
