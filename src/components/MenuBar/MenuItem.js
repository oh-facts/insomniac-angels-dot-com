import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SubMenu from './SubMenu';

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
    <div className={`menu-item${isSubMenuOpen ? '-open' : ''}`} onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
      <Link to={path} className="menu-link">
        {title}
      </Link>
      {isSubMenuOpen && <SubMenu items={subMenuItems} onCloseSubMenu={closeSubMenu} />}
    </div>
  );
};

export default MenuItem;
