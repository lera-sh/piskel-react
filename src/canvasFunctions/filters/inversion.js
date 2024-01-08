export default function inversion(size, canvasRef) {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const imageData = context.getImageData(0, 0, size, size);
  const data = imageData.data;

  data.forEach((_, index, array) => {
    if (index % 4 === 0) {
      array[index] = 255 - array[index];
      array[index + 1] = 255 - array[index + 1];
      array[index + 2] = 255 - array[index + 2];
    }
  });
  context.putImageData(imageData, 0, 0);
}
