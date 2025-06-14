import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark" | "blue" | "green" | "purple";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { value: Theme; label: string; colors: string }[];
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const themes = [
    {
      value: "light" as Theme,
      label: "Light",
      colors: "bg-white text-gray-900",
    },
    { value: "dark" as Theme, label: "Dark", colors: "bg-gray-900 text-white" },
    {
      value: "blue" as Theme,
      label: "Blue",
      colors: "bg-blue-50 text-blue-900",
    },
    {
      value: "green" as Theme,
      label: "Green",
      colors: "bg-green-50 text-green-900",
    },
    {
      value: "purple" as Theme,
      label: "Purple",
      colors: "bg-purple-50 text-purple-900",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && themes.find((t) => t.value === savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Apply theme classes to body
    const body = document.body;
    body.className = body.className.replace(/theme-\w+/g, "");
    body.classList.add(`theme-${theme}`);

    // Apply dark mode class for shadcn
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        themes,
        isDarkMode: theme === "dark",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
