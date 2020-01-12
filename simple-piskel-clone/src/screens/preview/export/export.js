import {previewScreen} from '../preview';
const exportBtn = document.getElementById('exportBtn');
const videoContainer = document.getElementById('video');
let recording = false; 

export function startRecording() {
  recording = true;
  const chunks = [];
  const stream = previewScreen.captureStream();
 const rec = new MediaRecorder(stream); 
  rec.ondataavailable = e => chunks.push(e.data);
  rec.onstop = e => {
    exportVid(new Blob(chunks, {type: 'image/gif'})); 
    recording = false;
  }
  rec.start();
  setTimeout(()=>{
    rec.stop();  console.dir(stream); console.dir(rec);}, 3000);
}

function exportVid(blob) {
  const vid = document.createElement('video');
  vid.src = URL.createObjectURL(blob);
  vid.controls = true;
  videoContainer.appendChild(vid);
  const a = document.createElement('a');
  a.download = 'myvid.gif';
  a.href = vid.src;
  a.textContent = 'download the video';
  videoContainer.appendChild(a);
}

exportBtn.addEventListener('click', () => {
  if (!recording){
    startRecording() ;
  }

})