import {canvas, context} from '../canvas/canvas';
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('change', downloadImg);

function downloadImg(e){
      let reader = new FileReader();
      reader.onload = function(event){
          let img = new Image();
          img.onload = function(){
          const scale = getScale(img.width, img.height);
          const dw = (img.width / scale);
          const dh = (img.height / scale);
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, dw, dh);
          }
          img.src = event.target.result;
      }
          reader.readAsDataURL(e.target.files[0]);    
  }
  function getScale(w, h) {
  return (w > h) ? ((w / canvas.width)) : ((h / canvas.height));
}
