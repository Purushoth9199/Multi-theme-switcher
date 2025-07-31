import { useState, useEffect } from "react";
import { useTheme, type ThemeType } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ThemeType;
    setTheme(value);
  };

  if (theme === "theme2") {
    return (
      <>
        {isMobile && (
          <div className="mobile-header-bar">
            <button
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="mobile-logo">🛒 Cartzilla</div>
            <div className="mobile-theme-switcher">
              <select value={theme} onChange={handleThemeChange}>
                <option value="theme1">Default</option>
                <option value="theme2">Dark</option>
                <option value="theme3">Colorful</option>
              </select>
            </div>
          </div>
        )}

        {(!isMobile || isMenuOpen) && (
          <>
            <aside className={`sidebar ${isMobile ? "mobile-sidebar" : ""}`}>
              <div className="sidebar-inner">
                <div className="sidebar-logo">🛒 Cartzilla</div>
                <nav className="sidebar-nav">
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>
                <div className="sidebar-theme-switcher">
                  <select value={theme} onChange={handleThemeChange}>
                    <option value="theme1">Default</option>
                    <option value="theme2">Dark</option>
                    <option value="theme3">Colorful</option>
                  </select>
                </div>
              </div>
            </aside>
            {isMobile && isMenuOpen && (
              <div
                className="sidebar-overlay"
                onClick={() => setIsMenuOpen(false)}
              />
            )}
          </>
        )}
      </>
    );
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="app-name">🛒 Cartzilla</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="theme-switcher">
          <select value={theme} onChange={handleThemeChange}>
            <option value="theme1">Default</option>
            <option value="theme2">Dark</option>
            <option value="theme3">Colorful</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
