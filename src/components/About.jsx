import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HiSparkles, HiLocationMarker, HiStar, HiHeart } from 'react-icons/hi';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <HiLocationMarker />,
      title: t('about.mobileService'),
      description: t('about.mobileDesc')
    },
    {
      icon: <HiStar />,
      title: t('about.quality'),
      description: t('about.qualityDesc')
    },
    {
      icon: <HiHeart />,
      title: t('about.personalized'),
      description: t('about.personalizedDesc')
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">
              <HiSparkles /> About <HiSparkles />
            </span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about-paragraph">{t('about.p1')}</p>
            <p className="about-paragraph">{t('about.p2')}</p>
            <p className="about-paragraph">{t('about.p3')}</p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <div className="about-placeholder">
                <span className="about-emoji">💅</span>
                <span className="about-text-placeholder">Kirei Nail Bar</span>
                <span className="about-location">Puerto Rico 🇵🇷</span>
              </div>
              <div className="about-decoration-1"></div>
              <div className="about-decoration-2"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
