import React, { useState } from 'react';
import { FaSearch, FaHeart, FaUser, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        {/* Left - Hamburger + Logo */}
        <div className="left">
          <FaBars className="menu-icon" onClick={toggleMenu} />
          <span className="logo">LOGO</span>
        </div>

        {/* Center - Nav Links */}
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#skills">SKILLS</a>
          <a href="#stories">STORIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

        {/* Right - Icons */}
        <div className="icons">
          <FaSearch />
          <FaHeart />
          <FaUser />
          <FaGlobe />
          <span className="lang">ENG</span>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <FaTimes className="close-icon" onClick={toggleMenu} />
        <a href="#home" onClick={toggleMenu}>HOME</a>
        <a href="#skills" onClick={toggleMenu}>SKILLS</a>
        <a href="#stories" onClick={toggleMenu}>STORIES</a>
        <a href="#about" onClick={toggleMenu}>ABOUT</a>
        <a href="#contact" onClick={toggleMenu}>CONTACT</a>
      </div>

      {/* Styles */}
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 2rem;
          border-bottom: 1px solid #eaeaea;
          background-color: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .logo {
          font-size: 1.7rem;
          font-weight: bold;
        }

        .menu-icon {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex: 2;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .nav-links a {
          text-decoration: none;
          color: black;
        }

        .icons {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          justify-content: flex-end;
        }

        .lang {
          font-weight: 500;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
          z-index: 2000;
        }

        .mobile-menu.show {
          transform: translateX(0);
        }

        .mobile-menu a {
          font-size: 1.2rem;
          color: black;
          text-decoration: none;
        }

        .close-icon {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 1.5rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-icon {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
