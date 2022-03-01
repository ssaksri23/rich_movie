import React from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';
const HeaderWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1rem 0;
    background: ${palette["wrapperColor"]};
`;
const HeaderContents = styled.span `
    font-size: 2rem;
    font-family: 'Yeon Sung', cursive;
    color: ${palette["strongColor"]};
    text-align: center;

    
    @media ${(props) => props.theme.mobileM} {
        padding: 0 1rem;
        font-size: 1.5rem; 
    };
`;
const Header = () => {
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(HeaderWrapper, null,
            React.createElement(HeaderContents, null, "\uBC15\uC2A4\uC624\uD53C\uC2A4 \uC601\uD654 \uC21C\uC704 \uC815\uBCF4 \uC0AC\uC774\uD2B8"))));
};
export default Header;
