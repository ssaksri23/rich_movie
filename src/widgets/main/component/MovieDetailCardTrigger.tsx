import { DailyBoxOffice } from '@shared/api/model/movie';
import { SharedDefaultTooltip } from '@shared/ui';
import MovieDetailCardContent from './MovieDetailCardContent';

interface MovieDetailCardTriggerProps {
  children: React.ReactElement;
  data: Partial<DailyBoxOffice>;
}

const MovieDetailCardTrigger: React.FC<MovieDetailCardTriggerProps> = ({ data, children }) => {
  const contents = <MovieDetailCardContent data={data} />;
  return <SharedDefaultTooltip contents={contents}>{children}</SharedDefaultTooltip>;
};

export default MovieDetailCardTrigger;
