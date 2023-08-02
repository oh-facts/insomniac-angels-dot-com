import React from 'react';

const HamburgerMenu = ({ onClick, isOpen }) => (
  <div className={`hamburger-menu-icon${isOpen ? ' open' : ''}`} onClick={onClick}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
);

export default HamburgerMenu;
