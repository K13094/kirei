import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiX, HiArrowRight } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import './GalleryBold.css';

const GalleryBold = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, category: 'Gel Mani', color: '#f5d5d5', emoji: '💅', size: 'large' },
    { id: 2, category: 'Nail Art', color: '#e8d5f5', emoji: '🎨', size: 'small' },
    { id: 3, category: 'Gel Tips', color: '#d5e8f5', emoji: '✨', size: 'small' },
    { id: 4, category: 'Gel Pedi', color: '#f5e8d5', emoji: '🦶', size: 'medium' },
    { id: 5, category: 'Nail Art', color: '#d5f5e8', emoji: '🌸', size: 'medium' },
    { id: 6, category: 'Gel Mani', color: '#f5f5d5', emoji: '💖', size: 'large' },
  ];

  return (
    <section id="gallery" className="gallery-bold">
      <div className="bold-gallery-header">
        <motion.div
          className="bold-gallery-title-wrap"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="bold-gallery-label">{language === 'en' ? 'OUR WORK' : 'NUESTRO TRABAJO'}</span>
          <h2>{language === 'en' ? 'Portfolio' : 'Portafolio'}</h2>
        </motion.div>
        <motion.a
          href="https://instagram.com/kireinailbar"
          target="_blank"
          rel="noopener noreferrer"
          className="bold-instagram-btn"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <FaInstagram />
          <span>@kireinailbar</span>
          <HiArrowRight />
        </motion.a>
      </div>

      <div className="bold-gallery-grid">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            className={`bold-gallery-item bold-size-${item.size}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedImage(item)}
          >
            <div className="bold-gallery-image" style={{ backgroundColor: item.color }}>
              <span className="bold-gallery-emoji">{item.emoji}</span>
            </div>
            <div className="bold-gallery-info">
              <span className="bold-gallery-number">0{item.id}</span>
              <span className="bold-gallery-category">{item.category}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="bold-gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bold-modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="bold-modal-close" onClick={() => setSelectedImage(null)}>
                <HiX />
              </button>
              <div className="bold-modal-image" style={{ backgroundColor: selectedImage.color }}>
                <span>{selectedImage.emoji}</span>
              </div>
              <div className="bold-modal-info">
                <span>0{selectedImage.id}</span>
                <h3>{selectedImage.category}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryBold;
