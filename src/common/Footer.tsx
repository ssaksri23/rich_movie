import React from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';

const FooterWrapper = styled.div`
  width: 100vw;
  height: 10%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  /* padding: 1rem 0; */
  background: ${palette['backgroundColor']};

  @media ${(props) => props.theme.tabletM} {
    margin: 0 auto;
    /* padding: 1rem 0; */
  }
`;

const FooterContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  color: ${palette['basicColor']};
  text-align: center;

  & + & {
    margin-top: 0.5rem;
  }
`;

const ContentsWrapper = styled.div`
  width: 30rem;

  @media ${(props) => props.theme.tabletM} {
  }

  @media ${(props) => props.theme.mobileL} {
    width: 24rem;
  }

  @media ${(props) => props.theme.mobileM} {
    width: 20rem;
  } ;
`;

const ContentsTop = styled(FooterContents)`
  width: 100%;
  justify-content: space-around;

  @media ${(props) => props.theme.mobileM} {
    font-size: 0.8rem;
  }
`;

const ContentsBottom = styled(FooterContents)`
  width: 100%;
  justify-content: center;

  @media ${(props) => props.theme.mobileM} {
    font-size: 0.8rem;
  }
`;

const ContentsBlock = styled.div`
  width: auto;
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
          <ContentsTop>
            <ContentsBlock>
              <TextBlock>e-mail: dlwlsdn201@naver.com</TextBlock>
            </ContentsBlock>
            <ContentsBlock>
              <TextBlock>Tel. 010-5159-7230</TextBlock>
            </ContentsBlock>
          </ContentsTop>
          <ContentsBottom>
            <TextBlock>
              Data Resource by <strong>http://www.kobis.or.kr</strong>
            </TextBlock>
          </ContentsBottom>
        </ContentsWrapper>
      </FooterWrapper>
    </ThemeProvider>
  );
};

export default Footer;
