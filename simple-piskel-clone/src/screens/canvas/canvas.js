 export const canvas = document.getElementById('canvas');
export const context = canvas.getContext('2d');
// saving canvas
let data = localStorage.getItem('image');

function saveImage() {
  data = canvas.toDataURL();
  localStorage.setItem('image', data);
}
// load canvas after reload the page


canvas.addEventListener('mouseleave', saveImage);




