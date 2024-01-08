import React from 'react';
import classes from './HomeItems.module.css';

const HomeItems = (props) => {
  return (
    <li className={classes.item}>
      <img alt={props.alt} className={classes.img} src={props.img} />
      <div>
        <h4 className={classes.title}>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default HomeItems;
