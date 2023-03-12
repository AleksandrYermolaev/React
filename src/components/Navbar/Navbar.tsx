import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

const setActive = (props: { isActive: boolean; isPending: boolean }): string | undefined =>
  props.isPending ? 'pending' : props.isActive ? classes.activeLink : classes.link;

const Navbar = () => {
  return (
    <nav className={classes.navigate}>
      <ul className={classes.list}>
        <li>
          <NavLink className={setActive} to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to={'/about'}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
