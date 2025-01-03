import React from 'react';
import styled from 'styled-components';

const RootLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const RootLayout = ({ children }) => {
  return <RootLayoutContainer>{children}</RootLayoutContainer>;
};

export default RootLayout;
