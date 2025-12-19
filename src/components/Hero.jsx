import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { HiSparkles } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-pattern"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.span
            className="hero-welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <HiSparkles className="sparkle-icon" />
            {t('hero.welcome')}
            <HiSparkles className="sparkle-icon" />
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Kirei Nail Bar
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-primary"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-secondary"
            >
              {t('hero.services')}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">💅</span>
                <span className="placeholder-text">Your Beautiful Work Here</span>
              </div>
            </div>
            <div className="hero-image-decoration"></div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="scroll-mouse"
        >
          <div className="scroll-wheel"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
