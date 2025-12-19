import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiPhone, HiArrowRight } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './ContactBold.css';

const ContactBold = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-bold">
      <div className="bold-contact-header">
        <motion.span className="bold-contact-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {language === 'en' ? 'GET IN TOUCH' : 'CONTÁCTANOS'}
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {t('contact.title')}
        </motion.h2>
      </div>

      <div className="bold-contact-grid">
        <motion.div className="bold-contact-info" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bold-info-block">
            <span className="bold-info-label">{language === 'en' ? 'CALL US' : 'LLÁMANOS'}</span>
            <a href="tel:7876447465" className="bold-phone-link">
              (787) 644-PINK
              <HiArrowRight />
            </a>
          </div>

          <div className="bold-info-block">
            <span className="bold-info-label">WHATSAPP</span>
            <a href="https://wa.me/17876447465" target="_blank" rel="noopener noreferrer" className="bold-whatsapp-link">
              <FaWhatsapp />
              (787) 644-7465
            </a>
          </div>

          <div className="bold-info-block">
            <span className="bold-info-label">{language === 'en' ? 'LOCATION' : 'UBICACIÓN'}</span>
            <p>Puerto Rico 🇵🇷<br /><small>{language === 'en' ? 'Mobile Service' : 'Servicio Móvil'}</small></p>
          </div>

          <div className="bold-social">
            <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </motion.div>

        <motion.div className="bold-contact-form-wrap" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          {isSubmitted ? (
            <div className="bold-success">
              <span>✨</span>
              <h3>{t('contact.success')}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bold-form">
              <div className="bold-form-group">
                <label>{t('contact.name')}</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="bold-form-row">
                <div className="bold-form-group">
                  <label>{t('contact.email')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="bold-form-group">
                  <label>{t('contact.phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="bold-form-group">
                <label>{t('contact.selectService')}</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">—</option>
                  <option value="gel-mani">{t('services.gelMani.name')}</option>
                  <option value="gel-pedi">{t('services.gelPedi.name')}</option>
                  <option value="gel-tips">{t('services.gelTips.name')}</option>
                  <option value="nail-art">{t('services.nailArt.name')}</option>
                </select>
              </div>
              <div className="bold-form-group">
                <label>{t('contact.messagePlaceholder')}</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('contact.sending') : t('contact.submit')}
                <HiArrowRight />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBold;
