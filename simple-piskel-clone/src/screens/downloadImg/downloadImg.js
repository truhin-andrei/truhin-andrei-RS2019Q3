import { canvas, context } from '../canvas/canvas';

const downloadBtn = document.getElementById('downloadBtn');

export function getScale(w, h, canvas) {
  return (w > h) ? ((w / canvas.width)) : ((h / canvas.height));
}

function downloadImg(e) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      const scale = getScale(img.width, img.height);
      const dw = (img.width / scale);
      const dh = (img.height / scale);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, dw, dh);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

downloadBtn.addEventListener('change', downloadImg);
