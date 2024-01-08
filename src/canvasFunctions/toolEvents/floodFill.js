import hexToRgb from '../../utils/hexToRgb';
import colorPicker from '../../utils/colorPicker';
import areColorsEqual from '../../utils/areColorsEqual';
import getRgbaPixel from '../../utils/getRgbaPixel';
import setRgbaPixel from '../../utils/setRgbaPixel';

function floodFill(context, x, y, color, size) {
  const imageData = context.getImageData(0, 0, size, size);
  const visited = new Uint8Array(imageData.width * imageData.height);
  const targetColor = getRgbaPixel(imageData, x, y);

  if (!areColorsEqual(targetColor, color)) {
    const pixelsStack = [x, y];

    while (pixelsStack.length > 0) {
      const currentY = pixelsStack.pop();
      const currentX = pixelsStack.pop();

      const currentColor = getRgbaPixel(imageData, currentX, currentY);
      const index = currentY * imageData.width + currentX;

      if (!visited[index] && areColorsEqual(currentColor, targetColor)) {
        setRgbaPixel(imageData, currentX, currentY, color);
        pixelsStack.push(currentX + 1, currentY);
        pixelsStack.push(currentX - 1, currentY);
        pixelsStack.push(currentX, currentY + 1);
        pixelsStack.push(currentX, currentY - 1);
      }
    }

    context.putImageData(imageData, 0, 0);
  }
}

export default function fill(color, context, x, y, size) {
  const checkColor = colorPicker(context, x, y);
  const rgbaCurrentColor = [];

  if (checkColor === color) {
    return;
  }

  hexToRgb(color, rgbaCurrentColor);
  floodFill(context, x, y, rgbaCurrentColor, size);
}
