import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaHeart } from 'react-icons/fa';
import './FooterPlayful.css';

const FooterPlayful = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="footer-playful">
      <div className="playful-footer-wave">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 C300,100 900,0 1200,50 L1200,100 L0,100 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="playful-footer-container">
        <div className="playful-footer-top">
          <div className="playful-footer-logo">
            <span className="logo-emoji">💅</span>
            <div>
              <span className="logo-kirei">Kirei</span>
              <span className="logo-nail">Nail Bar</span>
            </div>
          </div>

          <p className="playful-footer-tagline">
            ✨ {t('footer.tagline')} ✨
          </p>

          <div className="playful-footer-social">
            <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer" className="social-ig">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer" className="social-fb">
              <FaFacebook />
            </a>
            <a href="https://wa.me/17876447465" target="_blank" rel="noopener noreferrer" className="social-wa">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="playful-footer-nav">
          <Link to="hero" smooth={true} duration={500}>🏠 {t('nav.home')}</Link>
          <Link to="services" smooth={true} duration={500} offset={-70}>💅 {t('nav.services')}</Link>
          <Link to="gallery" smooth={true} duration={500} offset={-70}>📸 {t('nav.gallery')}</Link>
          <Link to="about" smooth={true} duration={500} offset={-70}>💖 {t('nav.about')}</Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>📞 {t('nav.contact')}</Link>
        </div>

        <div className="playful-footer-contact">
          <a href="tel:7876447465" className="playful-phone">
            📱 (787) 644-PINK
          </a>
          <span className="playful-location">📍 Puerto Rico 🇵🇷</span>
        </div>

        <div className="playful-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kirei Nail Bar</p>
          <p>{t('footer.madeWith')} <FaHeart className="heart" /> in PR</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPlayful;
