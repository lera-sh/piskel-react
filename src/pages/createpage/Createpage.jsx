import React, { useState, useRef, useCallback } from 'react';
import { Context } from '../../utils/context';
import ToolsContainer from '../../createPage/toolsContainer/ToolsContainer';
import CanvasContainer from '../../createPage/canvasContainer/CanvasContainer';
import AdditionalsContainer from '../../createPage/additionalsContainer/additionals/AdditionalsContainer';
import classes from './Createpage.module.css';

const firstTool = 'pen';
const firstSize = 32;
const firstPenWodth = '2';
const firstColor = '#ffffff';
const firstHidden = true;

const CreatePage = () => {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState(firstTool);
  const [size, setSize] = useState(firstSize);
  const [penWidth, setPenWidth] = useState(firstPenWodth);
  const [color, setColor] = useState(firstColor);
  const [hidden, setHidden] = useState(firstHidden);

  const handleSetTool = useCallback((selectedTool) => setTool(selectedTool), []);
  const handleSetSize = useCallback((newSize) => setSize(newSize), []);
  const handleSetPenWidth = useCallback((newWidth) => setPenWidth(newWidth), []);
  const handleSetColor = useCallback((newColor) => setColor(newColor), []);
  const handleSetHidden = useCallback((isHidden) => setHidden(isHidden), []);

  return (
    <Context.Provider
      value={{
        handleSetTool,
        handleSetPenWidth,
        handleSetColor,
        handleSetSize,
        handleSetHidden,
        canvasRef,
        color,
        hidden,
        size,
        tool,
        penWidth
      }}>
      <div className={classes.page}>
        <ToolsContainer />
        <CanvasContainer />
        <AdditionalsContainer />
      </div>
    </Context.Provider>
  );
};

export default CreatePage;
