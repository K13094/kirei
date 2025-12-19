import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiSparkles, HiLocationMarker, HiStar, HiHeart } from 'react-icons/hi';
import './AboutElegant.css';

const AboutElegant = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <HiLocationMarker />, title: t('about.mobileService'), description: t('about.mobileDesc') },
    { icon: <HiStar />, title: t('about.quality'), description: t('about.qualityDesc') },
    { icon: <HiHeart />, title: t('about.personalized'), description: t('about.personalizedDesc') }
  ];

  return (
    <section id="about" className="about-elegant">
      <div className="elegant-about-container">
        <div className="elegant-about-content">
          <motion.div
            className="elegant-about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="elegant-about-tag"><HiSparkles /> About <HiSparkles /></span>
            <h2>{t('about.title')}</h2>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </motion.div>

          <motion.div
            className="elegant-about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="elegant-about-placeholder">
              <span className="elegant-about-emoji">💅</span>
              <span className="elegant-about-name">Kirei Nail Bar</span>
              <span className="elegant-about-location">Puerto Rico 🇵🇷</span>
            </div>
            <div className="elegant-about-deco-1" />
            <div className="elegant-about-deco-2" />
          </motion.div>
        </div>

        <div className="elegant-about-features">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="elegant-feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="elegant-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutElegant;
