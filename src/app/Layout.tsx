import { RESPONSIVE_MEDIA_QUERY } from '@shared/config/responsive';
import { SharedHeader, SharedFooter } from '@shared/ui';
import styled from 'styled-components';

const RootLayoutContainer = styled.div`
  padding: 2rem 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${RESPONSIVE_MEDIA_QUERY.mobile} {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }
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
