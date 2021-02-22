import styled, {createGlobalStyle} from 'styled-components';
import palette from './lib/palette';

const GlobalStyles = createGlobalStyle`

html, body {
    margin: 0;
    padding: 0;
    background: ${palette['backgroundColor']};
    color: ${palette['fontColor']};
    
    ::-webkit-scrollbar { display: none};
}


button {
    outline: 0;
    border: 0;
}


h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}
`
export default GlobalStyles;