import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MenuBarPhone = () => {
    const tabsPhone = [
      { titlePhone: "Home", idPhone: 1, pathPhone: "" },
      {
        titlePhone: "About",
        idPhone: 2,
        subMenuItemsPhone: [
          { titlePhone: "Setting", idPhone: 21, pathPhone: "/about/setting" },
          { titlePhone: "Characters", idPhone: 22, pathPhone: "/about/characters" },
        ],
      },
      { titlePhone: "Media", idPhone: 3, pathPhone: "/media" },
      {
        titlePhone: "Info",
        idPhone: 5,
        subMenuItemsPhone: [
          { titlePhone: "Team", idPhone: 51, pathPhone: "/info/team" },
          { titlePhone: "Youtube \u2197", idPhone: 52, pathPhone: "https://www.youtube.com/channel/UCfYuZbToCun8OkYJ5K37Nig" },
          { titlePhone: "com", idPhone: 53, pathPhone: "/info/community" },
          { titlePhone: "FAQ", idPhone: 54, pathPhone: "/info/faq" }
        ]
      },
    ];
  
    const [showSubMenusPhone, setShowSubMenusPhone] = useState({});
  
    const toggleSubMenuPhone = (id) => {
      setShowSubMenusPhone((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };
  
    const renderSubMenuPhone = (subMenuItems) => {
      return subMenuItems.map((subMenuItem) => (
        <li key={subMenuItem.idPhone}>
          <a href={subMenuItem.pathPhone}>{subMenuItem.titlePhone}</a>
        </li>
      ));
    };
  
    const renderTabsPhone = () => {
      return tabsPhone.map((tab) => (
        <li key={tab.idPhone}>
          <a href={tab.pathPhone} onClick={() => toggleSubMenuPhone(tab.idPhone)}>
            {tab.titlePhone}
          </a>
          {tab.subMenuItemsPhone && showSubMenusPhone[tab.idPhone] && (
            <ul className="sub-menu-phone">
              {renderSubMenuPhone(tab.subMenuItemsPhone)}
            </ul>
          )}
        </li>
      ));
    };
  
    return (
      <div className="menu-bar-phone">
        <ul className="tabs-phone">{renderTabsPhone()}</ul>
      </div>
    );
  };
  
  export default MenuBarPhone;
  