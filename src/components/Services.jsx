import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HiSparkles, HiClock, HiPhone } from 'react-icons/hi';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'gelMani',
      icon: '💅',
      color: '#f5d5d5'
    },
    {
      id: 'gelPedi',
      icon: '🦶',
      color: '#e8d5f5'
    },
    {
      id: 'gelTips',
      icon: '✨',
      color: '#d5e8f5'
    },
    {
      id: 'nailArt',
      icon: '🎨',
      color: '#f5e8d5'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <HiSparkles /> Services <HiSparkles />
          </span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div
                className="service-icon"
                style={{ backgroundColor: service.color }}
              >
                <span>{service.icon}</span>
              </div>
              <h3 className="service-name">{t(`services.${service.id}.name`)}</h3>
              <p className="service-description">{t(`services.${service.id}.description`)}</p>
              <div className="service-meta">
                <span className="service-duration">
                  <HiClock /> {t(`services.${service.id}.duration`)}
                </span>
              </div>
              <div className="service-price">
                <HiPhone /> {t('services.callForPricing')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="tel:7876447465" className="cta-phone">
            <HiPhone />
            <span>(787) 644-PINK</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
