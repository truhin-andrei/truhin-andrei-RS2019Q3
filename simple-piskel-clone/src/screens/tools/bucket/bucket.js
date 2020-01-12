
import { context } from '../../canvas/canvas';

export default function bucket() {
  context.fillStyle = localStorage.getItem('color');
  context.fillRect(0, 0, 512, 512);
}
