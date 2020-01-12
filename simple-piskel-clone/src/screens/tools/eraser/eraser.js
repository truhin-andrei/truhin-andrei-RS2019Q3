import {canvas, context} from '../../canvas/canvas';

const eraserSize = document.getElementById('eraserSize');

function getEraserSize(){
  return eraserSize.value;
}

function erase(event) {
  let x = event.layerX;
  let y = event.layerY;
  const canvasSize = localStorage.getItem('canvasSize');
  const canvasRatio = canvas.width/canvasSize;
  x = Math.ceil(x / canvasRatio) * canvasRatio - canvasRatio;
  y = Math.ceil(y / canvasRatio) * canvasRatio - canvasRatio;
  context.clearRect(x, y, canvasRatio * getEraserSize(), canvasRatio * getEraserSize());
}

export function eraserDown() {
  canvas.addEventListener('mousemove', erase);
}
export function eraserUp() {
  canvas.removeEventListener('mousemove', erase);
}