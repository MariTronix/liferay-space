import React, { createContext, useContext, ReactNode, useState } from 'react';
import { colors as defaultColors } from '../utils/styleUtils';

type StyleContextType = {
  colors: typeof defaultColors;
  updateColors: (newColors: Partial<typeof defaultColors>) => void;
  getMediaQueryStyle: (styles: Record<string, React.CSSProperties>) => any;
};

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [colors, setColors] = useState(defaultColors);

  const updateColors = (newColors: Partial<typeof defaultColors>) => {
    setColors(prevColors => ({
      ...prevColors,
      ...newColors
    }));
  };

  const getMediaQueryStyle = (mediaStyles: Record<string, React.CSSProperties>): any => {
    const uniqueId = Math.random().toString(36).substring(2, 9);
    
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    
    let cssRules = '';
    const classNames: string[] = [];
    
    Object.entries(mediaStyles).forEach(([query, styles], index) => {
      const className = `mq-${uniqueId}-${index}`;
      classNames.push(className);
      
      cssRules += `@media ${query} { .${className} {`;
      
      Object.entries(styles).forEach(([prop, value]) => {
        const cssProperty = prop.replace(/([A-Z])/g, match => `-${match.toLowerCase()}`);
        cssRules += `${cssProperty}: ${value} !important;`;
      });
      
      cssRules += '} }';
    });
    
    if (styleElement.sheet) {
      styleElement.textContent = cssRules;
    }
    
    return { customClasses: classNames.join(' ') };
  };

  const value = {
    colors,
    updateColors,
    getMediaQueryStyle
  };

  return (
    <StyleContext.Provider value={value}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};