import styled from 'styled-components';
import MovieItem, { MovieItemProps } from './component/MovieItem';
import MovieDetailCardTrigger from './component/MovieDetailCardTrigger';
import { forwardRef } from 'react';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

interface Movie {
  movieNm: string;
  movieCd: string;
  openDt: string;
  rank: string;
  rankOldAndNew: string;
  audiAcc: string;
}

export const MovieListWidget = ({ data }) => {
  const movies =
    data?.boxOfficeResult?.dailyBoxOfficeList ??
    new Array(10).fill({ movieNm: 'empty', openDt: 'empty', audiAcc: 'empty' }).map((initial, idx) => ({
      ...initial,
      rank: idx + 1,
    }));

  const RefMovieItem = forwardRef<HTMLLIElement, MovieItemProps>((props, ref) => <MovieItem {...props} ref={ref} />);
  return (
    <StyledUl>
      {movies?.map((movie: Movie) => (
        <MovieDetailCardTrigger data={movie} key={movie?.movieCd}>
          <RefMovieItem
            title={movie?.movieNm}
            id={movie?.movieCd}
            key={movie?.movieCd}
            openDt={movie?.openDt}
            rank={movie?.rank}
            rankOldAndNew={movie?.rankOldAndNew}
            audiAcc={movie?.audiAcc}
          />
        </MovieDetailCardTrigger>
      ))}
    </StyledUl>
  );
};
