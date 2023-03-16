import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

class Navbar extends React.Component {
  setActive(props: { isActive: boolean; isPending: boolean }): string | undefined {
    return props.isPending ? 'pending' : props.isActive ? classes.activeLink : classes.link;
  }

  render(): React.ReactNode {
    return (
      <nav className={classes.navigate}>
        <ul className={classes.list}>
          <li>
            <NavLink className={this.setActive} to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={this.setActive} to={'/about'}>
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
