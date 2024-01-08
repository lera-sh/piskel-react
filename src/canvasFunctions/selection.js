import selectionSizes from '../utils/selectionSizes';

export function selection(area, x1, y1, x2, y2) {
  const select = area.current;
  const [x3, y3, x4, y4] = selectionSizes(x1, y1, x2, y2);
  select.style.left = x3 + 'px';
  select.style.top = y3 + 'px';
  select.style.width = x4 - x3 + 'px';
  select.style.height = y4 - y3 + 'px';
}

export function scissors(context, scale, x1, y1, x2, y2) {
  const startX = Math.round(x1 / scale);
  const startY = Math.round(y1 / scale);
  const mouseX = Math.round(x2 / scale);
  const mouseY = Math.round(y2 / scale);
  const [x3, y3, x4, y4] = selectionSizes(startX, startY, mouseX, mouseY);
  const width = x4 - x3;
  const height = y4 - y3;
  context.clearRect(x3, y3, width, height);
}
