import React from 'react';

const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        accept={props.accept}
        className={`${props.className}-input`}
        defaultValue={props.defaultValue}
        id={props.id}
        max={props.max}
        min={props.min}
        name={props.id}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
    </div>
  );
};

export default Input;
