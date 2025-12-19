import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import './FooterBold.css';

const FooterBold = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="footer-bold">
      <div className="bold-footer-container">
        <div className="bold-footer-top">
          <div className="bold-footer-cta">
            <span className="bold-cta-label">{language === 'en' ? 'READY TO BOOK?' : '¿LISTA PARA RESERVAR?'}</span>
            <h2>{language === 'en' ? 'Let\'s Create Beauty' : 'Creemos Belleza'}</h2>
            <a href="tel:7876447465" className="bold-cta-phone">(787) 644-PINK</a>
          </div>
          <Link to="hero" smooth={true} duration={500} className="bold-back-top">
            <HiArrowUp />
          </Link>
        </div>

        <div className="bold-footer-grid">
          <div className="bold-footer-brand">
            <div className="bold-footer-logo">
              <span>KIREI</span>
              <span>NAIL BAR</span>
            </div>
          </div>

          <div className="bold-footer-nav">
            <Link to="services" smooth={true} duration={500} offset={-70}>{t('nav.services')}</Link>
            <Link to="gallery" smooth={true} duration={500} offset={-70}>{t('nav.gallery')}</Link>
            <Link to="about" smooth={true} duration={500} offset={-70}>{t('nav.about')}</Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>{t('nav.contact')}</Link>
          </div>

          <div className="bold-footer-social">
            <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://wa.me/17876447465" target="_blank" rel="noopener noreferrer">WA</a>
          </div>
        </div>

        <div className="bold-footer-bottom">
          <span>&copy; {new Date().getFullYear()} KIREI NAIL BAR</span>
          <span>PUERTO RICO 🇵🇷</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterBold;
