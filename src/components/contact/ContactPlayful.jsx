import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiSparkles, HiPhone } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './ContactPlayful.css';

const ContactPlayful = () => {
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
    <section id="contact" className="contact-playful">
      <div className="playful-contact-shapes">
        <div className="playful-c-shape shape-c1" />
        <div className="playful-c-shape shape-c2" />
      </div>

      <div className="playful-contact-container">
        <motion.div className="playful-contact-header" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="playful-contact-badge">
            💌 {language === 'en' ? 'Let\'s Chat!' : '¡Hablemos!'} 💌
          </span>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="playful-contact-content">
          <motion.div className="playful-contact-card" initial={{ opacity: 0, rotate: -2 }} whileInView={{ opacity: 1, rotate: -2 }} viewport={{ once: true }} whileHover={{ rotate: 0 }}>
            <div className="playful-card-header">
              <span>📱</span>
              <h3>{language === 'en' ? 'Quick Contact' : 'Contacto Rápido'}</h3>
            </div>

            <a href="tel:7876447465" className="playful-contact-btn phone">
              <HiPhone />
              <span>(787) 644-PINK</span>
            </a>

            <a href="https://wa.me/17876447465" target="_blank" rel="noopener noreferrer" className="playful-contact-btn whatsapp">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <div className="playful-location">
              📍 Puerto Rico 🇵🇷
            </div>

            <div className="playful-social">
              <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </motion.div>

          <motion.div className="playful-form-card" initial={{ opacity: 0, rotate: 2 }} whileInView={{ opacity: 1, rotate: 2 }} viewport={{ once: true }} whileHover={{ rotate: 0 }}>
            {isSubmitted ? (
              <div className="playful-success">
                <span>🎉</span>
                <h3>{language === 'en' ? 'Yay!' : '¡Genial!'}</h3>
                <p>{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="playful-form">
                <div className="playful-form-group">
                  <span className="playful-input-icon">👋</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.name')} required />
                </div>
                <div className="playful-form-row">
                  <div className="playful-form-group">
                    <span className="playful-input-icon">📧</span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.email')} required />
                  </div>
                  <div className="playful-form-group">
                    <span className="playful-input-icon">📞</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('contact.phone')} required />
                  </div>
                </div>
                <div className="playful-form-group">
                  <span className="playful-input-icon">💅</span>
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">{t('contact.selectService')}</option>
                    <option value="gel-mani">{t('services.gelMani.name')}</option>
                    <option value="gel-pedi">{t('services.gelPedi.name')}</option>
                    <option value="gel-tips">{t('services.gelTips.name')}</option>
                    <option value="nail-art">{t('services.nailArt.name')}</option>
                  </select>
                </div>
                <div className="playful-form-group">
                  <span className="playful-input-icon">💬</span>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t('contact.messagePlaceholder')} rows="3" />
                </div>
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {isSubmitting ? '⏳ ' + t('contact.sending') : '✨ ' + t('contact.submit')}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPlayful;
