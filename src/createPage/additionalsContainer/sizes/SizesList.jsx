import React, { useState, useContext, useCallback } from 'react';
import { Context } from '../../../utils/context';
import clsx from 'clsx';
import ItemButton from '../../../components/ItemButton';
import sizes from '../../../consts/sizes';
import classes from './SizesList.module.css';

const SizesList = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { handleSetSize } = useContext(Context);

  const setSize = useCallback(
    (size) => {
      setSelectedSize((prevSelectedSize) => (prevSelectedSize === size ? size : size));
      handleSetSize(size.width);
    },
    [handleSetSize]
  );

  return (
    <ul className={classes.list}>
      {sizes.map((size) => (
        <ItemButton
          key={size.id}
          className={clsx({
            [classes.button]: true,
            [classes.highlighted]: selectedSize === size
          })}
          isHighlighted={size.isHighlighted}
          onClick={() => setSize(size)}
          title={size.size}
        />
      ))}
    </ul>
  );
};

export default SizesList;
