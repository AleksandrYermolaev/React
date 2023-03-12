import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
