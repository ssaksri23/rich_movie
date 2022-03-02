import { createGlobalStyle } from 'styled-components';
import palette from '../../dist/lib/palette';

const GlobalStyles = createGlobalStyle`

html, body {
    margin: 0;
    padding: 0;
    background: ${palette['backgroundColor']};
    color: ${palette['basicColor']};
    overflow-x: hidden;
    height: 100vh;
    ::-webkit-scrollbar { display: none};
}


button {
    outline: 0;
    border: 0;
}



h1,h2,h3,h4,h5,h6,ul {
    margin: 0;
    padding: 0;
}

li {list-style: none;}
`;
export default GlobalStyles;
