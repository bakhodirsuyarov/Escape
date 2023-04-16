import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className='navbar-inner'>
      <div className="nav-container">
        <div className="site-logo">
          <a href="#">Escape.</a>
        </div>
        <ul>
          <li>
            <a href="#">{props.menufirst}</a>
          </li>
          <li>
            <a href="#">{props.menusecond}</a>
          </li>
          <li>
            <a href="#">{props.menuthird}</a>
          </li>
          <li>
            <a href="#">{props.menufour}</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
