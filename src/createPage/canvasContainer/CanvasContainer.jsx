import React, { useContext, useEffect, useCallback, useRef } from 'react';
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleMouseClick
} from './handleCanvasEvents';
import { Context } from '../../utils/context';
import classes from './CanvasContainer.module.css';

const CanvasContainer = () => {
  const selectionRef = useRef(null);

  const { canvasRef, size, hidden, handleSetColor, handleSetHidden, tool, penWidth, color } =
    useContext(Context);

  const mouseDownCallback = useCallback(
    (event) => {
      handleMouseDown(event, handleSetHidden, canvasRef, selectionRef, tool, size, penWidth, color);
    },
    [handleSetHidden, canvasRef, selectionRef, tool, size, penWidth, color]
  );

  const mouseMoveCallback = useCallback(
    (event) => {
      handleMouseMove(event, canvasRef, selectionRef, tool, penWidth);
    },
    [canvasRef, selectionRef, tool, penWidth]
  );

  const mouseUpCallback = useCallback(() => {
    handleMouseUp(handleSetHidden, canvasRef, tool, penWidth);
  }, [handleSetHidden, canvasRef, tool, penWidth]);

  const mouseClickCallback = useCallback(
    (event) => {
      handleMouseClick(event, canvasRef, selectionRef, tool, size, penWidth, color, handleSetColor);
    },
    [canvasRef, selectionRef, tool, size, penWidth, color, handleSetColor]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const selection = selectionRef.current;

    canvas.addEventListener('mousedown', mouseDownCallback);
    canvas.addEventListener('mousemove', mouseMoveCallback);
    canvas.addEventListener('mouseup', mouseUpCallback);
    canvas.addEventListener('click', mouseClickCallback);
    selection.addEventListener('mousedown', mouseDownCallback);
    selection.addEventListener('mouseup', mouseUpCallback);

    return () => {
      canvas.removeEventListener('mousedown', mouseDownCallback);
      canvas.removeEventListener('mousemove', mouseMoveCallback);
      canvas.removeEventListener('mouseup', mouseUpCallback);
      canvas.removeEventListener('click', mouseClickCallback);
      selection.removeEventListener('mousedown', mouseDownCallback);
      selection.removeEventListener('mouseup', mouseUpCallback);
    };
  });

  return (
    <div className={classes.container}>
      <canvas ref={canvasRef} className={classes.canvas} height={size} id="canvas" width={size} />
      <div ref={selectionRef} className={classes.selection} hidden={hidden} />
    </div>
  );
};

export default CanvasContainer;
