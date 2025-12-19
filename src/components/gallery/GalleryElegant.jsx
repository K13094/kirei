import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiSparkles, HiX } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import './GalleryElegant.css';

const GalleryElegant = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, category: 'Gel Mani', color: '#f5d5d5', emoji: '💅' },
    { id: 2, category: 'Nail Art', color: '#e8d5f5', emoji: '🎨' },
    { id: 3, category: 'Gel Tips', color: '#d5e8f5', emoji: '✨' },
    { id: 4, category: 'Gel Pedi', color: '#f5e8d5', emoji: '🦶' },
    { id: 5, category: 'Nail Art', color: '#d5f5e8', emoji: '🌸' },
    { id: 6, category: 'Gel Mani', color: '#f5f5d5', emoji: '💖' },
    { id: 7, category: 'Gel Tips', color: '#f0d5f5', emoji: '💎' },
    { id: 8, category: 'Nail Art', color: '#d5f0f5', emoji: '🦋' },
  ];

  return (
    <section id="gallery" className="gallery-elegant">
      <div className="elegant-gallery-container">
        <motion.div
          className="elegant-gallery-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="elegant-gallery-tag"><HiSparkles /> Portfolio <HiSparkles /></span>
          <h2>{t('gallery.title')}</h2>
          <p>{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="elegant-gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="elegant-gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="elegant-gallery-placeholder" style={{ backgroundColor: item.color }}>
                <span className="elegant-gallery-emoji">{item.emoji}</span>
                <span className="elegant-gallery-category">{item.category}</span>
              </div>
              <div className="elegant-gallery-overlay"><span>View</span></div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://instagram.com/kireinailbar"
          target="_blank"
          rel="noopener noreferrer"
          className="elegant-instagram-link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FaInstagram /> @kireinailbar
        </motion.a>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="elegant-gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="elegant-modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="elegant-modal-close" onClick={() => setSelectedImage(null)}>
                <HiX />
              </button>
              <div className="elegant-modal-image" style={{ backgroundColor: selectedImage.color }}>
                <span>{selectedImage.emoji}</span>
              </div>
              <span className="elegant-modal-category">{selectedImage.category}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryElegant;
