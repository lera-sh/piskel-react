export default function clearCanvas(canvasRef, size) {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, size, size);
}
