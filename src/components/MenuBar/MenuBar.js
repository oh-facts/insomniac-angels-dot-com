import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/MenuBar.css';
import logo from '../../assets/menubar/logo.png';
import HamburgerMenu from './HamburgerMenu';
import MenuItem from './MenuItem';


const MenuBar = () => {

  const menuRef = useRef(null);

  const tabs = [
    {
      title: 'About',
      id: 2,
      subMenuItems: [
        { title: 'Overview', id: 24, path: '/about/overview' },
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

      ],
    },
    {
      title: 'Socials',
      id: 6,
      subMenuItems: [
        { title: 'YouTube \u2197', id: 61, path: 'https://www.youtube.com/channel/UCfYuZbToCun8OkYJ5K37Nig' },
        { title: 'Twitter \u2197', id: 62, path: 'https://twitter.com/ohfacts_' },

      ],
    },
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">  
      <a href='/' >
      <img className="logo" src={logo} />
      </a>
      
      <div className='menu-bar' ref={menuRef}>
      {isSmallScreen ? (
        <div className="menu-bar-collapse">
          <HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
        </div>
      ) : (
        <div className="menu-bar-desktop">
          {tabs.map((tab) => (
            <MenuItem key={tab.id} title={tab.title} path={tab.path} subMenuItems={tab.subMenuItems || []} />
          ))}
        </div>
      )}
      {isOpen && isSmallScreen && (
        <div className="hamburger-menu open">
          {tabs.map((tab) => (
            <MenuItem key={tab.id} title={tab.title} path={tab.path} subMenuItems={tab.subMenuItems || []} />
          ))}
        </div>
      )}
      </div>
    
    </div>
  );
};

export default MenuBar;





/*
Credits page.
Socials page?
*/