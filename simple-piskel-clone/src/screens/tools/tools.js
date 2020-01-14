import picker from './picker/picker';
import bucket from './bucket/bucket';
import { pencilUp, pencilDown } from './pencil/pencil';
import { eraserUp, eraserDown } from './eraser/eraser';
import { swapColor, colorSwitch } from '../colorPanel/colorPanel';
import { canvas } from '../canvas/canvas';

const panelColor = document.getElementById('panelColor');
const panelTools = document.getElementById('tools');

function tools(event) {
  if (event.target.id !== 'pencilSize' && event.target.id !== 'eraserSize') {
    if (localStorage.getItem('tool')) {
      document.getElementById(localStorage.getItem('tool')).classList.remove('panel-tools--active');
      if (localStorage.getItem('tool') === 'bucket') {
        canvas.removeEventListener('click', bucket);
      } else if (localStorage.getItem('tool') === 'picker') {
        canvas.removeEventListener('mousemove', picker);
        canvas.removeEventListener('click', swapColor);
      } else if (localStorage.getItem('tool') === 'pencil') {
        canvas.removeEventListener('mousedown', pencilDown);
        canvas.removeEventListener('mouseup', pencilUp);
      } else if (localStorage.getItem('tool') === 'eraser') {
        canvas.removeEventListener('mousedown', eraserDown);
        canvas.removeEventListener('mouseup', eraserUp);
      }
    }
    localStorage.setItem('tool', event.target.id);
    event.target.classList.add('panel-tools--active');

    if (localStorage.getItem('tool') === 'bucket') {
      canvas.addEventListener('click', bucket);
    } else if (localStorage.getItem('tool') === 'picker') {
      canvas.addEventListener('mousemove', picker);
      canvas.addEventListener('click', swapColor);
    } else if (localStorage.getItem('tool') === 'pencil') {
      canvas.addEventListener('mousedown', pencilDown);
      canvas.addEventListener('mouseup', pencilUp);
    } else if (localStorage.getItem('tool') === 'eraser') {
      canvas.addEventListener('mousedown', eraserDown);
      canvas.addEventListener('mouseup', eraserUp);
    }
  }
}

const eventClick = new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true,
});

export function madeToolActive(tool) {
  const activeTool = document.getElementById(tool);
  activeTool.dispatchEvent(eventClick);
  localStorage.setItem('tool', tool);
}

panelTools.addEventListener('click', tools);
panelColor.addEventListener('click', colorSwitch);

// keyboard control
document.addEventListener('keypress', (event) => {
  if (event.code === 'KeyB') {
    madeToolActive('bucket');
  } else if (event.code === 'KeyP') {
    madeToolActive('pencil');
  } else if (event.code === 'KeyC') {
    madeToolActive('picker');
  }else if (event.code === 'KeyE') {
    madeToolActive('eraser');
  }
});
