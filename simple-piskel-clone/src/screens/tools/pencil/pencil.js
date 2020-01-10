import {canvas, context} from '../../canvas/canvas';

function draw(event) {
  let x = event.layerX;
  let y = event.layerY;
  const pixelX = localStorage.getItem('pixel.x');
  const pixelY = localStorage.getItem('pixel.y');
  console.log(pixelX, pixelY, localStorage.getItem('color'));
  x = Math.ceil(x / pixelX) * pixelX - pixelX;
  y = Math.ceil(y / pixelY) * pixelY - pixelY;
  context.fillStyle = localStorage.getItem('color');
  context.fillRect(x, y, pixelX, pixelY);
}

export function pencilDown() {
  canvas.addEventListener('mousemove', draw);
}
export function pencilUp() {
  canvas.removeEventListener('mousemove', draw);
}