import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';
import { HeaderWrapper, HeaderContents } from './Header.Styled';

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <HeaderContents>일간 박스오피스 Top 10 분석 서비스</HeaderContents>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
