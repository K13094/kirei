import { createContext, useContext, useState, useEffect } from 'react';

const DesignContext = createContext();

export const designs = {
  elegantFlow: {
    id: 'elegant-flow',
    name: 'Elegant Flow',
    nameEs: 'Flujo Elegante',
    description: 'Soft curves, organic shapes, romantic feel',
    descriptionEs: 'Curvas suaves, formas orgánicas, sensación romántica',
    preview: '🌸'
  },
  boldEditorial: {
    id: 'bold-editorial',
    name: 'Bold Editorial',
    nameEs: 'Editorial Audaz',
    description: 'Magazine-style, dramatic typography, asymmetric',
    descriptionEs: 'Estilo revista, tipografía dramática, asimétrico',
    preview: '📰'
  },
  minimalLuxe: {
    id: 'minimal-luxe',
    name: 'Minimal Luxe',
    nameEs: 'Lujo Minimal',
    description: 'Ultra clean, sharp lines, lots of whitespace',
    descriptionEs: 'Ultra limpio, líneas nítidas, mucho espacio',
    preview: '◼️'
  },
  playfulPop: {
    id: 'playful-pop',
    name: 'Playful Pop',
    nameEs: 'Pop Divertido',
    description: 'Geometric shapes, vibrant colors, fun animations',
    descriptionEs: 'Formas geométricas, colores vibrantes, animaciones',
    preview: '🎨'
  }
};

export const DesignProvider = ({ children }) => {
  const [currentDesign, setCurrentDesign] = useState(() => {
    const saved = localStorage.getItem('kirei-design');
    return saved || 'elegant-flow';
  });

  useEffect(() => {
    localStorage.setItem('kirei-design', currentDesign);
    document.documentElement.setAttribute('data-design', currentDesign);
  }, [currentDesign]);

  const getDesignInfo = () => {
    return Object.values(designs).find(d => d.id === currentDesign) || designs.elegantFlow;
  };

  return (
    <DesignContext.Provider value={{
      currentDesign,
      setCurrentDesign,
      getDesignInfo,
      designs
    }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};
