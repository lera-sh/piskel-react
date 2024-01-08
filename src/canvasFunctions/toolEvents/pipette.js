import getRgbaPixel from '../../utils/getRgbaPixel';
import rgbToHex from '../../utils/rgbToHex';

export default function pipette(context, x, y, size) {
  const imageData = context.getImageData(0, 0, size, size);
  const pixel = getRgbaPixel(imageData, x, y);

  return rgbToHex(pixel[0], pixel[1], pixel[2]);
}
