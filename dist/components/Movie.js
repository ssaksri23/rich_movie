//노마드코더 rendering Movies 영상
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import palette from '../lib/palette';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/deviceTheme';
const MovieBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background: ${palette['wrapperColor']};
  & + & {
    margin-top: 0.5rem;
  }

  .side__left {
    flex: 1;
    display: inherit;
    align-items: center;

    .movie__title {
      flex: 1;
      width: 5rem;
      font-size: 2.6rem;
      font-family: 'Yeon Sung', cursive;
      font-weight: 500;
      color: ${palette['strongColor']};
    }

    .movie__rank-block {
      display: flex;
      flex: 0.3;

      .movie__rank {
        font-size: 3rem;
        border: 1px solid ${palette['backgroundColor']};
        border-radius: 50%;
        padding: 1rem;
        width: 1.5em;
        text-align: center;
      }

      .movie__rankOldAndNew {
        align-self: flex-start;
        margin: 0;
        font-weight: 500;
        ${(props) =>
          props.rankOldAndNew === 'NEW' ? { color: palette['NewRankColor'] } : { color: palette['OldRankColor'] }}
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
        flex: 0.6;
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
            props.rankOldAndNew === 'NEW' ? { color: palette['NewRankColor'] } : { color: palette['OldRankColor'] }}
        }
      }
    }

    .side__right {
      flex: 0.6;
      font-size: 0.7rem;
    }
  }

  @media ${(props) => props.theme.mobileL} {
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
            props.rankOldAndNew === 'NEW' ? { color: palette['NewRankColor'] } : { color: palette['OldRankColor'] }}
        }
      }
    }
    .side__right {
      flex: 0.6;
      font-size: 0.5rem;
    }
  }
`;
const Movie = ({ title, openDt, rank, rankOldAndNew, audiAcc }) => {
    // console.log(rankOldAndNew === 'NEW');
    audiAcc = audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //천 단위 (,) 붙이는 코드
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(MovieBlock, { rankOldAndNew: rankOldAndNew },
            React.createElement("div", { className: "side__left" },
                React.createElement("div", { className: "movie__rank-block" },
                    React.createElement("h5", { className: "movie__rank" }, rank),
                    React.createElement("h4", { className: "movie__rankOldAndNew" }, rankOldAndNew === 'NEW' ? 'new' : 'old')),
                React.createElement("h2", { className: "movie__title" }, title)),
            React.createElement("div", { className: "side__right" },
                React.createElement("h3", { className: "movie__openDate" }, openDt !== 'null' && openDt !== ' '
                    ? `개봉일 : ${openDt}`
                    : `개봉일 : no data`),
                React.createElement("h5", { className: "audiAcc" },
                    "\uAD00\uAC1D \uC218(\uB204\uC801) : ",
                    audiAcc,
                    "\uBA85")))));
};
Movie.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    rankOldAndNew: PropTypes.string.isRequired,
    audiAcc: PropTypes.string.isRequired
};
export default Movie;
