import { Content, DefaultCardContainer, DefaultCardWrapper, Title } from './Default.styled';

interface Props {
  title: string | React.ReactElement;
  titleColor?: string;
  content: string | React.ReactElement;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

export const SharedDefaultCard = ({ title, titleColor, content, ref }: Props) => {
  return (
    <DefaultCardContainer ref={ref}>
      <DefaultCardWrapper>
        <Title color={titleColor}>{title}</Title>
        <Content>{content}</Content>
      </DefaultCardWrapper>
    </DefaultCardContainer>
  );
};
