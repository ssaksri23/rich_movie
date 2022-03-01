import React from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';
const FooterWrapper = styled.div `
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 1rem 0;
    background: ${palette["backgroundColor"]};


    @media ${(props) => props.theme.tabletM} {
        margin: 0 auto;
        padding: 1rem 0;
    }
`;
const FooterContents = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1rem;
    color: ${palette["basicColor"]};
    text-align: center;

    & + & {
        margin-top: 0.5rem;
    }
`;
const ContentsWrapper = styled.div `
    width: 30rem;

    @media ${(props) => props.theme.tabletM} {
    };

    @media ${(props) => props.theme.mobileL} {
        width: 24rem;
    };
    
    @media ${(props) => props.theme.mobileM} {
        width: 20rem;
    };

`;
const ContentsTop = styled(FooterContents) `
    width: 100%;
    justify-content: space-around;

    @media ${(props) => props.theme.mobileM} {
        font-size: 0.8rem;
    }
    `;
const ContentsBottom = styled(FooterContents) `
    width: 100%;
    justify-content: center;

    @media ${(props) => props.theme.mobileM} {
        font-size: 0.8rem;
    }
`;
const ContentsBlock = styled.div `
    width: auto;
`;
const TextBlock = styled.p `
    text-align: center;
    margin: 0;
`;
const Footer = () => {
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(FooterWrapper, null,
            React.createElement(ContentsWrapper, null,
                React.createElement(ContentsTop, null,
                    React.createElement(ContentsBlock, null,
                        React.createElement(TextBlock, null, "e-mail: dlwlsdn201@naver.com")),
                    React.createElement(ContentsBlock, null,
                        React.createElement(TextBlock, null, "Tel. 010-5159-7230"))),
                React.createElement(ContentsBottom, null,
                    React.createElement(TextBlock, null,
                        "Data Resource by ",
                        React.createElement("strong", null, "http://www.kobis.or.kr")))))));
};
export default Footer;
