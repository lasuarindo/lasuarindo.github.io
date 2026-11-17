import { useState, useEffect } from 'react';

export function useResponsive() {
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  }));

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimensions;

  const isSmallMobile = width < 380;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isLaptop = width >= 1024 && width < 1280;
  const isDesktop = width >= 1024; // matching react_native isDesktop (>= 1024)
  const isWide = width >= 1440;
  const isXl = width >= 1280;

  const isSm = width >= 640;
  const isMd = width >= 768;
  const isLg = width >= 1024;

  const pagePadding = isSmallMobile ? 14 : isMobile ? 18 : isTablet ? 24 : 32;
  const containerMaxWidth = 1280;
  const contentWidth = Math.min(width, containerMaxWidth) - (isMobile ? 32 : 48);

  return {
    width,
    height,
    isSmallMobile,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isWide,
    isSm,
    isMd,
    isLg,
    isXl,
    pagePadding,
    contentWidth,
    containerMaxWidth,
  };
}
