import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HiSparkles, HiX } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder gallery items - replace with actual images
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <HiSparkles /> Portfolio <HiSparkles />
          </span>
          <h2 className="section-title">{t('gallery.title')}</h2>
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
            >
              <div
                className="gallery-placeholder"
                style={{ backgroundColor: item.color }}
              >
                <span className="gallery-emoji">{item.emoji}</span>
                <span className="gallery-category">{item.category}</span>
              </div>
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="gallery-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://instagram.com/kireinailbar"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FaInstagram />
            <span>@kireinailbar</span>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedImage(null)}
              >
                <HiX />
              </button>
              <div
                className="modal-image"
                style={{ backgroundColor: selectedImage.color }}
              >
                <span className="modal-emoji">{selectedImage.emoji}</span>
              </div>
              <div className="modal-info">
                <span className="modal-category">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
