import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SubMenu = ({ items }) => {
    if (items.length === 0) {
      return null; // Don't render the submenu if items array is empty
    }
  
    return (
      <ul className="sub-menu">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.path} className="sub-menu-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  

const MenuItem = ({ title, path, subMenuItems }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div
      className={`menu-item ${isSubMenuOpen ? 'open' : ''}`}
      onMouseEnter={toggleSubMenu}
      onMouseLeave={toggleSubMenu}
    >
      <Link to={path} className="menu-link">
        {title}
      </Link>
      {isSubMenuOpen && <SubMenu items={subMenuItems} />}
    </div>
  );
};

const MenuBar = () => {
  const tabs = [
    { title: "Home", id: 1, path: "" },
    {
      title: "About",
      id: 2,
      path: "/about",
      subMenuItems: [
        { title: "Setting", id: 21, path: "/about/setting" },
        { title: "Characters", id: 22, path: "/about/characters" },
        { title: "Team", id: 23, path: "/about/team" },
      ],
    },
    { title: "Media", id: 3, path: "/media" },
    { title: "FAQ", id: 4, path: "/faq" },
    { title: "Contact", id: 5, path: "/contact" },
  ];

  return (
    <div className="menu-bar">
      {tabs.map((tab) => (
        <MenuItem
          key={tab.id}
          title={tab.title}
          path={tab.path}
          subMenuItems={tab.subMenuItems || []}
        />
      ))}
    </div>
  );
};

export default MenuBar;
