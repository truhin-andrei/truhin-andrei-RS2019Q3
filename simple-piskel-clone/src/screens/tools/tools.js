import {picker} from './picker/picker';
import {bucket} from './bucket/bucket';
import {pencilUp, pencilDown} from './pencil/pencil';
import {swapColor, colorSwitch} from './../colorPanel/colorPanel';


const panelTools = document.getElementById('tools');

function tools(event) {
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
      //canvas.removeEventListener('mousemove', draw);
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
  }
}

panelTools.addEventListener('click', tools);
panelColor.addEventListener('click', colorSwitch);