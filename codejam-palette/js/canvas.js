const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const four = document.getElementById('four');
const thirtyTwo = document.getElementById('thirty_two');
const picture = document.getElementById('picture');
const panelTools = document.getElementById('tools');
let colorSelector = document.getElementById('choseColor');
let color = localStorage.getItem('color');

if(localStorage.getItem('tool')){
  document.getElementById(localStorage.getItem('tool')).classList.add('panel-tools--active');
} else {
  document.getElementById('bucket').classList.add('panel-tools--active');
}
document.body.style.setProperty("--prevColor", localStorage.getItem('prevColor'));
document.body.style.setProperty("--color", localStorage.getItem('color'));


colorSelector.addEventListener("input", () => {
  localStorage.setItem('prevColor', localStorage.getItem('color'));
  document.body.style.setProperty("--prevColor", localStorage.getItem('color'));
  localStorage.setItem('color', event.srcElement.value);
  document.body.style.setProperty("--color", event.srcElement.value);
  color = localStorage.getItem('color');
});



four.addEventListener('click', () => fetch('./assets/json/4x4.json')
  .then((response) => response.json())
  .then((matrix) => {
    let dx = 0;
    let dy = 0;
    const width = canvas.width / matrix[0].length;
    const height = canvas.height / matrix.length;
    matrix.forEach((row) => {
      if (dx !== 0) dy += height;
      dx = 0;
      row.forEach((col) => {
        context.fillStyle = `#${col}`;
        context.fillRect(dx, dy, width, height);
        dx += width;
      });
    });
  }));

thirtyTwo.addEventListener('click', () => fetch('./assets/json/32x32.json')
  .then((response) => response.json())
  .then((matrix) => {
    let dx = 0;
    let dy = 0;
    const width = canvas.width / matrix[0].length;
    const height = canvas.height / matrix.length;
    matrix.forEach((row) => {
      if (dx !== 0) dy += height;
      dx = 0;
      row.forEach((col) => {
        context.fillStyle = `rgba(${col[0]}, ${col[1]}, ${col[2]}, ${col[3]})`;
        context.fillRect(dx, dy, width, height);
        dx += width;
      });
    });
  }));

picture.addEventListener('click', () => fetch('./assets/img/image.png')
  .then((response) => response.blob())
  .then(createImageBitmap)
  .then((image) => {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  }));

function bucket() {
  
  context.fillStyle = color;
  context.fillRect(0, 0, 512, 512);
  
}

function tools(event){
  if(localStorage.getItem('tool')){
    document.getElementById(localStorage.getItem('tool')).classList.remove('panel-tools--active');
  }
  localStorage.setItem('tool', event.target.id);
  event.target.classList.add('panel-tools--active');
  console.log()
}

canvas.addEventListener('click', bucket);
panelTools.addEventListener('click', tools);