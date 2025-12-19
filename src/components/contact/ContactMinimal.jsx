import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiPhone } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './ContactMinimal.css';

const ContactMinimal = () => {
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
    <section id="contact" className="contact-minimal">
      <div className="minimal-contact-container">
        <motion.div className="minimal-contact-header" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="minimal-contact-line" />
          <h2>{language === 'en' ? 'Contact' : 'Contacto'}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="minimal-contact-grid">
          <motion.div className="minimal-contact-left" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="minimal-contact-block">
              <span className="minimal-block-label">{language === 'en' ? 'Phone' : 'Teléfono'}</span>
              <a href="tel:7876447465" className="minimal-block-value">(787) 644-PINK</a>
            </div>
            <div className="minimal-contact-block">
              <span className="minimal-block-label">WhatsApp</span>
              <a href="https://wa.me/17876447465" target="_blank" rel="noopener noreferrer" className="minimal-block-value">(787) 644-7465</a>
            </div>
            <div className="minimal-contact-block">
              <span className="minimal-block-label">{language === 'en' ? 'Location' : 'Ubicación'}</span>
              <span className="minimal-block-value">Puerto Rico</span>
            </div>
            <div className="minimal-contact-block">
              <span className="minimal-block-label">{language === 'en' ? 'Follow' : 'Síguenos'}</span>
              <div className="minimal-social">
                <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </motion.div>

          <motion.div className="minimal-contact-right" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            {isSubmitted ? (
              <div className="minimal-success">
                <span>✨</span>
                <p>{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="minimal-form">
                <div className="minimal-form-group full">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                  <label>{t('contact.name')}</label>
                </div>
                <div className="minimal-form-group">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  <label>{t('contact.email')}</label>
                </div>
                <div className="minimal-form-group">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  <label>{t('contact.phone')}</label>
                </div>
                <div className="minimal-form-group full">
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">{t('contact.selectService')}</option>
                    <option value="gel-mani">{t('services.gelMani.name')}</option>
                    <option value="gel-pedi">{t('services.gelPedi.name')}</option>
                    <option value="gel-tips">{t('services.gelTips.name')}</option>
                    <option value="nail-art">{t('services.nailArt.name')}</option>
                  </select>
                </div>
                <div className="minimal-form-group full">
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="3" />
                  <label>{t('contact.messagePlaceholder')}</label>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMinimal;
