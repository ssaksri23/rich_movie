// number 타입으로 선언하여 RESPONSIVE_MEDIA_QUERY를 사용하면 css 적용 안됨
export const RESPONSIVE_BREAKPOINT = {
  mobile: 480,
  tabletS: 1000,
  tabletL: 1440,
  laptop: 1920,
};

export const RESPONSIVE_MEDIA_QUERY = {
  mobile: `(max-width: ${RESPONSIVE_BREAKPOINT.mobile}px)`,
  tabletS: `(max-width: ${RESPONSIVE_BREAKPOINT.tabletS}px)`,
  tabletL: `(max-width: ${RESPONSIVE_BREAKPOINT.tabletL}px)`,
  laptop: `(max-width: ${RESPONSIVE_BREAKPOINT.laptop}px)`,
  desktop: `(min-width: ${RESPONSIVE_BREAKPOINT.laptop}px)`,
};
