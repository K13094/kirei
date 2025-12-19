import { useDesign } from '../../context/DesignContext';
import HeroElegant from './HeroElegant';
import HeroBold from './HeroBold';
import HeroMinimal from './HeroMinimal';
import HeroPlayful from './HeroPlayful';

const Hero = () => {
  const { currentDesign } = useDesign();

  switch (currentDesign) {
    case 'bold-editorial':
      return <HeroBold />;
    case 'minimal-luxe':
      return <HeroMinimal />;
    case 'playful-pop':
      return <HeroPlayful />;
    case 'elegant-flow':
    default:
      return <HeroElegant />;
  }
};

export default Hero;
