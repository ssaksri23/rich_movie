import { HoverCard } from '@mantine/core';
import styled from 'styled-components';
import { DEFAULT_BORDER_RADIUS_REM } from '../../../config/style';

interface SharedDefaultTooltipProps {
  contents: React.ReactNode;
  children: React.ReactElement;
}

const TargetContainer = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  text-align: left;
  cursor: pointer;
`;

export const SharedDefaultTooltip: React.FC<SharedDefaultTooltipProps> = ({ contents, children }) => {
  return (
    <HoverCard
      floatingStrategy="fixed"
      closeDelay={100}
      offset={{
        crossAxis: 150,
        mainAxis: 5,
      }}
      styles={{ dropdown: { padding: 0, borderRadius: DEFAULT_BORDER_RADIUS_REM } }}
      position="top"
      shadow="md"
    >
      <HoverCard.Target>
        <TargetContainer type="button">{children}</TargetContainer>
      </HoverCard.Target>
      <HoverCard.Dropdown>{contents}</HoverCard.Dropdown>
    </HoverCard>
  );
};
