import styled from 'styled-components';
import { DEFAULT_BORDER_RADIUS_REM, DEFAULT_BOX_SHADOW } from '../../../config/style';
import { COLOR } from '../../../lib/palette';
import { FONT_SIZE, FONT_WEIGHT } from '../../../config/font';

export const DefaultCardContainer = styled.div`
  width: 100%;
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
  background: ${COLOR.sectionColor};
  box-shadow: ${DEFAULT_BOX_SHADOW};
`;

export const DefaultCardWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

export const DefaultCardContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const Title = styled.div<{ color?: string }>`
  color: ${(props) => props?.color ?? COLOR.text.basicColor};
  font-size: ${FONT_SIZE.SEMI_SMALL};
  font-weight: ${FONT_WEIGHT.REGULAR};

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
  font-weight: ${FONT_WEIGHT.REGULAR};

  @media ${(props) => props.theme.mobileL} {
    font-size: ${FONT_SIZE.MEDIUM};
  }

  @media ${(props) => props.theme.mobileM} {
    font-size: ${FONT_SIZE.SEMI_SMALL};
  }
`;

export const Unit = styled.div`
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.THIN};
  white-space: nowrap;

  @media ${(props) => props.theme.mobileL} {
    font-size: ${FONT_SIZE.MEDIUM};
  }

  @media ${(props) => props.theme.mobileM} {
    font-size: ${FONT_SIZE.SEMI_SMALL};
  }
`;
