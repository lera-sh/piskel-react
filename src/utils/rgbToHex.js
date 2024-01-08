function componentToHex(color) {
  const hex = color.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export default function rgbToHex(r, g, b) {
  const hex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  return hex;
}
