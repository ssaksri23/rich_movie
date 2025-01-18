import styled from 'styled-components';
import { COLOR } from '../lib/palette';
import { FONT_SIZE } from '../config/font';

export const TotalValueCardLayoutWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;

export const ErrorContent = styled.div`
  color: ${COLOR.text.strongColor3};
  font-size: ${FONT_SIZE.MEDIUM};
`;
