import { COLOR } from '@shared/config/palette';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: auto; // API 를 불러오지 못해서 영화 목록 컨텐츠 wrapper 높이가 변경되었을 때도 Footer 요소는 맨 하단 쪽에 유지시키기 위함.
  padding-bottom: 1.5rem;
  background: ${COLOR['backgroundColor']};

  @media ${(props) => props.theme.tabletM} {
  }
`;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 0.5rem;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    gap: 0.125rem;
  }
`;

const TextBlock = styled.span`
  text-align: center;
  margin: 0;
`;

export const SharedFooter = () => {
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
