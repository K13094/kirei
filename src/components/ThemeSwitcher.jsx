import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, themes } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { HiColorSwatch, HiX } from 'react-icons/hi';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setCurrentTheme, getThemeInfo } = useTheme();
  const { language } = useLanguage();

  const themeInfo = getThemeInfo();

  return (
    <>
      <motion.button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={language === 'en' ? 'Change Theme' : 'Cambiar Tema'}
      >
        <HiColorSwatch />
        <span className="theme-emoji">{themeInfo.emoji}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="theme-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="theme-panel"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="theme-panel-header">
                <h3>{language === 'en' ? 'Choose Theme' : 'Elegir Tema'}</h3>
                <button onClick={() => setIsOpen(false)} className="close-btn">
                  <HiX />
                </button>
              </div>

              <div className="theme-options">
                {Object.values(themes).map((theme) => (
                  <motion.button
                    key={theme.id}
                    className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentTheme(theme.id);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-theme-preview={theme.id}
                  >
                    <span className="theme-preview" data-theme={theme.id}>
                      <span className="preview-primary"></span>
                      <span className="preview-accent"></span>
                      <span className="preview-bg"></span>
                    </span>
                    <span className="theme-info">
                      <span className="theme-emoji-label">{theme.emoji}</span>
                      <span className="theme-name">
                        {language === 'en' ? theme.name : theme.nameEs}
                      </span>
                    </span>
                    {currentTheme === theme.id && (
                      <motion.span
                        className="active-indicator"
                        layoutId="activeTheme"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;
