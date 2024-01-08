import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={classes.page}>
      <h2 className={classes.title}>Page not found. Error 404</h2>
      <h3>
        This page doesn&apos;t exist. Go{' '}
        <Link className={classes.link} to="/">
          home
        </Link>
      </h3>
    </div>
  );
};

export default NotFoundPage;
