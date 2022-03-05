//노마드코더 rendering Movies 영상
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import palette from '../lib/palette';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';
interface Props {
  rankOldAndNew: string;
}

const MovieBlock = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: ${palette['wrapperColor']};
  & + & {
    margin-top: 0.1rem;
  }

  .side__left {
    flex: 1;
    display: inherit;
    align-items: center;

    .movie__title {
      flex: 1;
      width: 5rem;
      font-size: 1.2rem;
      font-family: 'Yeon Sung', cursive;
      font-weight: 500;
      color: ${palette['strongColor']};
    }

    .movie__rank-block {
      display: flex;
      flex: 0.2;

      .movie__rank {
        font-size: 1rem;
        border: 1px solid #8b98bf;
        border-radius: 50%;
        padding: 0.5rem;
        width: 1.5em;
        text-align: center;
      }

      .movie__rankOldAndNew {
        align-self: flex-start;
        margin: 0;
        font-weight: 500;
        ${(props) =>
          props.rankOldAndNew === 'NEW'
            ? { color: palette['NewRankColor'] }
            : { color: palette['OldRankColor'] }}
      }
    }
  }

  .side__right {
    flex: 0.5;
    display: inherit;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: flex-end;
    height: 3rem;
  }

  @media ${(props) => props.theme.tabletS} {
    .side__left {
      .movie__title {
        font-size: 1.6rem;
      }

      .movie__rank-block {
        margin-right: 0.5rem;
        .movie__rank {
          font-size: 2.2rem;
          padding: 0.1rem;
        }

        .movie__rankOldAndNew {
          font-size: 0.7rem;
        }
      }
    }

    .side__right {
      font-size: 0.8rem;
    }
  }

  @media ${(props) => props.theme.mobileL} {
    padding: 1rem 0.5em;
    .side__left {
      flex: 1;
      display: inherit;
      align-items: center;

      .movie__title {
        font-size: 1.6rem;
        flex: 0.8;
      }

      .movie__rank-block {
        margin-right: 0.3rem;
        .movie__rank {
          font-size: 2rem;
          padding: 0.1rem;
        }

        .movie__rankOldAndNew {
          font-size: 0.6rem;
          ${(props) =>
            props.rankOldAndNew === 'NEW'
              ? { color: palette['NewRankColor'] }
              : { color: palette['OldRankColor'] }}
        }
      }
    }

    .side__right {
      flex: 0.6;
      font-size: 0.7rem;
    }
  }

  @media ${(props) => props.theme.mobileM} {
    padding: 1rem 0.5rem;
    .side__left {
      .movie__title {
        font-size: 1.2rem;
        flex: 0.6;
      }

      .movie__rank-block {
        margin-right: 0.2rem;
        .movie__rank {
          font-size: 1.5rem;
          padding: 0.1rem;
        }

        .movie__rankOldAndNew {
          font-size: 0.3rem;
          margin-right: 0.2rem;
          ${(props) =>
            props.rankOldAndNew === 'NEW'
              ? { color: palette['NewRankColor'] }
              : { color: palette['OldRankColor'] }}
        }
      }
    }
    .side__right {
      flex: 0.6;
      font-size: 0.5rem;
    }
  } ;
`;

const Movie = ({ title, openDt, id, rank, rankOldAndNew, audiAcc }) => {
  audiAcc = audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //천 단위 (,) 붙이는 코드
  return (
    <ThemeProvider theme={theme}>
      <MovieBlock className="movie-block" rankOldAndNew={rankOldAndNew}>
        <div className="side__left">
          <div className="movie__rank-block">
            <h5 className="movie__rank">{rank}</h5>
            <h4 className="movie__rankOldAndNew">
              {rankOldAndNew === 'NEW' ? 'new' : 'old'}
            </h4>
          </div>
          <h2 className="movie__title">{title}</h2>
        </div>
        <div className="side__right">
          <h4 className="movie__openDate">
            {openDt !== 'null' && openDt !== ' '
              ? `개봉일 : ${openDt}`
              : `개봉일 : no data`}
          </h4>
          <h5 className="audiAcc">관객 수(누적) : {audiAcc}명</h5>
        </div>
      </MovieBlock>
    </ThemeProvider>
  );
};

// Movie.propTypes = {
//   id: PropTypes.string.isRequired, // id = movieCd
//   title: PropTypes.string.isRequired, //title = movieNm
//   openDt: PropTypes.string.isRequired,
//   rank: PropTypes.string.isRequired,
//   rankOldAndNew: PropTypes.string.isRequired,
//   audiAcc: PropTypes.string.isRequired
// };

export default Movie;
