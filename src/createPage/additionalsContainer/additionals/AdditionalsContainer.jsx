import React, { useContext, useCallback } from 'react';
import { Context } from '../../../utils/context';
import { handleSetImage } from '../../../canvasFunctions/setImage';
import clearCanvas from '../../../canvasFunctions/clearCanvas';
import SizesList from '../sizes/SizesList';
import FiltersList from '../filters/FiltersList';
import Input from '../../../components/Input';
import ItemButton from '../../../components/ItemButton';
import classes from './AdditionalsContainer.module.css';

const AdditionalsContainer = () => {
  const { canvasRef, size } = useContext(Context);

  const setImage = useCallback(
    (event) => {
      handleSetImage(event, canvasRef, size);
    },
    [canvasRef, size]
  );

  const clear = useCallback(() => {
    clearCanvas(canvasRef, size);
  }, [canvasRef, size]);

  return (
    <div className={classes.container}>
      <SizesList />
      <FiltersList />
      <Input
        accepst="image/png"
        className={classes.input}
        id="upload-image"
        label="Upload image"
        onChange={(event) => setImage(event)}
        type="file"
        value=""
      />
      <ItemButton className={classes.button} onClick={() => clear()} title="Clear canvas" />
    </div>
  );
};

export default AdditionalsContainer;
