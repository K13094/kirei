import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import './HeroMinimal.css';

const HeroMinimal = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-minimal">
      <div className="hero-minimal-container">
        <motion.div
          className="minimal-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="minimal-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Premium Nail Services
          </motion.div>

          <motion.h1
            className="minimal-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Kirei
          </motion.h1>

          <motion.div
            className="minimal-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          <motion.p
            className="minimal-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            className="minimal-location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="dot"></span>
            Puerto Rico
          </motion.div>

          <motion.div
            className="minimal-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <Link to="contact" smooth duration={500} offset={-70} className="btn-minimal">
              {t('hero.cta')}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="minimal-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="visual-box">
            <div className="box-content">
              <span className="box-number">01</span>
              <span className="box-emoji">💅</span>
              <span className="box-label">Gel Manicure</span>
            </div>
          </div>
          <div className="visual-box">
            <div className="box-content">
              <span className="box-number">02</span>
              <span className="box-emoji">✨</span>
              <span className="box-label">Nail Art</span>
            </div>
          </div>
          <div className="visual-box">
            <div className="box-content">
              <span className="box-number">03</span>
              <span className="box-emoji">💎</span>
              <span className="box-label">Gel Tips</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="minimal-scroll">
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll
        </motion.span>
      </div>
    </section>
  );
};

export default HeroMinimal;
