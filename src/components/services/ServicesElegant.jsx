import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiSparkles, HiClock, HiPhone } from 'react-icons/hi';
import './ServicesElegant.css';

const ServicesElegant = () => {
  const { t } = useLanguage();

  const services = [
    { id: 'gelMani', icon: '💅', color: '#f5d5d5' },
    { id: 'gelPedi', icon: '🦶', color: '#e8d5f5' },
    { id: 'gelTips', icon: '✨', color: '#d5e8f5' },
    { id: 'nailArt', icon: '🎨', color: '#f5e8d5' }
  ];

  return (
    <section id="services" className="services-elegant">
      <div className="elegant-container">
        <motion.div
          className="elegant-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="elegant-tag"><HiSparkles /> Services <HiSparkles /></span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <div className="elegant-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="elegant-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="elegant-icon" style={{ backgroundColor: service.color }}>
                <span>{service.icon}</span>
              </div>
              <h3>{t(`services.${service.id}.name`)}</h3>
              <p>{t(`services.${service.id}.description`)}</p>
              <div className="elegant-meta">
                <HiClock /> {t(`services.${service.id}.duration`)}
              </div>
              <div className="elegant-price">
                <HiPhone /> {t('services.callForPricing')}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="tel:7876447465"
          className="elegant-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <HiPhone /> (787) 644-PINK
        </motion.a>
      </div>
    </section>
  );
};

export default ServicesElegant;
