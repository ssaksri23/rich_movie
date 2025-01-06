import styled from 'styled-components';
import { DEFAULT_BORDER_RADIUS_REM } from '../../../config/style';
import { COLOR } from '../../../lib/palette';
import { FONT_SIZE, FONT_WEIGHT } from '../../../config/font';

export const DefaultCardContainer = styled.div`
  width: 100%;
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
  background: ${COLOR.sectionColor};
`;

export const DefaultCardWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

export const Title = styled.div<{ color?: string }>`
  color: ${(props) => props?.color ?? COLOR.text.basicColor};
  font-size: ${FONT_SIZE.SEMI_SMALL};
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};

  @media ${(props) => props.theme.mobileL} {
    font-size: ${FONT_SIZE.SMALL};
  }

  @media ${(props) => props.theme.mobileM} {
    font-size: ${FONT_SIZE.SMALL};
  }
`;

export const Content = styled.div<{ color?: string }>`
  color: ${(props) => props?.color ?? COLOR.text.basicColor};
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};

  @media ${(props) => props.theme.mobileL} {
    font-size: ${FONT_SIZE.MEDIUM};
  }

  @media ${(props) => props.theme.mobileM} {
    font-size: ${FONT_SIZE.SEMI_SMALL};
  }
`;
