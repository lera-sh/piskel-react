import React from 'react';
import clsx from 'clsx';

const ItemButton = (props) => {
  const isHighlighted = props.isHighlighted;

  return (
    <li>
      <button
        className={clsx({
          highlighted: isHighlighted,
          [props.className]: true
        })}
        onClick={props.onClick}
        type="button">
        <img alt={props.alt} src={props.img} />
        {props.title}
      </button>
    </li>
  );
};

export default ItemButton;
