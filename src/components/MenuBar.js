import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubMenuItem = ({ item, onCloseSubMenu }) => {
  const handleClick = () => {
    // Call the onCloseSubMenu function to close the sub-menu
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

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <div
      className={`menu-item${isSubMenuOpen ? '-open' : ''}`}
      onMouseEnter={toggleSubMenu}
      onMouseLeave={toggleSubMenu}
    >
      <Link to={path} className="menu-link">
        {title}
      </Link>
      {isSubMenuOpen && <SubMenu items={subMenuItems} onCloseSubMenu={closeSubMenu} />}
    </div>
  );
};

const MenuBar = () => {
  const tabs = [
    { title: 'Home', id: 1, path: '' },
    {
      title: 'About',
      id: 2,
      subMenuItems: [
        { title: 'Setting', id: 21, path: '/about/setting' },
        { title: 'Characters', id: 22, path: '/about/characters' },
      ],
    },
    { title: 'Media', id: 3, path: '/media' },
    {
      title: 'Info',
      id: 5,
      subMenuItems: [
        { title: 'Team', id: 51, path: '/info/team' },
        { title: 'YouTube \u2197', id: 52, path: 'https://www.youtube.com/channel/UCfYuZbToCun8OkYJ5K37Nig' },
        { title: 'com', id: 53, path: '/info/community' },
        { title: 'FAQ', id: 54, path: '/info/faq' },
      ],
    },
  ];

  return (
    <div className="menu-bar">
      {tabs.map((tab) => (
        <MenuItem key={tab.id} title={tab.title} path={tab.path} subMenuItems={tab.subMenuItems || []} />
      ))}
    </div>
  );
};

export default MenuBar;
 