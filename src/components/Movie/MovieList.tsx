import styled from 'styled-components';
import { mainStore, IMainStore } from '../../zustand/main';
import Movie from './Movie';

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
const MovieList = () => {
  const { movies } = mainStore<IMainStore>((state) => state);
  return (
    <div className="movies">
      <StyledUl>
        {movies.map((movie: movieObj) => (
          <Movie
            title={movie?.movieNm}
            id={movie?.movieCd}
            key={movie?.movieCd}
            openDt={movie?.openDt}
            rank={movie?.rank}
            rankOldAndNew={movie?.rankOldAndNew}
            audiAcc={movie?.audiAcc}
          />
        ))}
      </StyledUl>
    </div>
  );
};

export default MovieList;
