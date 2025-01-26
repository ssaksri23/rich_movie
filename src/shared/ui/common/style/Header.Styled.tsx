import { FONT_SIZE, FONT_WEIGHT } from '@shared/config/font';
import { COLOR } from '@shared/config/palette';
import { RESPONSIVE_MEDIA_QUERY } from '@shared/config/responsive';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media ${RESPONSIVE_MEDIA_QUERY.mobile} {
    justify-content: center;
  }
`;

export const HeaderContents = styled.span`
  font-size: ${FONT_SIZE.EXTRA};
  color: ${COLOR.text.basicColor};
  font-weight: ${FONT_WEIGHT.REGULAR};
  text-align: center;
  word-break: keep-all;

  @media ${RESPONSIVE_MEDIA_QUERY.mobile} {
    padding: 0;
    font-size: ${FONT_SIZE.SEMI_LARGE};
  }
`;
