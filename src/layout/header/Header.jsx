import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <h1>Piskel</h1>
      <nav className={classes.nav}>
        <NavLink className={classes.item} to="/">
          Home
        </NavLink>
        <NavLink className={classes.item} to="/create">
          Create Sprite
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
