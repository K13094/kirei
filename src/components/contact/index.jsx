import { useDesign } from '../../context/DesignContext';
import ContactElegant from './ContactElegant';
import ContactBold from './ContactBold';
import ContactMinimal from './ContactMinimal';
import ContactPlayful from './ContactPlayful';

const Contact = () => {
  const { currentDesign } = useDesign();

  switch (currentDesign) {
    case 'bold-editorial':
      return <ContactBold />;
    case 'minimal-luxe':
      return <ContactMinimal />;
    case 'playful-pop':
      return <ContactPlayful />;
    case 'elegant-flow':
    default:
      return <ContactElegant />;
  }
};

export default Contact;
