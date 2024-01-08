import { drawingTool, upTool, clickTool } from '../../utils/getToolsFuncs';
import { selection } from '../../canvasFunctions/selection';

let drawing = false;
let scale;
let start = { x: 0, y: 0 };
let mouse = { x: 0, y: 0 };
let lastPoint = null;

function getContext(canvasRef) {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  return context;
}

export function handleMouseDown(
  event,
  setHidden,
  canvasRef,
  selectionRef,
  tool,
  size,
  penWidth,
  color
) {
  scale = 600 / size;
  drawing = true;
  start.x = Math.round(event.offsetX / scale - penWidth / 2);
  start.y = Math.round(event.offsetY / scale - penWidth / 2);

  if (tool === 'scissors') {
    start.x = event.offsetX / 1.01;
    start.y = event.offsetY / 1.01;
    mouse.x = event.offsetX / 1.01;
    mouse.y = event.offsetY / 1.01;
    setHidden(false);
    selection(selectionRef, start.x, start.y, mouse.x, mouse.y);
  } else {
    const context = getContext(canvasRef);
    lastPoint = { x: start.x, y: start.y };
    context.fillStyle = color;
  }
}

export function handleMouseMove(event, canvasRef, selectionRef, tool, penWidth) {
  if (drawing) draw(event, canvasRef, selectionRef, tool, penWidth);
}

function draw(event, canvasRef, selectionRef, tool, penWidth) {
  const context = getContext(canvasRef);
  mouse.x = Math.round(event.offsetX / scale - penWidth / 2);
  mouse.y = Math.round(event.offsetY / scale - penWidth / 2);

  if (tool === 'scissors') {
    mouse.x = event.offsetX / 1.01;
    mouse.y = event.offsetY / 1.01;
    selection(selectionRef, start.x, start.y, mouse.x, mouse.y);
  } else {
    lastPoint = { x: mouse.x, y: mouse.y };
    drawingTool(penWidth, context, lastPoint, mouse.x, mouse.y, tool);
  }
}

export function handleMouseUp(setHidden, canvasRef, tool, penWidth) {
  if (drawing) {
    const context = getContext(canvasRef);
    upTool(penWidth, context, start.x, start.y, mouse.x, mouse.y, scale, setHidden, tool);
    drawing = false;
  }
}

export function handleMouseClick(
  event,
  canvasRef,
  selectionRef,
  tool,
  size,
  penWidth,
  color,
  setColor
) {
  const context = getContext(canvasRef);
  if (tool === 'pen' || tool === 'eraser') {
    drawing = true;
    draw(event, canvasRef, selectionRef, tool, penWidth);
    drawing = false;
  } else {
    clickTool(color, context, start.x, start.y, size, setColor, tool);
  }
}
