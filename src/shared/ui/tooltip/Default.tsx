import { HoverCard } from '@mantine/core';
import { DEFAULT_BORDER_RADIUS_REM, DEFAULT_BOX_SHADOW } from '@shared/config/style';
import styled from 'styled-components';

interface SharedDefaultTooltipProps {
  contents: React.ReactNode;
  children: React.ReactElement;
}

const TargetContainer = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  background: none;
  text-align: left;
  cursor: pointer;
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
  box-shadow: ${DEFAULT_BOX_SHADOW};
`;

export const SharedDefaultTooltip: React.FC<SharedDefaultTooltipProps> = ({ contents, children }) => {
  return (
    <HoverCard
      floatingStrategy="fixed"
      closeDelay={100}
      offset={{
        crossAxis: 400,
        mainAxis: 3,
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
