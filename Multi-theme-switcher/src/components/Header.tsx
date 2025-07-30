import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useTheme();

  if (theme === 'theme2') {
    return (
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-top">
            <div className="sidebar-logo">🐾 CatLife</div>
            <nav className="sidebar-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="sidebar-theme-switcher">
            {/* <label htmlFor="theme-select">Theme:</label> */}
            <select
              id="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
            >
              <option value="theme1">Minimal</option>
              <option value="theme2">Dark</option>
              <option value="theme3">Playful</option>
            </select>
          </div>
        </div>
      </aside>
    );
  }

  // Top Header for Theme 1 & 3
  return (
    <header className="header">
      <div className="header-container">
        <div className="app-name">🐾 CatLife</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="theme-switcher">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
          >
            <option value="theme1">Minimal</option>
            <option value="theme2">Dark</option>
            <option value="theme3">Playful</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
