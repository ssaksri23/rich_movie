import React from 'react';
import styled from 'styled-components';
import palette from '../../dist/lib/palette';
import { ThemeProvider } from 'styled-components';
import theme from '../../dist/lib/deviceTheme';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem 0;
  background: ${palette['wrapperColor']};
`;

const HeaderContents = styled.span`
  font-size: 2rem;
  font-family: 'Yeon Sung', cursive;
  color: ${palette['strongColor']};
  text-align: center;

  @media ${(props) => props.theme.mobileM} {
    padding: 0 1rem;
    font-size: 1.5rem;
  } ;
`;

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <HeaderContents>박스오피스 영화 순위 정보 사이트</HeaderContents>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
