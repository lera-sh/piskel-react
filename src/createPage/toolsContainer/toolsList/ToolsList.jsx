import React, { useState, useContext, useCallback } from 'react';
import { Context } from '../../../utils/context';
import clsx from 'clsx';
import ItemButton from '../../../components/ItemButton';
import tools from '../../../consts/tools';
import classes from './ToolsList.module.css';

const ToolsList = () => {
  const [selectedTool, setSelectedTool] = useState(tools[0]);
  const { handleSetTool } = useContext(Context);

  const setTool = useCallback(
    (tool) => {
      setSelectedTool((prevSelectedTool) => (prevSelectedTool === tool ? tool : tool));
      handleSetTool(tool.className.split(' ')[0]);
    },
    [handleSetTool]
  );

  return (
    <ul className={classes.list}>
      {tools.map((tool) => (
        <ItemButton
          key={tool.id}
          alt={tool.className}
          className={clsx({
            [tool.className]: true,
            [classes.highlighted]: selectedTool === tool
          })}
          img={tool.iconSrc}
          onClick={() => setTool(tool)}
        />
      ))}
    </ul>
  );
};

export default ToolsList;
