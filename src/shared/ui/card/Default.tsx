import { Content, DefaultCardContainer, DefaultCardWrapper, Title } from './Default.styled';

interface Props {
  title: string | React.ReactElement;
  content: string | React.ReactElement;
}

export const SharedDefaultCard = ({ title, content }: Props) => {
  return (
    <DefaultCardContainer>
      <DefaultCardWrapper>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </DefaultCardWrapper>
    </DefaultCardContainer>
  );
};
