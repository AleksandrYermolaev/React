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
      <footer className={classes.footer}>
        <a href="https://github.com/AleksandrYermolaev">
          <img src="/logo_github.svg" alt="github" />
        </a>
        <p>2023</p>
        <a href="https://rs.school/">
          <img src="/logo_rsschool.svg" alt="rsschool" height={20} />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
