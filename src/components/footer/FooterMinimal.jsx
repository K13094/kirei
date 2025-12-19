import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './FooterMinimal.css';

const FooterMinimal = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="footer-minimal">
      <div className="minimal-footer-container">
        <div className="minimal-footer-line" />

        <div className="minimal-footer-content">
          <div className="minimal-footer-logo">
            <span>Kirei</span>
            <span>Nail Bar</span>
          </div>

          <nav className="minimal-footer-nav">
            <Link to="services" smooth={true} duration={500} offset={-70}>{t('nav.services')}</Link>
            <Link to="gallery" smooth={true} duration={500} offset={-70}>{t('nav.gallery')}</Link>
            <Link to="about" smooth={true} duration={500} offset={-70}>{t('nav.about')}</Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>{t('nav.contact')}</Link>
          </nav>

          <div className="minimal-footer-info">
            <a href="tel:7876447465">(787) 644-PINK</a>
            <span>Puerto Rico</span>
          </div>
        </div>

        <div className="minimal-footer-bottom">
          <span>&copy; {new Date().getFullYear()}</span>
          <div className="minimal-footer-social">
            <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;
