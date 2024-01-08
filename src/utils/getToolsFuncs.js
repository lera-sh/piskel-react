import { drawCurve, drawLine } from '../canvasFunctions/toolEvents/pen';
import { scissors } from '../canvasFunctions/selection';
import fill from '../canvasFunctions/toolEvents/floodFill';
import pipette from '../canvasFunctions/toolEvents/pipette';
import clearCurve from '../canvasFunctions/toolEvents/eraser';

const moveFunctions = {
  pen: (penWidth, context, lastPoint, mouseX, mouseY) =>
    drawCurve(penWidth, context, lastPoint, mouseX, mouseY),
  eraser: (penWidth, context, lastPoint, mouseX, mouseY) =>
    clearCurve(penWidth, context, lastPoint, mouseX, mouseY)
};

const upToolFunctions = {
  line: (penWidth, context, startX, startY, mouseX, mouseY, _) =>
    drawLine(penWidth, context, startX, startY, mouseX, mouseY),
  scissors: (_, context, startX, startY, mouseX, mouseY, scale, setHidden) => {
    scissors(context, scale, startX, startY, mouseX, mouseY);
    setHidden(true);
  }
};

const clickToolFunctions = {
  fill: (color, context, startX, startY, size, _) => fill(color, context, startX, startY, size),
  pipette: (_, context, startX, startY, size, setColor) =>
    setColor(pipette(context, startX, startY, size))
};

export function drawingTool(penWidth, context, lastPoint, mouseX, mouseY, tool) {
  const moveFunction = moveFunctions[tool];
  if (moveFunction) {
    moveFunction(penWidth, context, lastPoint, mouseX, mouseY);
  }
}

export function upTool(penWidth, context, startX, startY, mouseX, mouseY, scale, setHidden, tool) {
  const upToolFunction = upToolFunctions[tool];
  if (upToolFunction) {
    upToolFunction(penWidth, context, startX, startY, mouseX, mouseY, scale, setHidden);
  }
}

export function clickTool(color, context, startX, startY, size, setColor, tool) {
  const clickToolFunction = clickToolFunctions[tool];
  if (clickToolFunction) {
    clickToolFunction(color, context, startX, startY, size, setColor);
  }
}
