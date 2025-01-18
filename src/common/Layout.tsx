import styled from 'styled-components';

const RootLayoutContainer = styled.div`
  padding: 2rem;
`;

const RootLayout = ({ children }) => {
  return <RootLayoutContainer>{children}</RootLayoutContainer>;
};

export default RootLayout;
