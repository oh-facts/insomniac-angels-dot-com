import React from 'react';
import SubMenuItem from './SubMenuItem';

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

export default SubMenu;
