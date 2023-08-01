import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/components/MenuBar.css';
import logo from '../assets/menubar/logo.png';

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <div className={`hamburger-menu${isOpen ? ' open' : ''}`} onClick={toggleMenu}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
);

const SubMenuItem = ({ item, onCloseSubMenu }) => {
  const handleClick = () => {
    onCloseSubMenu();
  };

  return (
    <li key={item.id}>
      {item.path.startsWith('http') ? (
        <a href={item.path} className="sub-menu-link" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
          {item.title}
        </a>
      ) : (
        <Link to={item.path} className="sub-menu-link" onClick={handleClick}>
          {item.title}
        </Link>
      )}
    </li>
  );
};

const SubMenu = ({ items, onCloseSubMenu }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="sub-menu">
      {items.map((item) => (
        <SubMenuItem key={item.id} item={item} onCloseSubMenu={onCloseSubMenu} />
      ))}
    </ul>
  );
};

const MenuItem = ({ title, path, subMenuItems }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSubMenuOpen(false);
  }, [location.pathname]);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <div className={`menu-item${isSubMenuOpen ? '-open hamburger' : ''}`} onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
      <Link to={path} className="menu-link">
        {title}
      </Link>
      {isSubMenuOpen && <SubMenu items={subMenuItems} onCloseSubMenu={closeSubMenu} />}
    </div>
  );
};

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const tabs = [
    { title: 'Home', id: 1, path: '' },
    {
      title: 'About',
      id: 2,
      subMenuItems: [
        { title: 'World', id: 21, path: '/about/setting' },
        { title: 'Characters', id: 22, path: '/about/characters' },
        { title: 'Combat System', id: 23, path: '/about/combat' },
      ],
    },
    {
      title: 'Media',
      id: 3,
      subMenuItems: [
        { title: 'Artwork', id: 31, path: '/media' },
        { title: 'Screenshots', id: 32, path: '/media/screenshots' },
        { title: 'Trailers', id: 33, path: '/media/trailers' },
      ],
    },
    {
      title: 'Info',
      id: 5,
      subMenuItems: [
        { title: 'About Us', id: 51, path: '/info/team' },
        { title: 'FAQ', id: 53, path: '/info/faq' },
        { title: 'contact', id: 55, path: '/info/contact' },
        { title: 'YouTube \u2197', id: 52, path: 'https://www.youtube.com/channel/UCfYuZbToCun8OkYJ5K37Nig' },
        { title: 'Twitter \u2197', id: 54, path: 'https://twitter.com/ohfacts_' },
      ],
    },
  ];

  return (
    <div className="header">
      <img className="logo" src={logo} />
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className={`menu-bar${isOpen ? ' hamburger' : ''}`}>
        {tabs.map((tab) => (
          <MenuItem key={tab.id} title={tab.title} path={tab.path} subMenuItems={tab.subMenuItems || []} />
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
