import { Content, DefaultCardContainer, DefaultCardWrapper, Title } from './Default.styled';

interface Props {
  title: string | React.ReactElement;
  titleColor?: string;
  content: string | React.ReactElement;
}

export const SharedDefaultCard = ({ title, titleColor, content }: Props) => {
  return (
    <DefaultCardContainer>
      <DefaultCardWrapper>
        <Title color={titleColor}>{title}</Title>
        <Content>{content}</Content>
      </DefaultCardWrapper>
    </DefaultCardContainer>
  );
};
