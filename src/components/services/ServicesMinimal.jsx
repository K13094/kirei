import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiPhone } from 'react-icons/hi';
import './ServicesMinimal.css';

const ServicesMinimal = () => {
  const { t, language } = useLanguage();

  const services = [
    { id: 'gelMani', icon: '💅' },
    { id: 'gelPedi', icon: '🦶' },
    { id: 'gelTips', icon: '✨' },
    { id: 'nailArt', icon: '🎨' }
  ];

  return (
    <section id="services" className="services-minimal">
      <div className="minimal-container">
        <motion.div
          className="minimal-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="minimal-line" />
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <div className="minimal-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="minimal-service"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="minimal-top">
                <span className="minimal-icon">{service.icon}</span>
                <span className="minimal-index">0{i + 1}</span>
              </div>
              <h3>{t(`services.${service.id}.name`)}</h3>
              <div className="minimal-divider" />
              <p>{t(`services.${service.id}.description`)}</p>
              <span className="minimal-duration">{t(`services.${service.id}.duration`)}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="minimal-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="minimal-line" />
          <a href="tel:7876447465" className="minimal-phone">
            <HiPhone />
            <div>
              <span>{language === 'en' ? 'Book your appointment' : 'Reserva tu cita'}</span>
              <strong>(787) 644-PINK</strong>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesMinimal;
