import React, { useCallback, useContext } from 'react';
import ItemButton from '../../../components/ItemButton';
import filters from '../../../consts/filters';
import bw from '../../../canvasFunctions/filters/bw';
import inversion from '../../../canvasFunctions/filters/inversion';
import { Context } from '../../../utils/context';
import classes from './FiltersList.module.css';

const FiltersList = () => {
  const { canvasRef, size } = useContext(Context);

  const setFilter = useCallback(
    (filter) => {
      filter.filterItem === 'b&w' ? bw(size, canvasRef) : inversion(size, canvasRef);
    },
    [size, canvasRef]
  );

  return (
    <ul className={classes.list}>
      {filters.map((filter) => (
        <ItemButton
          key={filter.id}
          className={classes.button}
          onClick={() => setFilter(filter)}
          title={filter.filterItem}
        />
      ))}
    </ul>
  );
};

export default FiltersList;
