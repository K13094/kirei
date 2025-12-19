import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import './FooterElegant.css';

const FooterElegant = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), to: 'hero' },
    { name: t('nav.services'), to: 'services' },
    { name: t('nav.gallery'), to: 'gallery' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.contact'), to: 'contact' },
  ];

  return (
    <footer className="footer-elegant">
      <div className="elegant-footer-container">
        <div className="elegant-footer-main">
          <div className="elegant-footer-brand">
            <div className="elegant-footer-logo">
              <span className="logo-kirei">Kirei</span>
              <span className="logo-nail">Nail Bar</span>
            </div>
            <p>{t('footer.tagline')}</p>
            <div className="elegant-footer-social">
              <a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://wa.me/17876447465" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="elegant-footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} smooth={true} duration={500} offset={-70}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="elegant-footer-contact">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href="tel:7876447465"><HiPhone /> (787) 644-PINK</a></li>
              <li><a href="https://instagram.com/kireinailbar" target="_blank" rel="noopener noreferrer"><FaInstagram /> @kireinailbar</a></li>
              <li>📍 Puerto Rico 🇵🇷</li>
            </ul>
          </div>
        </div>

        <div className="elegant-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kirei Nail Bar. {t('footer.rights')}</p>
          <p>{t('footer.madeWith')} <FaHeart className="heart" /> in Puerto Rico</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterElegant;
