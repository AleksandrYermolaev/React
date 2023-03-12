import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Navbar />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>2023</footer>
    </div>
  );
};

export default Layout;
