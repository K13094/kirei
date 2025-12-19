import { useDesign } from '../../context/DesignContext';
import ServicesElegant from './ServicesElegant';
import ServicesBold from './ServicesBold';
import ServicesMinimal from './ServicesMinimal';
import ServicesPlayful from './ServicesPlayful';

const Services = () => {
  const { currentDesign } = useDesign();

  switch (currentDesign) {
    case 'bold-editorial':
      return <ServicesBold />;
    case 'minimal-luxe':
      return <ServicesMinimal />;
    case 'playful-pop':
      return <ServicesPlayful />;
    case 'elegant-flow':
    default:
      return <ServicesElegant />;
  }
};

export default Services;
