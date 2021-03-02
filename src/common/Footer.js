import React from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';

const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 1rem 23rem;
    background: ${palette["backgroundColor"]};
`

const FooterContents = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1rem;
    color: ${palette["basicColor"]};
    text-align: center;

    & + & {
        margin-top: 0.5rem;
    }
`

const ContentsTop = styled(FooterContents)``;
const ContentsBottom = styled(FooterContents)`
    justify-content: center;
`;

const ContentsBlock = styled.div`
    width: auto;
`

const TextBlock = styled.p`
    text-align: center;
    margin: 0;

`


const Footer = () => {
    return (
        <FooterWrapper>
            <ContentsTop>
                <ContentsBlock>
                    <TextBlock>
                        e-mail: dlwlsdn201@naver.com 
                    </TextBlock>
                </ContentsBlock>
                <ContentsBlock>
                    <TextBlock>
                        Tel. 010-5159-7230
                    </TextBlock>
                </ContentsBlock>
            </ContentsTop>
            <ContentsBottom>
                <TextBlock>
                    Data Resource by <strong>http://www.kobis.or.kr</strong>
                </TextBlock>
            </ContentsBottom>
        </FooterWrapper>
    );
};

export default Footer;