export default function setRgbaPixel(imageData, x, y, color) {
  const pixel = (y * imageData.width + x) * 4;
  imageData.data[pixel] = color[0];
  imageData.data[pixel + 1] = color[1];
  imageData.data[pixel + 2] = color[2];
  imageData.data[pixel + 3] = color[3];
}
