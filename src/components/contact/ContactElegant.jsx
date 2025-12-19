import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HiSparkles, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './ContactElegant.css';

const ContactElegant = () => {
  const { t } = useLanguage();
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
    <section id="contact" className="contact-elegant">
      <div className="elegant-contact-container">
        <motion.div className="elegant-contact-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="elegant-contact-tag"><HiSparkles /> Contact <HiSparkles /></span>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="elegant-contact-content">
          <motion.div className="elegant-form-wrap" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {isSubmitted ? (
              <div className="elegant-form-success">
                <span>✨</span>
                <p>{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="elegant-form">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.name')} required />
                <div className="elegant-form-row">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.email')} required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('contact.phone')} required />
                </div>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">{t('contact.selectService')}</option>
                  <option value="gel-mani">{t('services.gelMani.name')}</option>
                  <option value="gel-pedi">{t('services.gelPedi.name')}</option>
                  <option value="gel-tips">{t('services.gelTips.name')}</option>
                  <option value="nail-art">{t('services.nailArt.name')}</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t('contact.messagePlaceholder')} rows="4" />
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? t('contact.sending') : t('contact.submit')}</button>
              </form>
            )}
          </motion.div>

          <motion.div className="elegant-info-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>{t('contact.orCall')}</h3>
            <a href="tel:7876447465" className="elegant-info-item">
              <HiPhone />
              <div><span>{t('contact.callText')}</span><strong>(787) 644-PINK</strong></div>
            </a>
            <a href="https://wa.me/17876447465" target="_blank" rel="noopener noreferrer" className="elegant-info-item whatsapp">
              <FaWhatsapp />
              <div><span>WhatsApp</span><strong>(787) 644-7465</strong></div>
            </a>
            <div className="elegant-info-item">
              <HiLocationMarker />
              <div><span>Location</span><strong>Puerto Rico 🇵🇷</strong><em>Mobile Service Available</em></div>
            </div>
            <div className="elegant-social">
              <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactElegant;
