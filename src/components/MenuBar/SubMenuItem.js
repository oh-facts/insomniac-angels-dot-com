import React from 'react';
import { Link } from 'react-router-dom';
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
  
  export default SubMenuItem;