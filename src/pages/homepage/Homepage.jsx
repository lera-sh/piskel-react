import React from 'react';
import { Link } from 'react-router-dom';
import HomeItems from '../../components/HomeItems';
import homeItems from '../../consts/homeItems';
import classes from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={classes.page}>
      <h2 className={classes.title}>
        Piskel is a free online editor for animated sprites & pixel art
      </h2>
      <p className={classes.description}>Create animations in your browser.</p>
      <Link className={classes.button} to="/create">
        Create Sprite
      </Link>
      <ul className={classes.list}>
        {homeItems.map((item) => (
          <HomeItems
            key={item.id}
            alt={item.alt}
            description={item.description}
            img={item.img}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
