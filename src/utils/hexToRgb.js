export default function hexToRgb(color, rgbaColorArr) {
  const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  let result = hex.exec(color);
  result = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
  return rgbaColorArr.push(result.r, result.g, result.b, 255);
}
