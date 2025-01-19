import { useEffect, useState } from 'react';
import { RESPONSIVE_BREAKPOINT } from '../../config/responsive';

type ResponsiveType = 'isMobile' | 'isTabletS' | 'isTabletL' | 'isLaptop' | 'isDesktop';

/**
 * @desc 현재 반응형 크기 유형을 boolean 타입으로 반환해주는 커스텀 훅 함수
 * @for 반응형 UI 및 스타일 적용
 * @returns
 */
export const useResponsiveSize = (): { [key in ResponsiveType]: boolean } => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < RESPONSIVE_BREAKPOINT.mobile;
  const isTabletS = width < RESPONSIVE_BREAKPOINT.tabletS;
  const isTabletL = width < RESPONSIVE_BREAKPOINT.tabletL;
  const isLaptop = width < RESPONSIVE_BREAKPOINT.laptop;
  const isDesktop = width >= RESPONSIVE_BREAKPOINT.laptop;

  return { isMobile, isTabletS, isTabletL, isLaptop, isDesktop };
};
