const previewScreen = document.getElementById('previewScreen');

const exportBtn = document.getElementById('exportBtn');
const videoContainer = document.getElementById('video');
let recording = false;

function exportAnim(blob) {
  const vid = document.createElement('video');
  vid.src = URL.createObjectURL(blob);
  vid.controls = true;
  vid.setAttribute('display', 'block');
  videoContainer.appendChild(vid);
  const a = document.createElement('a');
  a.download = 'anim.gif';
  a.href = vid.src;
  a.textContent = 'download gif';
  videoContainer.appendChild(a);
}

export default function startRecording() {
  recording = true;
  const chunks = [];
  const stream = previewScreen.captureStream();
  const rec = new MediaRecorder(stream);
  rec.ondataavailable = (e) => chunks.push(e.data);
  rec.onstop = () => {
    exportAnim(new Blob(chunks, { type: 'image/gif' }));
    recording = false;
  };
  rec.start();
  setTimeout(() => {
    rec.stop();
  }, 3000);
}

exportBtn.addEventListener('click', () => {
  if (!recording) {
    startRecording();
  }
});
