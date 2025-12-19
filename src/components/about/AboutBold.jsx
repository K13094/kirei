import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiLocationMarker, HiStar, HiHeart, HiArrowRight } from 'react-icons/hi';
import './AboutBold.css';

const AboutBold = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: <HiLocationMarker />, title: t('about.mobileService'), description: t('about.mobileDesc') },
    { icon: <HiStar />, title: t('about.quality'), description: t('about.qualityDesc') },
    { icon: <HiHeart />, title: t('about.personalized'), description: t('about.personalizedDesc') }
  ];

  return (
    <section id="about" className="about-bold">
      <div className="bold-about-hero">
        <motion.div
          className="bold-about-label-wrap"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="bold-about-label">{language === 'en' ? 'THE STORY' : 'LA HISTORIA'}</span>
        </motion.div>
        <motion.h2
          className="bold-about-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>
      </div>

      <div className="bold-about-content">
        <motion.div
          className="bold-about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bold-about-placeholder">
            <span>💅</span>
            <div className="bold-about-overlay">
              <span>KIREI</span>
              <span>NAIL BAR</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bold-about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="bold-about-lead">{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <div className="bold-about-location">
            <span>📍 Puerto Rico</span>
            <HiArrowRight />
          </div>
        </motion.div>
      </div>

      <div className="bold-about-features">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bold-feature-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="bold-feature-num">0{i + 1}</div>
            <div className="bold-feature-content">
              <div className="bold-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutBold;
