import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({name}) {
  return (
    <div className='navbar'>
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo' >
        {name}
        </Link>
  </div>
  </div>
     );
}

export default Navbar;
