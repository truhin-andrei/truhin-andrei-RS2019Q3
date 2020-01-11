import {canvas, context} from '../../canvas/canvas';

function draw(event) {
  let x = event.layerX;
  let y = event.layerY;
  const canvasSize = localStorage.getItem('canvasSize');
  const realCanvasSize = 512;
  const canvasRatio = realCanvasSize/canvasSize;
// todo set canvasSize 
  x = Math.ceil(x / canvasRatio) * canvasRatio - canvasRatio;
  y = Math.ceil(y / canvasRatio) * canvasRatio - canvasRatio;
  context.fillStyle = localStorage.getItem('color');
  context.fillRect(x, y, canvasRatio, canvasRatio);
}

export function pencilDown() {
  canvas.addEventListener('mousemove', draw);
}
export function pencilUp() {
  canvas.removeEventListener('mousemove', draw);
}