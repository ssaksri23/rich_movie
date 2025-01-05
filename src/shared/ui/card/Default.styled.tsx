import styled from 'styled-components';
import { DEFAULT_BORDER_RADIUS_REM } from '../../../config/style';
import palette from '../../../lib/palette';
import { FONT_SIZE, FONT_WEIGHT } from '../../../config/font';

export const DefaultCardContainer = styled.div`
  width: 100%;
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
  background: ${palette.sectionColor};
`;

export const DefaultCardWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

export const Title = styled.div<{ color?: string }>`
  color: ${(props) => props?.color ?? palette.text.basicColor};
  font-size: ${FONT_SIZE.SEMI_SMALL};
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
`;

export const Content = styled.div<{ color?: string }>`
  color: ${(props) => props?.color ?? palette.text.basicColor};
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
`;
