const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// сохранение canvas
let data = localStorage.getItem('image');

function saveImage() {
  data = canvas.toDataURL();
  localStorage.setItem('image', data);
}

function restoreImage() {
  const img = new Image();
  img.src = localStorage.getItem('image');
  img.onload = function () {
    context.drawImage(img, 0, 0);
  };
}


