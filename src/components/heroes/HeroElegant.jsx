import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { HiSparkles } from 'react-icons/hi';
import './HeroElegant.css';

const HeroElegant = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-elegant">
      <div className="hero-elegant-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-elegant-content">
        <motion.div
          className="hero-elegant-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <HiSparkles />
            <span>Puerto Rico</span>
            <HiSparkles />
          </motion.div>

          <h1 className="hero-elegant-title">
            <span className="title-line">Kirei</span>
            <span className="title-line accent">Nail Bar</span>
          </h1>

          <p className="hero-elegant-tagline">{t('hero.tagline')}</p>
          <p className="hero-elegant-subtitle">{t('hero.subtitle')}</p>

          <div className="hero-elegant-buttons">
            <Link to="contact" smooth duration={500} offset={-70} className="btn-elegant primary">
              {t('hero.cta')}
            </Link>
            <Link to="gallery" smooth duration={500} offset={-70} className="btn-elegant secondary">
              {t('hero.services')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-elegant-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-frame">
            <div className="visual-inner">
              <span className="visual-emoji">💅</span>
              <span className="visual-text">Beautiful Nails</span>
            </div>
          </div>
          <div className="floating-element el-1">✨</div>
          <div className="floating-element el-2">🌸</div>
          <div className="floating-element el-3">💖</div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroElegant;
