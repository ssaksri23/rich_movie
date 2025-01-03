import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';
import { HeaderWrapper, HeaderContents } from './Header.Styled';

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <HeaderContents>박스오피스 랭킹</HeaderContents>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
