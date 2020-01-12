const previewFps = document.getElementById('previewFps');
const fpsLabel = document.getElementById('fpsLabel');

function fpsChange(event) {
  fpsLabel.innerText = `${event.target.value}fps`;
}

export default function getFPS() {
  return previewFps.value;
}

previewFps.addEventListener('change', fpsChange);
