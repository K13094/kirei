import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiX } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import './GalleryMinimal.css';

const GalleryMinimal = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'mani', color: '#f5d5d5', emoji: '💅' },
    { id: 2, category: 'art', color: '#e8d5f5', emoji: '🎨' },
    { id: 3, category: 'tips', color: '#d5e8f5', emoji: '✨' },
    { id: 4, category: 'pedi', color: '#f5e8d5', emoji: '🦶' },
    { id: 5, category: 'art', color: '#d5f5e8', emoji: '🌸' },
    { id: 6, category: 'mani', color: '#f5f5d5', emoji: '💖' },
    { id: 7, category: 'tips', color: '#f0d5f5', emoji: '💎' },
    { id: 8, category: 'art', color: '#d5f0f5', emoji: '🦋' },
  ];

  const filters = [
    { id: 'all', label: language === 'en' ? 'All' : 'Todo' },
    { id: 'mani', label: language === 'en' ? 'Manicure' : 'Manicura' },
    { id: 'pedi', label: language === 'en' ? 'Pedicure' : 'Pedicura' },
    { id: 'tips', label: language === 'en' ? 'Tips' : 'Tips' },
    { id: 'art', label: language === 'en' ? 'Nail Art' : 'Nail Art' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery-minimal">
      <div className="minimal-gallery-container">
        <motion.div
          className="minimal-gallery-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="minimal-gallery-line" />
          <h2>{language === 'en' ? 'Portfolio' : 'Portafolio'}</h2>
        </motion.div>

        <motion.div
          className="minimal-gallery-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`minimal-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="minimal-gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="minimal-gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="minimal-item-inner" style={{ backgroundColor: item.color }}>
                  <span>{item.emoji}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="minimal-gallery-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="minimal-gallery-line" />
          <a
            href="https://instagram.com/kireinailbar"
            target="_blank"
            rel="noopener noreferrer"
            className="minimal-instagram"
          >
            <FaInstagram />
            <span>@kireinailbar</span>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="minimal-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="minimal-modal-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="minimal-modal-close" onClick={() => setSelectedImage(null)}>
                <HiX />
              </button>
              <div className="minimal-modal-image" style={{ backgroundColor: selectedImage.color }}>
                <span>{selectedImage.emoji}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryMinimal;
