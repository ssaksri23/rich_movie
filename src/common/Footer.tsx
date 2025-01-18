import styled from 'styled-components';
import { COLOR } from '../lib/palette';

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: auto; // API 를 불러오지 못해서 영화 목록 컨텐츠 wrapper 높이가 변경되었을 때도 Footer 요소는 맨 하단 쪽에 유지시키기 위함.
  padding: 0;
  background: ${COLOR['backgroundColor']};

  @media ${(props) => props.theme.tabletM} {
    /* margin-top: auto; */
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
    <FooterContainer>
      <ContentsWrapper>
        <TextBlock>e-mail: dev.leejinw@gmail.com</TextBlock>
        <TextBlock>/</TextBlock>
        <TextBlock>
          Data Resource by <a href="http://www.kobis.or.kr">http://www.kobis.or.kr</a>
        </TextBlock>
      </ContentsWrapper>
    </FooterContainer>
  );
};

export default Footer;
