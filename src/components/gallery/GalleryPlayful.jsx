import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiX, HiSparkles } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import './GalleryPlayful.css';

const GalleryPlayful = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, category: 'Gel Mani', color: '#ff6b9d', emoji: '💅', rotate: -3 },
    { id: 2, category: 'Nail Art', color: '#a855f7', emoji: '🎨', rotate: 2 },
    { id: 3, category: 'Gel Tips', color: '#00d9ff', emoji: '✨', rotate: -2 },
    { id: 4, category: 'Gel Pedi', color: '#fbbf24', emoji: '🦶', rotate: 4 },
    { id: 5, category: 'Nail Art', color: '#34d399', emoji: '🌸', rotate: -4 },
    { id: 6, category: 'Gel Mani', color: '#f472b6', emoji: '💖', rotate: 3 },
    { id: 7, category: 'Gel Tips', color: '#818cf8', emoji: '💎', rotate: -1 },
    { id: 8, category: 'Nail Art', color: '#38bdf8', emoji: '🦋', rotate: 2 },
  ];

  return (
    <section id="gallery" className="gallery-playful">
      <div className="playful-bg-shapes">
        <div className="playful-shape playful-shape-1" />
        <div className="playful-shape playful-shape-2" />
      </div>

      <div className="playful-gallery-container">
        <motion.div
          className="playful-gallery-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="playful-gallery-badge">
            ✨ {language === 'en' ? 'Our Creations' : 'Nuestras Creaciones'} ✨
          </span>
          <h2>{language === 'en' ? 'Pretty Nails Gallery' : 'Galería de Uñas'}</h2>
          <p>{language === 'en' ? 'Tap to see the magic up close!' : '¡Toca para ver la magia de cerca!'}</p>
        </motion.div>

        <div className="playful-gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="playful-gallery-card"
              style={{ '--rotate': `${item.rotate}deg` }}
              initial={{ opacity: 0, scale: 0.5, rotate: item.rotate * 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: item.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="playful-card-inner" style={{ backgroundColor: item.color }}>
                <span className="playful-card-emoji">{item.emoji}</span>
              </div>
              <div className="playful-card-label">{item.category}</div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://instagram.com/kireinailbar"
          target="_blank"
          rel="noopener noreferrer"
          className="playful-instagram-btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <FaInstagram />
          <span>{language === 'en' ? 'See more on Instagram!' : '¡Ve más en Instagram!'}</span>
          <span className="playful-instagram-handle">@kireinailbar</span>
        </motion.a>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="playful-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="playful-modal-content"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="playful-modal-close" onClick={() => setSelectedImage(null)}>
                <HiX />
              </button>
              <div className="playful-modal-image" style={{ backgroundColor: selectedImage.color }}>
                <span>{selectedImage.emoji}</span>
              </div>
              <div className="playful-modal-info">
                <HiSparkles />
                <span>{selectedImage.category}</span>
                <HiSparkles />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPlayful;
