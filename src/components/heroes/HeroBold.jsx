import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram } from 'react-icons/fa';
import './HeroBold.css';

const HeroBold = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-bold">
      <div className="hero-bold-grid">
        <motion.div
          className="hero-bold-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bold-vertical-text">NAIL ART</div>
        </motion.div>

        <motion.div
          className="hero-bold-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bold-overline">EST. 2024 — PUERTO RICO</div>

          <h1 className="hero-bold-title">
            <span className="title-main">KIREI</span>
            <span className="title-sub">NAIL BAR</span>
          </h1>

          <div className="bold-divider">
            <span></span>
            <span className="divider-text">綺麗</span>
            <span></span>
          </div>

          <p className="hero-bold-description">
            {t('hero.tagline')}
          </p>

          <div className="hero-bold-cta">
            <Link to="contact" smooth duration={500} offset={-70} className="btn-bold">
              <span className="btn-text">{t('hero.cta')}</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>

          <div className="bold-social">
            <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> @kireinailbar
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-bold-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bold-image-stack">
            <div className="stack-item item-1">
              <span>💅</span>
            </div>
            <div className="stack-item item-2">
              <span>✨</span>
            </div>
            <div className="stack-item item-3">
              <span>🎨</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-bold-footer">
        <div className="footer-item">
          <span className="footer-number">01</span>
          <span className="footer-label">Gel Manicure</span>
        </div>
        <div className="footer-item">
          <span className="footer-number">02</span>
          <span className="footer-label">Gel Pedicure</span>
        </div>
        <div className="footer-item">
          <span className="footer-number">03</span>
          <span className="footer-label">Nail Art</span>
        </div>
        <div className="footer-item">
          <span className="footer-number">04</span>
          <span className="footer-label">Gel Tips</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBold;
