import {canvas, context} from '../../canvas/canvas';

const pencilSize = document.getElementById('pencilSize');

function getPencilSize(){
  return pencilSize.value;
}

function draw(event) {
  let x = event.layerX;
  let y = event.layerY;
  const canvasSize = localStorage.getItem('canvasSize');
  const realCanvasSize = 512;
  const canvasRatio = realCanvasSize/canvasSize;
  x = Math.ceil(x / canvasRatio) * canvasRatio - canvasRatio;
  y = Math.ceil(y / canvasRatio) * canvasRatio - canvasRatio;
  context.fillStyle = localStorage.getItem('color');
  context.fillRect(x, y, canvasRatio * getPencilSize(), canvasRatio * getPencilSize());
}

export function pencilDown() {
  canvas.addEventListener('mousemove', draw);
}
export function pencilUp() {
  canvas.removeEventListener('mousemove', draw);
}