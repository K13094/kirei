import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import './ServicesBold.css';

const ServicesBold = () => {
  const { t, language } = useLanguage();

  const services = [
    { id: 'gelMani', num: '01', icon: '💅' },
    { id: 'gelPedi', num: '02', icon: '🦶' },
    { id: 'gelTips', num: '03', icon: '✨' },
    { id: 'nailArt', num: '04', icon: '🎨' }
  ];

  return (
    <section id="services" className="services-bold">
      <div className="bold-header">
        <motion.div
          className="bold-title-wrap"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="bold-label">{language === 'en' ? 'WHAT WE DO' : 'LO QUE HACEMOS'}</span>
          <h2 className="bold-title">{t('services.title')}</h2>
        </motion.div>
        <motion.p
          className="bold-intro"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t('services.subtitle')}
        </motion.p>
      </div>

      <div className="bold-services-list">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            className="bold-service-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="bold-row-left">
              <span className="bold-num">{service.num}</span>
              <span className="bold-emoji">{service.icon}</span>
            </div>
            <div className="bold-row-center">
              <h3>{t(`services.${service.id}.name`)}</h3>
              <p>{t(`services.${service.id}.description`)}</p>
            </div>
            <div className="bold-row-right">
              <span className="bold-duration">{t(`services.${service.id}.duration`)}</span>
              <HiArrowRight className="bold-arrow" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bold-cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bold-cta-text">
          <span>{language === 'en' ? 'READY TO BOOK?' : '¿LISTA PARA RESERVAR?'}</span>
          <h3>{language === 'en' ? 'Call us today' : 'Llámanos hoy'}</h3>
        </div>
        <a href="tel:7876447465" className="bold-cta-btn">
          <HiPhone />
          <span>(787) 644-PINK</span>
        </a>
      </motion.div>
    </section>
  );
};

export default ServicesBold;
