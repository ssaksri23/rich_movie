import { SharedDefaultSkeleton } from '@shared/ui';
import {
  Content,
  DefaultCardContainer,
  DefaultCardContentsWrapper,
  DefaultCardWrapper,
  Title,
  Unit,
} from './Default.styled';

interface Props {
  title: string | React.ReactElement;
  titleColor?: string;
  content: string | React.ReactElement;
  unit?: string;
  isLoading?: boolean;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

export const SharedDefaultCard = ({ title, titleColor, content, unit, isLoading, ref }: Props) => {
  return (
    <DefaultCardContainer ref={ref}>
      <DefaultCardWrapper>
        <Title color={titleColor}>{title}</Title>
        <DefaultCardContentsWrapper>
          <SharedDefaultSkeleton isLoading={isLoading}>
            <Content>{content}</Content>
          </SharedDefaultSkeleton>
          <Unit>{unit}</Unit>
        </DefaultCardContentsWrapper>
      </DefaultCardWrapper>
    </DefaultCardContainer>
  );
};
