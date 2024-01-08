export default function getRgbaPixel(imageData, x, y) {
  if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
    return [-1, -1, -1, -1];
  }

  const pixel = (y * imageData.width + x) * 4;
  return imageData.data.slice(pixel, pixel + 4);
}
