import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme as darkTheme } from "../styles/theme";
import { lightTheme } from "../styles/theme-light";


interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext precisa estar dentro do ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const value = useMemo(() => ({ darkMode, toggleTheme }), [darkMode]);

  const selectedTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={selectedTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
