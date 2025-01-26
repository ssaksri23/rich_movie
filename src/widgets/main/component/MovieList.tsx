import styled from 'styled-components';
import { forwardRef } from 'react';
import MovieDetailCardTrigger from './MovieDetailCardTrigger';
import MovieItem, { MovieItemProps } from './MovieItem';
import { RESPONSIVE_MEDIA_QUERY } from '@shared/config/responsive';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media ${RESPONSIVE_MEDIA_QUERY.desktop} {
    padding: 0 10rem;
  }
`;

interface Movie {
  movieNm: string;
  movieCd: string;
  openDt: string;
  rank: string;
  rankOldAndNew: string;
  audiAcc: string;
}

export const MovieList = ({ data }) => {
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
