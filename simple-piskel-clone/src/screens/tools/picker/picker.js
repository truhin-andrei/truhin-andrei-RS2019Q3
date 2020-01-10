import {context} from '../../canvas/canvas';



export function picker(event) {
  const sampleData = context.getImageData(event.layerX, event.layerY, 1, 1);
  const sampleColorData = sampleData.data;
  const sampleColor = `rgba(${sampleColorData[0]},${sampleColorData[1]},${
    sampleColorData[2]},${sampleColorData[3]})`;
  sample.style.background = sampleColor;
}