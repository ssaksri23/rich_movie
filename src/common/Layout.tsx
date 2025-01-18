import styled from 'styled-components';
import { SharedFooter, SharedHeader } from '../shared/ui/common/ui';

const RootLayoutContainer = styled.div`
  padding: 2rem 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const RootLayout = ({ children }) => {
  return (
    <RootLayoutContainer>
      <SharedHeader />
      {children}
      <SharedFooter />
    </RootLayoutContainer>
  );
};

export default RootLayout;
