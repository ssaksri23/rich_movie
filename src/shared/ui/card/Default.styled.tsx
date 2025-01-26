import styled from 'styled-components';
import { DEFAULT_BORDER_RADIUS_REM, DEFAULT_BOX_SHADOW } from '../../../config/style';
import { COLOR } from '../../../lib/palette';
import { FONT_SIZE, FONT_WEIGHT } from '../../../config/font';
import { RESPONSIVE_MEDIA_QUERY } from '../../../config/responsive';

export const DefaultCardContainer = styled.div`
  width: 100%;
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
  background: ${COLOR.sectionColor};
  box-shadow: ${DEFAULT_BOX_SHADOW};
`;

export const DefaultCardWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

export const DefaultCardContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${RESPONSIVE_MEDIA_QUERY.mobile} {
    padding: 0 0.5rem;
  }
`;

export const Title = styled.div<{ color?: string }>`
  color: ${(props) => props?.color ?? COLOR.text.basicColor};
  font-size: ${FONT_SIZE.SEMI_LARGE};
  font-weight: ${FONT_WEIGHT.REGULAR};

  @media ${RESPONSIVE_MEDIA_QUERY.tabletL} {
    font-size: ${FONT_SIZE.MEDIUM};
  }
  @media ${RESPONSIVE_MEDIA_QUERY.mobile} {
    font-size: ${FONT_SIZE.MEDIUM};
  }
`;

export const Content = styled.span<{ color?: string }>`
  color: ${(props) => props?.color ?? COLOR.text.basicColor};
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.REGULAR};

  @media ${RESPONSIVE_MEDIA_QUERY.mobile} {
    font-size: ${FONT_SIZE.SEMI_LARGE};
  }
`;

export const Unit = styled.span`
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.THIN};
  white-space: nowrap;

  @media ${RESPONSIVE_MEDIA_QUERY.mobile} {
    font-size: ${FONT_SIZE.SEMI_LARGE};
  }
`;
