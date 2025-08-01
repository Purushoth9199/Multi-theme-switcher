import { useState, useEffect } from "react";
import { useTheme, type ThemeType } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Used to track resize and update if it is mobile view

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handler for changing theme from dropdown
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ThemeType;
    setTheme(value);
  };

  // Theme 2: Dark/sidebar layout
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

        {/* Sidebar (shown on desktop or when mobile menu is open) */}
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

                {/* Theme dropdown inside sidebar */}
                <div className="sidebar-theme-switcher">
                  <select value={theme} onChange={handleThemeChange}>
                    <option value="theme1">Default</option>
                    <option value="theme2">Dark</option>
                    <option value="theme3">Colorful</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Overlay behind sidebar on mobile to close it when clicking outside */}
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

  // Themes 1 & 3: Top header layout
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
