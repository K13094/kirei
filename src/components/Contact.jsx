import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HiSparkles, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Replace with actual form handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <HiSparkles /> Contact <HiSparkles />
          </span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="form-success">
                <span className="success-icon">✨</span>
                <p>{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.name')}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.email')}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.phone')}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('contact.selectService')}</option>
                    <option value="gel-mani">{t('services.gelMani.name')}</option>
                    <option value="gel-pedi">{t('services.gelPedi.name')}</option>
                    <option value="gel-tips">{t('services.gelTips.name')}</option>
                    <option value="nail-art">{t('services.nailArt.name')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card">
              <h3>{t('contact.orCall')}</h3>

              <a href="tel:7876447465" className="info-item phone">
                <div className="info-icon">
                  <HiPhone />
                </div>
                <div className="info-text">
                  <span className="info-label">{t('contact.callText')}</span>
                  <span className="info-value">(787) 644-PINK</span>
                </div>
              </a>

              <a
                href="https://wa.me/17876447465"
                target="_blank"
                rel="noopener noreferrer"
                className="info-item whatsapp"
              >
                <div className="info-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <div className="info-text">
                  <span className="info-label">WhatsApp</span>
                  <span className="info-value">(787) 644-7465</span>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon">
                  <HiLocationMarker />
                </div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Puerto Rico 🇵🇷</span>
                  <span className="info-note">Mobile Service Available</span>
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://instagram.com/kireinailbar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
