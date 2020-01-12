import {getFPS} from './fps';
const previewScreen = document.getElementById('previewScreen');
const previewBtn = document.getElementById('previewBtn');
let numFrame = 0;
let fps = getFPS();

function draw(frame){
  previewScreen.innerHTML = frame.outerHTML;
  numFrame += 1;
}

function getFrames(){
  return document.querySelectorAll('.frames__frame');
}

let  fpsInterval, startTime, now, then, elapsed;

function startAnimating() {
   
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
  fps = getFPS();
  fpsInterval = 1000 / fps;
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

      let frames = getFrames();
      if (frames.length - 1 < numFrame) {
        numFrame = 0;
      }
      draw(frames[numFrame]);

  }
}

previewBtn.addEventListener('click', startAnimating);