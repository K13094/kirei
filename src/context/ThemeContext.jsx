import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  pinkElegant: {
    id: 'pink-elegant',
    name: 'Pink Elegant',
    nameEs: 'Rosa Elegante',
    emoji: '🌸'
  },
  modernMinimal: {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    nameEs: 'Moderno Minimalista',
    emoji: '◻️'
  },
  luxuryDark: {
    id: 'luxury-dark',
    name: 'Luxury Dark',
    nameEs: 'Lujo Oscuro',
    emoji: '✨'
  },
  japaneseZen: {
    id: 'japanese-zen',
    name: 'Japanese Zen',
    nameEs: 'Zen Japonés',
    emoji: '🎋'
  },
  boldVibrant: {
    id: 'bold-vibrant',
    name: 'Bold & Vibrant',
    nameEs: 'Atrevido y Vibrante',
    emoji: '🎨'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('kirei-theme');
    return saved || 'pink-elegant';
  });

  useEffect(() => {
    localStorage.setItem('kirei-theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const cycleTheme = () => {
    const themeIds = Object.values(themes).map(t => t.id);
    const currentIndex = themeIds.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeIds.length;
    setCurrentTheme(themeIds[nextIndex]);
  };

  const getThemeInfo = () => {
    return Object.values(themes).find(t => t.id === currentTheme) || themes.pinkElegant;
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setCurrentTheme,
      cycleTheme,
      getThemeInfo,
      themes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
