import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { HiSparkles, HiPhone } from 'react-icons/hi';
import './HeroPlayful.css';

const HeroPlayful = () => {
  const { t } = useLanguage();

  const floatingEmojis = ['💅', '✨', '💖', '🌸', '💎', '🎀'];

  return (
    <section id="hero" className="hero-playful">
      <div className="playful-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="floating-emojis">
        {floatingEmojis.map((emoji, i) => (
          <motion.span
            key={i}
            className={`float-emoji emoji-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      <div className="hero-playful-content">
        <motion.div
          className="playful-badge"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
        >
          <HiSparkles /> Puerto Rico <HiSparkles />
        </motion.div>

        <motion.h1
          className="playful-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="title-k">K</span>
          <span className="title-i">i</span>
          <span className="title-r">r</span>
          <span className="title-e">e</span>
          <span className="title-i2">i</span>
        </motion.h1>

        <motion.div
          className="playful-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="nail-bar">Nail Bar</span>
        </motion.div>

        <motion.p
          className="playful-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div
          className="playful-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link to="contact" smooth duration={500} offset={-70} className="btn-playful primary">
            <span>{t('hero.cta')}</span>
            <span className="btn-icon">💅</span>
          </Link>
          <a href="tel:7876447465" className="btn-playful secondary">
            <HiPhone />
            <span>(787) 644-PINK</span>
          </a>
        </motion.div>

        <motion.div
          className="playful-services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="service-pill">Gel Mani</div>
          <div className="service-pill">Gel Pedi</div>
          <div className="service-pill">Nail Art</div>
          <div className="service-pill">Gel Tips</div>
        </motion.div>
      </div>

      <div className="playful-scroll">
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="scroll-text">Scroll Down</span>
          <span className="scroll-arrow">↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPlayful;
