import styled from 'styled-components';
import MovieItem, { MovieItemProps } from './component/MovieItem';
import MovieDetailCard from './component/MovieDetailCard';
import { forwardRef } from 'react';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface movieObj {
  movieNm: string;
  movieCd: string;
  openDt: string;
  rank: string;
  rankOldAndNew: string;
  audiAcc: string;
}
export const MovieListWidget = ({ data }) => {
  const movies = data?.boxOfficeResult?.dailyBoxOfficeList;

  const RefMovieItem = forwardRef<HTMLLIElement, MovieItemProps>((props, ref) => <MovieItem {...props} ref={ref} />);

  return (
    <StyledUl>
      {movies?.map((movie: movieObj) => (
        <MovieDetailCard key={movie.movieCd}>
          <RefMovieItem
            title={movie?.movieNm}
            id={movie?.movieCd}
            key={movie?.movieCd}
            openDt={movie?.openDt}
            rank={movie?.rank}
            rankOldAndNew={movie?.rankOldAndNew}
            audiAcc={movie?.audiAcc}
          />
        </MovieDetailCard>
      ))}
    </StyledUl>
  );
};
