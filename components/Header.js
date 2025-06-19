import React from 'react';
import { FaSearch, FaHeart, FaUser, FaGlobe, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      {/* Top Header: Left hamburger | Center LOGO | Right Icons */}
      <header className="header">
        <div className="left">
          <FaBars className="menu-icon" />
        </div>

        <div className="center-logo">LOGO</div>

        <div className="right-icons">
          <FaSearch />
          <FaHeart />
          <FaUser />
          <FaGlobe />
          <span className="lang">ENG</span>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="nav-links">
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .left {
          flex: 1;
        }

        .menu-icon {
          font-size: 1.2rem;
          cursor: pointer;
        }

        .center-logo {
          flex: 1;
          text-align: center;
          font-weight: bold;
          font-size: 1.6rem;
        }

        .right-icons {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1rem;
          font-size: 1rem;
        }

        .lang {
          margin-left: 0.3rem;
          font-size: 0.85rem;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 0.6rem 0;
          border-bottom: 1px solid #eee;
          background-color: #fff;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .nav-links a {
          text-decoration: none;
          color: #000;
        }

        .nav-links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-icon {
            display: block;
          }

          .center-logo {
            font-size: 1.3rem;
          }

          .right-icons {
            gap: 0.6rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
