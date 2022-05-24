import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/js/src/collapse.js';


function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-3'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand text-warning'>Star Wars</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link' to='people'>People</NavLink>
            <NavLink className='nav-link' to='planets'>Planets</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;