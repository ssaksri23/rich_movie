import { SharedDefaultTooltip } from '../../shared/ui';

interface MovieDetailCardProps {
  children: React.ReactElement;
  // contents: React.ReactNode;
}

const MovieDetailCard: React.FC<MovieDetailCardProps> = ({ children }) => {
  const contents = <div>make some Contents!!</div>;
  return <SharedDefaultTooltip contents={contents}>{children}</SharedDefaultTooltip>;
};

export default MovieDetailCard;
