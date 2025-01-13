import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';
import { HeaderWrapper, HeaderContents } from './Header.Styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContents>일간 박스오피스 Top 10 분석 서비스</HeaderContents>
    </HeaderWrapper>
  );
};

export default Header;
