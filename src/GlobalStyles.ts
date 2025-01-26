import '@mantine/dates/styles.css';
import { COLOR } from '@shared/config/palette';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html, body {
    margin: 0;
    padding: 0;
    background: ${COLOR['backgroundColor']};
    color: ${COLOR['basicColor']};
    overflow-x: hidden;
    height: 100%;
    ::-webkit-scrollbar { display: none};
    font-family: 'Do Hyeon', 'Roboto';
}


button {
    outline: 0;
    border: 0;
}



h1,h2,h3,h4,h5,h6,ul {
    margin: 0;
    padding: 0;
}

.movies {
  height: 100%;
  width: 100%;
}

#root {
  height: 100%;
}

p, div {
  margin: 0;
}

ul {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}
li {list-style: none;
height: 100%;}
`;
export default GlobalStyles;
