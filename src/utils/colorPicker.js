import rgbToHex from './rgbToHex.js';

export default function colorPicker(context, x, y) {
  const imageData = context.getImageData(x, y, 1, 1);
  const [red, green, blue] = imageData.data;

  return rgbToHex(red, green, blue);
}
