import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
  <ul>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
    <Link to="/login">Login</Link>
    </li>
    <li>
    <Link to="/add-user">Adduser</Link>
    </li>
  </ul>
</nav>


  );
};

export default Navbar;
