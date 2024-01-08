export function drawCurve(penWidth, context, lastPoint, x, y) {
  const ps = [lastPoint, { x: x, y: y }];
  const { x: x0, y: y0 } = ps[0];
  const { x: x1, y: y1 } = ps[1];
  drawLine(penWidth, context, x0, y0, x1, y1);
}

function fillRect(penWidth, context, x, y) {
  return context.fillRect(x, y, penWidth, penWidth);
}

export function drawLine(penWidth, context, x0, y0, x1, y1) {
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    fillRect(penWidth, context, x0, y0);
    let e2 = 2 * err;

    if (x0 === x1 && y0 === y1) {
      break;
    }

    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }

    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}
