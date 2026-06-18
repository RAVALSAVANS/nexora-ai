import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  openLoginPopup,
  openStartPopup,
} from "../utils/popup";

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="7"  x2="20" y2="7"  />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="6"  x2="18" y2="18" />
    <line x1="18" y1="6" x2="6"  y2="18" />
  </svg>
);
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div id="header" className="headerTop">

      <header className="navigation-bar">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Nexora Systems logo"
            />
          </Link>
        </div>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        <nav className={`menu-main-menu-container ${menuOpen ? "active" : ""}`}>
          <ul id="menu-main-menu" className="nav-menu">
            <li>
              {isHome ? (
                <a href="#Solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
              ) : (
                <Link to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
              )}
            </li>
            <li>
              {isHome ? (
                <a href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</a>
              ) : (
                <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
              )}
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              {isHome ? (
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              ) : (
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              )}
            </li>
          </ul>
        </nav>

        <div className="frame">

          <button
            className="button"
            onClick={openLoginPopup}
          >
            Log In
          </button>

          <button
            className="button button-primary"
            onClick={openStartPopup}
          >
            Get Started
          </button>

        </div>

      </header>

    </div>
  );
}

export default Header;
