import { HoverCard } from '@mantine/core';
import styled from 'styled-components';

interface SharedDefaultTooltipProps {
  contents: React.ReactNode;
  children: React.ReactElement;
}

const TargetContainer = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  text-align: left;
`;

export const SharedDefaultTooltip: React.FC<SharedDefaultTooltipProps> = ({ contents, children }) => {
  return (
    <HoverCard width={300} shadow="md">
      <HoverCard.Target>
        <TargetContainer type="button">{children}</TargetContainer>
      </HoverCard.Target>
      <HoverCard.Dropdown>{contents}</HoverCard.Dropdown>
    </HoverCard>
  );
};
