export default function bw(size, canvasRef) {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const imageData = context.getImageData(0, 0, size, size);
  const data = imageData.data;

  data.forEach((value, index, array) => {
    if (index % 4 === 0) {
      const gray = (array[index] + array[index + 1] + array[index + 2]) / 3;
      array[index] = gray;
      array[index + 1] = gray;
      array[index + 2] = gray;
    }
  });
  context.putImageData(imageData, 0, 0);
}
