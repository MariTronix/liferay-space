import React, { ReactNode } from 'react';

type MediaQueryProps = {
  children: ReactNode;
  query: string;
};

/**
 * A component for conditionally rendering based on media queries
 */
const MediaQuery: React.FC<MediaQueryProps> = ({ children, query }) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches ? <>{children}</> : null;
};

export default MediaQuery;
