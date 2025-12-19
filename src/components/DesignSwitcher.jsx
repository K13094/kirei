import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesign, designs } from '../context/DesignContext';
import { useLanguage } from '../context/LanguageContext';
import { HiTemplate, HiX, HiCheck } from 'react-icons/hi';
import './DesignSwitcher.css';

const DesignSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentDesign, setCurrentDesign } = useDesign();
  const { language } = useLanguage();

  return (
    <>
      <motion.button
        className="design-toggle-btn"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={language === 'en' ? 'Change Design' : 'Cambiar Diseño'}
      >
        <HiTemplate />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="design-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="design-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="design-modal-header">
                <h2>{language === 'en' ? 'Choose Your Design' : 'Elige Tu Diseño'}</h2>
                <p>{language === 'en' ? 'Select a completely different layout and style' : 'Selecciona un diseño y estilo completamente diferente'}</p>
                <button onClick={() => setIsOpen(false)} className="design-close-btn">
                  <HiX />
                </button>
              </div>

              <div className="design-grid">
                {Object.values(designs).map((design) => (
                  <motion.button
                    key={design.id}
                    className={`design-card ${currentDesign === design.id ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentDesign(design.id);
                      setIsOpen(false);
                    }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="design-preview" data-design={design.id}>
                      <span className="preview-emoji">{design.preview}</span>
                    </div>
                    <div className="design-info">
                      <h3>{language === 'en' ? design.name : design.nameEs}</h3>
                      <p>{language === 'en' ? design.description : design.descriptionEs}</p>
                    </div>
                    {currentDesign === design.id && (
                      <div className="design-active-badge">
                        <HiCheck />
                      </div>
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

export default DesignSwitcher;
