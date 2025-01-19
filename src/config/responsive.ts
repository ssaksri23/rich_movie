// number 타입으로 선언하여 RESPONSIVE_MEDIA_QUERY를 사용하면 css 적용 안됨
export const RESPONSIVE_BREAKPOINT = {
  mobile: '480px',
  tabletS: '1000px',
  tabletL: '1440px',
  laptop: '1920px',
};

export const RESPONSIVE_MEDIA_QUERY = {
  mobile: `(max-width: ${RESPONSIVE_BREAKPOINT.mobile})`,
  tabletS: `(max-width: ${RESPONSIVE_BREAKPOINT.tabletS})`,
  tabletL: `(max-width: ${RESPONSIVE_BREAKPOINT.tabletL})`,
  laptop: `(max-width: ${RESPONSIVE_BREAKPOINT.laptop})`,
  desktop: `(min-width: ${RESPONSIVE_BREAKPOINT.laptop})`,
};
