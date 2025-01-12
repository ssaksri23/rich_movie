//노마드코더 rendering Movies 영상
import styled from 'styled-components';
import { COLOR } from '../../lib/palette';
import { DEFAULT_BORDER_RADIUS_REM } from '../../config/style';
import { FONT_SIZE } from '../../config/font';
import { forwardRef } from 'react';
import { HoverCard } from '@mantine/core';

const MovieBlock = styled.li<{ rankOldAndNew: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${COLOR.sectionColor};
  color: ${COLOR.text.basicColor};
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
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
      font-weight: 500;
      color: ${COLOR.text.basicColor};
    }

    .movie__rank-block {
      display: flex;
      flex: 0.2;

      .movie__rank {
        font-size: ${FONT_SIZE.SEMI_LARGE};
        border-radius: 0.5rem;
        padding: 0.5rem;
        width: 1.25em;
        text-align: center;
      }

      .movie__rankOldAndNew {
        align-self: flex-start;
        margin: 0;
        font-weight: 500;
        ${(props) =>
          props.rankOldAndNew === 'NEW' ? { color: COLOR['NewRankColor'] } : { color: COLOR['OldRankColor'] }}
      }
    }
  }

  .side__right {
    flex: 0.5;
    display: inherit;
    flex-flow: column wrap;
    justify-content: center;
    gap: 0.25rem;
    align-items: flex-end;
    height: 3rem;
  }

  @media ${(props) => props.theme.tabletS} {
    .side__left {
      .movie__title {
        font-size: ${FONT_SIZE.SEMI_LARGE};
      }

      .movie__rank-block {
        margin-right: 0.5rem;
        .movie__rank {
          font-size: ${FONT_SIZE.LARGE};
          padding: 0.1rem;
        }

        .movie__rankOldAndNew {
          font-size: ${FONT_SIZE.SEMI_SMALL};
        }
      }
    }

    .side__right {
      font-size: ${FONT_SIZE.SEMI_SMALL};
    }
  }

  @media ${(props) => props.theme.mobileL} {
    padding: 1rem 0.5em;
    .side__left {
      flex: 1;
      display: inherit;
      align-items: center;

      .movie__title {
        font-size: ${FONT_SIZE.SEMI_SMALL};
        flex: 0.8;
      }

      .movie__rank-block {
        margin-right: 0.3rem;
        .movie__rank {
          font-size: ${FONT_SIZE.SEMI_LARGE};
          padding: 0.1rem;
        }

        .movie__rankOldAndNew {
          font-size: ${FONT_SIZE.SEMI_SMALL};
          ${(props) =>
            props.rankOldAndNew === 'NEW' ? { color: COLOR['NewRankColor'] } : { color: COLOR['OldRankColor'] }};
        }
      }
    }

    .side__right {
      flex: 0.6;
      font-size: ${FONT_SIZE.SMALL};
    }
  }

  @media ${(props) => props.theme.mobileM} {
    padding: 1rem 0.5rem;
    .side__left {
      .movie__title {
        font-size: ${FONT_SIZE.SEMI_SMALL};
        flex: 0.6;
      }

      .movie__rank-block {
        margin-right: 0.2rem;
        .movie__rank {
          font-size: ${FONT_SIZE.MEDIUM};
          padding: 0.1rem;
        }

        .movie__rankOldAndNew {
          font-size: ${FONT_SIZE.SMALL};
          margin-right: 0.2rem;
          ${(props) =>
            props.rankOldAndNew === 'NEW' ? { color: COLOR['NewRankColor'] } : { color: COLOR['OldRankColor'] }}
        }
      }
    }
    .side__right {
      flex: 0.6;
      font-size: ${FONT_SIZE.SMALL};
    }
  }
`;
export interface MovieItemProps {
  title: string;
  openDt: string;
  id: string;
  rank: string;
  rankOldAndNew: string;
  audiAcc: string;
  ref: React.ForwardedRef<HTMLLIElement>;
}

const MovieItem = ({ title, openDt, id, rank, rankOldAndNew, audiAcc, ref }) => {
  const formattedAudiAcc = audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //천 단위 (,) 붙이는 코드
  return (
    <MovieBlock ref={ref} className="movie-block" rankOldAndNew={rankOldAndNew}>
      <div className="side__left">
        <div className="movie__rank-block">
          <h5 className="movie__rank">{rank}</h5>
          {rankOldAndNew === 'NEW' && <h4 className="movie__rankOldAndNew">{'new'}</h4>}
        </div>
        <h2 className="movie__title">{title}</h2>
      </div>
      <div className="side__right">
        <h5 className="movie__openDate">
          {openDt !== 'null' && openDt !== ' ' ? `개봉일 : ${openDt}` : `개봉일 : no data`}
        </h5>
        <h5 className="audiAcc">누적 관객 수 : {formattedAudiAcc}명</h5>
      </div>
    </MovieBlock>
  );
};

export default MovieItem;
