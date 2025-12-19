import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { HiPhone, HiMail } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), to: 'hero' },
    { name: t('nav.services'), to: 'services' },
    { name: t('nav.gallery'), to: 'gallery' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.contact'), to: 'contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-kirei">Kirei</span>
              <span className="logo-nail">Nail Bar</span>
            </div>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="footer-social">
              <a
                href="https://instagram.com/kireinailbar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/p/Kirei-Nail-Bar-61554028620039/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/17876447465"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li>
                <a href="tel:7876447465">
                  <HiPhone />
                  <span>(787) 644-PINK</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kireinailbar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                  <span>@kireinailbar</span>
                </a>
              </li>
              <li className="location">
                <span>📍 Puerto Rico 🇵🇷</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Kirei Nail Bar. {t('footer.rights')}
          </p>
          <p className="made-with">
            {t('footer.madeWith')} <FaHeart className="heart" /> in Puerto Rico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
