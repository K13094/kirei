import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiLocationMarker, HiStar, HiHeart } from 'react-icons/hi';
import './AboutMinimal.css';

const AboutMinimal = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: <HiLocationMarker />, title: t('about.mobileService'), description: t('about.mobileDesc') },
    { icon: <HiStar />, title: t('about.quality'), description: t('about.qualityDesc') },
    { icon: <HiHeart />, title: t('about.personalized'), description: t('about.personalizedDesc') }
  ];

  return (
    <section id="about" className="about-minimal">
      <div className="minimal-about-container">
        <motion.div
          className="minimal-about-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="minimal-about-line" />
          <h2>{language === 'en' ? 'About' : 'Nosotros'}</h2>
        </motion.div>

        <div className="minimal-about-grid">
          <motion.div
            className="minimal-about-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>{t('about.title')}</h3>
            <div className="minimal-about-divider" />
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </motion.div>

          <motion.div
            className="minimal-about-side"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="minimal-about-image">
              <span>💅</span>
            </div>
            <div className="minimal-about-location">
              <span className="minimal-loc-label">{language === 'en' ? 'Location' : 'Ubicación'}</span>
              <span className="minimal-loc-text">Puerto Rico 🇵🇷</span>
            </div>
          </motion.div>
        </div>

        <div className="minimal-about-features">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="minimal-feature"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="minimal-feature-top">
                <span className="minimal-feature-icon">{feature.icon}</span>
                <span className="minimal-feature-num">0{i + 1}</span>
              </div>
              <h4>{feature.title}</h4>
              <div className="minimal-feature-line" />
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMinimal;
