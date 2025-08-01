import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type ThemeType = "theme1" | "theme2" | "theme3";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

// Create context with undefined default so misuse can be detected in hook
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("theme1");

// On mount, read persisted theme from localStorage (if any)
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as ThemeType;
    if (savedTheme) setThemeState(savedTheme);
  }, []);

// Setter that updates state and persists choice
  const setTheme = (theme: ThemeType) => {
    localStorage.setItem("app-theme", theme);
    setThemeState(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Custom hook to consume theme context with safety check
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
