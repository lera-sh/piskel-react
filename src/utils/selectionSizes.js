export default function selectionSizes(x1, y1, x2, y2) {
  const x3 = Math.min(x1, x2);
  const x4 = Math.max(x1, x2);
  const y3 = Math.min(y1, y2);
  const y4 = Math.max(y1, y2);
  return [x3, y3, x4, y4];
}
