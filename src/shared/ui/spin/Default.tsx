import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';
import { DEFAULT_BORDER_RADIUS_REM } from '../../../config/style';

const LoaderContainer = styled.div`
  z-index: 0;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const LoaderMask = styled.div<{ loading: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
  background: ${(props) => (props.loading ? '#0000003e' : 'none')};
  transition: background 0.2s;
`;

const BlurMask = styled.div<{ loading: boolean }>`
  width: 100%;
  height: 100%;
  filter: ${(props) => props.loading && `blur(4px)`};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledLoader = styled(ScaleLoader)<{ loading: boolean }>`
  display: ${(props) => (props.loading ? 'flex' : 'none')};
  z-index: 2;
`;

export const DefaultSpinner = ({ loading, children }) => {
  return (
    <LoaderContainer>
      <LoaderMask loading={loading}>
        <StyledLoader loading={loading} />
      </LoaderMask>
      <BlurMask loading={loading}>{children}</BlurMask>
    </LoaderContainer>
  );
};
