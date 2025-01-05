import styled from 'styled-components';
import palette from '../lib/palette';
import { FONT_SIZE } from '../config/font';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  height: 5%;
`;

export const HeaderContents = styled.span`
  font-size: ${FONT_SIZE.EXTRA};
  color: ${palette.text.basicColor};
  text-align: center;

  @media ${(props) => props.theme.mobileM} {
    padding: 0 1rem;
    font-size: 1.5rem;
  }
`;
