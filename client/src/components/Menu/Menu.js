import React, { useState } from 'react';
import "./Menu.css";






export const Menu = () => {
  const [checked, setChecked] = useState('')
  const handleClick = () => {
    checked === 'checked' ? setChecked('') : setChecked('checked')
  }
  return (
    <div>
      <input type='checkbox' id='toggle' style={{display:'none'}} checked={checked} readOnly/>
      <label className='toggle-btn toggle-btn__cross' onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
      <nav className='ba-menu__nav'>
        <ul className='ba-menu__list'>
          <li className='ba-menu__list-item'><a href="/">Home</a></li>
          <li className='ba-menu__list-item'><a href="/portfolio">Portfolio</a></li>
          <li className='ba-menu__list-item'><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>

  );
};


