import React, { useContext, useCallback } from 'react';
import Input from '../../components/Input';
import ToolsList from './toolsList/ToolsList';
import { Context } from '../../utils/context';
import classes from './ToolsContainer.module.css';

const ToolsContainer = () => {
  const { handleSetPenWidth, handleSetColor, color } = useContext(Context);

  const setPenWidth = useCallback(
    (event) => {
      handleSetPenWidth(event.target.value);
    },
    [handleSetPenWidth]
  );

  const setColor = useCallback(
    (event) => {
      handleSetColor(event.target.value === '#000000' ? '#010101' : event.target.value);
    },
    [handleSetColor]
  );

  return (
    <div className={classes.container}>
      <Input
        className={classes.inputWidth}
        defaultValue="2"
        id="pen-width"
        label="Pen width"
        max="5"
        min="1"
        onChange={(event) => setPenWidth(event)}
        type="range"
      />
      <ToolsList />
      <Input
        className={classes.inputChange}
        id="color-change"
        label="Pen color"
        onChange={(event) => setColor(event)}
        type="color"
        value={color}
      />
    </div>
  );
};

export default ToolsContainer;
