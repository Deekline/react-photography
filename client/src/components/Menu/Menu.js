import React from "react";
import "./Menu.css";

export const Menu = () => {
  
  return (
    <div>
      <label className="ba-menu-btn" aria-label="open menu" htmlFor="menuOpen">
        <span className="ba-menu-btn__line"></span>
        <span className="ba-menu-btn__line"></span>
        <span className="ba-menu-btn__line"></span>
      </label>

      <input type="checkbox" id="menuOpen" className="visually-hidden" />

      <div className="ba-menu-block">
        <nav>
          <ul className="ba-menu">
            <li className="ba-menu__item">
              <a href="/" className="ba-menu__link">
                Home
              </a>
            </li>
            <li className="ba-menu__item">
              <a href="/portfolio" className="ba-menu__link">
                Gallary
              </a>
            </li>
            <li className="ba-menu__item">
              <a href="/contact" className="ba-menu__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};


