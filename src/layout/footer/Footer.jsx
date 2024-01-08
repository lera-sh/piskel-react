import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <h5 className={classes.logo}>Piskel clone</h5>
      <Link className={classes.link} target="_blank" to="https://github.com/lera-sh">
        lera-sh
      </Link>
    </>
  );
};

export default Footer;
