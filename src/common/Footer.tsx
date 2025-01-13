import styled from 'styled-components';
import { COLOR } from '../lib/palette';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1rem 0;
  background: ${COLOR['backgroundColor']};

  @media ${(props) => props.theme.tabletM} {
    margin: 0 auto;
    /* padding: 1rem 0; */
  }
`;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 0.5rem;

  @media ${(props) => props.theme.tabletM} {
  }

  @media ${(props) => props.theme.mobileL} {
    width: 24rem;
  }

  @media ${(props) => props.theme.mobileM} {
    width: 20rem;
  }
`;

const TextBlock = styled.p`
  text-align: center;
  margin: 0;
`;

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterWrapper>
        <ContentsWrapper>
          <TextBlock>e-mail: dev.leejinw@gmail.com</TextBlock>
          <TextBlock>/</TextBlock>
          <TextBlock>
            Data Resource by <a href="http://www.kobis.or.kr">http://www.kobis.or.kr</a>
          </TextBlock>
        </ContentsWrapper>
      </FooterWrapper>
    </ThemeProvider>
  );
};

export default Footer;
