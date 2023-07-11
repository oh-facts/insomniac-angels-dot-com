import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const MenuBar = () => {
  const tabs = [
    { title: "Home", id: 1, path: "" },
    {
      title: "About",
      id: 2,
      dropdownItems: [
        { title: "Setting", id: 1, path: "/about/setting" },
        { title: "Characters", id: 2, path: "/about/characters" },
        { title: "Team", id: 3, path: "/about/team" },
        { title: "Blog", id: 4, path: "/about/blog" },
      ],
    },
    { title: "Media", id: 3, path: "/media" },
    { title: "FAQ", id: 4, path: "/faq" },
    { title: "Contact", id: 5, path: "/contact" },
  ];
  const navigate = useNavigate();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  

  const handleDropdownItemClick = (path) => {
    navigate(path);
    setIsAboutOpen(false);
  };  const handleAboutMouseEnter = () => {
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutOpen(false);
  };

  return (
    <div className="Menubar">
      {tabs.map((tab) => (
        <React.Fragment key={tab.id}>
          {tab.dropdownItems ? (
            <div
              className="dropdown-container"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button>
                {tab.title}
              </button>
              {isAboutOpen && tab.title === "About" && (
                <div className="dropdown-menu">
                  {tab.dropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleDropdownItemClick(item.path)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => navigate(tab.path)}>
              {tab.title}
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
export default MenuBar;
