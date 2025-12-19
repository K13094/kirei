import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiPhone, HiSparkles } from 'react-icons/hi';
import './ServicesPlayful.css';

const ServicesPlayful = () => {
  const { t, language } = useLanguage();

  const services = [
    { id: 'gelMani', icon: '💅', bg: 'linear-gradient(135deg, #ff6b9d, #ff8fab)' },
    { id: 'gelPedi', icon: '🦶', bg: 'linear-gradient(135deg, #a855f7, #c084fc)' },
    { id: 'gelTips', icon: '✨', bg: 'linear-gradient(135deg, #00d9ff, #38bdf8)' },
    { id: 'nailArt', icon: '🎨', bg: 'linear-gradient(135deg, #fbbf24, #fcd34d)' }
  ];

  return (
    <section id="services" className="services-playful">
      <div className="playful-shapes-bg">
        <div className="shape-circle shape-1" />
        <div className="shape-circle shape-2" />
        <div className="shape-blob shape-3" />
      </div>

      <div className="playful-container">
        <motion.div
          className="playful-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="playful-badge">
            <HiSparkles /> {language === 'en' ? 'Our Magic' : 'Nuestra Magia'} <HiSparkles />
          </span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <div className="playful-cards">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="playful-card"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 2, y: -10 }}
            >
              <div className="playful-card-icon" style={{ background: service.bg }}>
                <span>{service.icon}</span>
              </div>
              <div className="playful-card-content">
                <h3>{t(`services.${service.id}.name`)}</h3>
                <p>{t(`services.${service.id}.description`)}</p>
                <div className="playful-card-time">
                  ⏱️ {t(`services.${service.id}.duration`)}
                </div>
              </div>
              <div className="playful-card-corner" style={{ background: service.bg }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="playful-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <a href="tel:7876447465" className="playful-phone-btn">
            <span className="phone-emoji">📞</span>
            <div>
              <span>{language === 'en' ? 'Call for pricing!' : '¡Llama para precios!'}</span>
              <strong>(787) 644-PINK</strong>
            </div>
            <span className="sparkle-emoji">✨</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPlayful;
