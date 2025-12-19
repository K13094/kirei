import { useDesign } from '../../context/DesignContext';
import AboutElegant from './AboutElegant';
import AboutBold from './AboutBold';
import AboutMinimal from './AboutMinimal';
import AboutPlayful from './AboutPlayful';

const About = () => {
  const { currentDesign } = useDesign();

  switch (currentDesign) {
    case 'bold-editorial':
      return <AboutBold />;
    case 'minimal-luxe':
      return <AboutMinimal />;
    case 'playful-pop':
      return <AboutPlayful />;
    case 'elegant-flow':
    default:
      return <AboutElegant />;
  }
};

export default About;
