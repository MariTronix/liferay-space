import { CSSProperties } from 'react';

// Helper to handle responsive styles
export const useResponsiveStyles = () => {
  const getResponsiveStyle = (defaultStyle: CSSProperties, mediaQueryStyles: Record<string, CSSProperties>) => {
    // Initialize with default styles
    const style = { ...defaultStyle };
    
    // Generate unique id for this style instance
    const styleId = `responsive-style-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create style element
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    
    // Build CSS rules for media queries
    let cssRules = '';
    
    Object.entries(mediaQueryStyles).forEach(([query, styles]) => {
      cssRules += `@media ${query} { .${styleId} {`;
      
      Object.entries(styles).forEach(([prop, value]) => {
        // Convert camelCase to kebab-case
        const kebabProp = prop.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        cssRules += `${kebabProp}: ${value} !important;`;
      });
      
      cssRules += '} }';
    });
    
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
    
    // Return both the style object and the data attribute for the media queries
    return {
      ...style,
      dataSet: { responsiveStyleId: styleId }
    };
  };
  
  return { getResponsiveStyle };
};

// Common style constants
export const colors = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  white: '#ffffff',
  red500: '#ef4444',
  green500: '#10b981',
  yellow500: '#f59e0b'
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px'
};

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem'
};

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

export const borderRadii = {
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px'
};
