import { useDesign } from '../../context/DesignContext';
import FooterElegant from './FooterElegant';
import FooterBold from './FooterBold';
import FooterMinimal from './FooterMinimal';
import FooterPlayful from './FooterPlayful';

const Footer = () => {
  const { currentDesign } = useDesign();

  switch (currentDesign) {
    case 'bold-editorial':
      return <FooterBold />;
    case 'minimal-luxe':
      return <FooterMinimal />;
    case 'playful-pop':
      return <FooterPlayful />;
    case 'elegant-flow':
    default:
      return <FooterElegant />;
  }
};

export default Footer;
