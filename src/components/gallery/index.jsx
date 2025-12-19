import { useDesign } from '../../context/DesignContext';
import GalleryElegant from './GalleryElegant';
import GalleryBold from './GalleryBold';
import GalleryMinimal from './GalleryMinimal';
import GalleryPlayful from './GalleryPlayful';

const Gallery = () => {
  const { currentDesign } = useDesign();

  switch (currentDesign) {
    case 'bold-editorial':
      return <GalleryBold />;
    case 'minimal-luxe':
      return <GalleryMinimal />;
    case 'playful-pop':
      return <GalleryPlayful />;
    case 'elegant-flow':
    default:
      return <GalleryElegant />;
  }
};

export default Gallery;
