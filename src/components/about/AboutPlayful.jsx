import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiLocationMarker, HiStar, HiHeart, HiSparkles } from 'react-icons/hi';
import './AboutPlayful.css';

const AboutPlayful = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: '🏠', title: t('about.mobileService'), description: t('about.mobileDesc'), color: '#ff6b9d' },
    { icon: '⭐', title: t('about.quality'), description: t('about.qualityDesc'), color: '#00d9ff' },
    { icon: '💖', title: t('about.personalized'), description: t('about.personalizedDesc'), color: '#a855f7' }
  ];

  return (
    <section id="about" className="about-playful">
      <div className="playful-about-shapes">
        <div className="playful-about-shape shape-a1" />
        <div className="playful-about-shape shape-a2" />
        <div className="playful-about-shape shape-a3" />
      </div>

      <div className="playful-about-container">
        <motion.div
          className="playful-about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="playful-about-badge">
            <HiSparkles /> {language === 'en' ? 'Meet Us' : 'Conócenos'} <HiSparkles />
          </span>
          <h2>{t('about.title')}</h2>
        </motion.div>

        <div className="playful-about-content">
          <motion.div
            className="playful-about-card"
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="playful-about-image">
              <span>💅</span>
            </div>
            <div className="playful-about-location">
              📍 Puerto Rico 🇵🇷
            </div>
          </motion.div>

          <motion.div
            className="playful-about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="playful-text-lead">{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </motion.div>
        </div>

        <div className="playful-about-features">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="playful-feature-card"
              initial={{ opacity: 0, y: 30, rotate: (i - 1) * 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: (i - 1) * 3 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', bounce: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
            >
              <div className="playful-feature-icon" style={{ background: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlayful;
