import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>

      <main className={classes.main}>
        <Outlet />
      </main>

      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
