import {startRecording } from './export/export';
import {getFPS} from './fps';
export const previewScreen = document.getElementById('previewScreen');
const contextPreview = previewScreen.getContext('2d');
const previewBtn = document.getElementById('previewBtn');
let numFrame = 0;
let fps = getFPS();
let requestID;

function clearCanvas(canvas){
  canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height);
}

function draw(frame){
  if (numFrame === 0) {
    clearCanvas(previewScreen);
  }
  contextPreview.drawImage(frame.firstChild,0,0, frame.firstChild.width, frame.firstChild.height);
  numFrame += 1;
}

function getFrames(){
  return document.querySelectorAll('.frames__frame');
}

let  fpsInterval, startTime, now, then, elapsed;

function startAnimating() {
  if (requestID){
    cancelAnimationFrame(requestID);
    previewBtn.innerText = 'Start';
    requestID = null;
    return;
  }
if(getFrames().length){
  previewBtn.innerText = 'Stop';
  then = Date.now();
  startTime = then;
  animate();
}
    
}

function animate() {
  fps = getFPS();
  fpsInterval = 1000 / fps;
  requestID = requestAnimationFrame(animate);
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