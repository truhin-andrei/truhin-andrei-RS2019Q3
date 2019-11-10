const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const four = document.getElementById('four');
const thirtyTwo = document.getElementById('thirty_two');
const picture = document.getElementById('picture');
const panelTools = document.getElementById('tools');
const panelColor = document.getElementById('panelColor');
const colorSelector = document.getElementById('choseColor');
let color = localStorage.getItem('color');
const sample = document.getElementById('sample');

let activeTool;

const eventClick = new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true,
});

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

function madeToolActive(tool) {
  activeTool = document.getElementById(tool);
  activeTool.dispatchEvent(eventClick);
  localStorage.setItem('tool', tool);
}

// предустановка сохранёных значений после перезагрузки
if (localStorage.getItem('tool')) {
  activeTool = document.getElementById(localStorage.getItem('tool'));
  activeTool.dispatchEvent(eventClick);
} else {
  madeToolActive('pencil');
}

if (localStorage.getItem('color')) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('prevColor'));
  document.body.style.setProperty('--color', localStorage.getItem('color'));
}

if (localStorage.getItem('image')) {
  restoreImage();
}

if (localStorage.getItem('imgType')) {
  activeTool = document.getElementById(localStorage.getItem('imgType'));
  activeTool.classList.add('panel-tools--active');
} else {
  activeTool = document.getElementById('four');
  activeTool.classList.add('panel-tools--active');
  localStorage.setItem('imgType', 'four');
}

function swapColor(event, newColor = sample.style.background) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('color'));
  localStorage.setItem('prevColor', color);
  color = newColor;
  document.body.style.setProperty('--color', color);
  localStorage.setItem('color', color);
}

function colorSwitch(event) {
  if (event.target.id === 'red') {
    swapColor(null, '#F74141');
  } else if (event.target.id === 'blue') {
    swapColor(null, '#41B6F7');
  } else if (event.target.id === 'prevColor') {
    swapColor(null, localStorage.getItem('prevColor'));
  }
}

function draw(event) {
  let x = event.layerX;
  let y = event.layerY;
  const pixelX = localStorage.getItem('pixel.x');
  const pixelY = localStorage.getItem('pixel.y');
  x = Math.ceil(x / pixelX) * pixelX - pixelX;
  y = Math.ceil(y / pixelY) * pixelY - pixelY;
  context.fillStyle = localStorage.getItem('color');
  context.fillRect(x, y, pixelX, pixelY);
}

function pencilDown() {
  canvas.addEventListener('mousemove', draw);
}
function pencilUp() {
  canvas.removeEventListener('mousemove', draw);
}

// инструменты

function bucket() {
  context.fillStyle = color;
  context.fillRect(0, 0, 512, 512);
}

function picker(event) {
  const sampleData = context.getImageData(event.layerX, event.layerY, 1, 1);
  const sampleColorData = sampleData.data;
  const sampleColor = `rgba(${sampleColorData[0]},${sampleColorData[1]},${
    sampleColorData[2]},${sampleColorData[3]})`;
  sample.style.background = sampleColor;
}

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
      canvas.removeEventListener('mousemove', draw);
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
canvas.addEventListener('mouseleave', saveImage);
// keyboard control
document.addEventListener('keypress', (event) => {
  if (event.code === 'KeyB') {
    madeToolActive('bucket');
  } else if (event.code === 'KeyP') {
    madeToolActive('pencil');
  } else if (event.code === 'KeyC') {
    madeToolActive('picker');
  }
});

// выбор цвета
colorSelector.addEventListener('input', (event) => {
  localStorage.setItem('prevColor', localStorage.getItem('color'));
  document.body.style.setProperty('--prevColor', localStorage.getItem('color'));
  localStorage.setItem('color', event.srcElement.value);
  document.body.style.setProperty('--color', event.srcElement.value);
  color = localStorage.getItem('color');
});

// Отрисовка картинок

four.addEventListener('click', () => fetch('./assets/json/4x4.json')
  .then((response) => response.json())
  .then((matrix) => {
    let dx = 0;
    let dy = 0;
    const width = canvas.width / matrix[0].length;
    const height = canvas.height / matrix.length;
    localStorage.setItem('pixel.x', width);
    localStorage.setItem('pixel.y', height);
    document.getElementById(localStorage.getItem('imgType')).classList.remove('panel-tools--active');
    localStorage.setItem('imgType', 'four');
    four.classList.add('panel-tools--active');
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
    localStorage.setItem('pixel.x', width);
    localStorage.setItem('pixel.y', height);
    document.getElementById(localStorage.getItem('imgType')).classList.remove('panel-tools--active');
    localStorage.setItem('imgType', 'thirty_two');
    thirtyTwo.classList.add('panel-tools--active');
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
    localStorage.setItem('pixel.x', 1);
    localStorage.setItem('pixel.y', 1);
    document.getElementById(localStorage.getItem('imgType')).classList.remove('panel-tools--active');
    localStorage.setItem('imgType', 'picture');
    picture.classList.add('panel-tools--active');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  }));
