//노마드코더 rendering Movies 영상
import styled from 'styled-components';
import { COLOR } from '../../lib/palette';
import { DEFAULT_BORDER_RADIUS_REM } from '../../config/style';
import { FONT_SIZE, FONT_WEIGHT } from '../../config/font';
import { SharedDefaultSkeleton } from '../../shared/ui';
import { useQuery } from '@tanstack/react-query';
import { FilterStore, IFilterStore } from '../../zustand/filter';

const MovieCardContainer = styled.li`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${COLOR.sectionColor};
  color: ${COLOR.text.basicColor};
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};

  &:hover {
    background: ${COLOR.hoverBackgroundColor};
    transition: background 0.3s;
  }

  & + & {
    margin-top: 0.1rem;
  }

  @media ${(props) => props.theme.mobileM} {
    padding: 1rem 0.5rem;
  }
`;

const MovieLeftSideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media ${(props) => props.theme.tabletS} {
    .side__left {
      .movie__rank-block {
        margin-right: 0.5rem;
      }
    }
  }

  @media ${(props) => props.theme.mobileM} {
    padding: 1rem 0.5rem;
    .side__left {
      .movie__rank-block {
        margin-right: 0.2rem;
      }
    }
  }
`;

const MovieRightSideWrapper = styled.div`
  display: inherit;
  flex-flow: column wrap;
  justify-content: center;
  gap: 0.25rem;
  min-width: 12rem;
  align-items: flex-end;
  font-weight: ${FONT_WEIGHT.REGULAR};
  @media ${(props) => props.theme.tabletS} {
    font-size: ${FONT_SIZE.SEMI_SMALL};
  }

  @media ${(props) => props.theme.mobileM} {
    flex: 0.6;
    font-size: ${FONT_SIZE.SMALL};
  }
`;

const RankWrapper = styled.div`
  display: flex;
  position: relative;
`;

const NewEntryFlagText = styled.h4<{ rankOldAndNew: 'NEW' | 'OLD' }>`
  position: absolute;
  top: -0.5rem;
  left: -50%;
  align-self: flex-start;
  margin: 0;
  font-weight: ${FONT_WEIGHT.THIN};
  ${(props) => (props.rankOldAndNew === 'NEW' ? { color: COLOR['NewRankColor'] } : { color: COLOR['OldRankColor'] })}

  @media ${(props) => props.theme.mobileL} {
    font-size: ${FONT_SIZE.SEMI_SMALL};
    ${(props) => (props.rankOldAndNew === 'NEW' ? { color: COLOR['NewRankColor'] } : { color: COLOR['OldRankColor'] })};
  }

  @media ${(props) => props.theme.mobileM} {
    .movie__rankOldAndNew {
      font-size: ${FONT_SIZE.SMALL};
      margin-right: 0.2rem;
      ${(props) =>
        props.rankOldAndNew === 'NEW' ? { color: COLOR['NewRankColor'] } : { color: COLOR['OldRankColor'] }}
    }
  }

  @media ${(props) => props.theme.tabletS} {
    .movie__rankOldAndNew {
      font-size: ${FONT_SIZE.SEMI_SMALL};
    }
  }
`;

const MovieRank = styled.span`
  font-size: ${FONT_SIZE.SEMI_LARGE};
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 1.25em;
  text-align: center;

  @media ${(props) => props.theme.mobileL} {
    .movie__rank {
      font-size: ${FONT_SIZE.SEMI_LARGE};
      padding: 0.1rem;
    }
  }

  @media ${(props) => props.theme.tabletS} {
    .movie__rank {
      font-size: ${FONT_SIZE.LARGE};
      padding: 0.1rem;
    }
  }

  @media ${(props) => props.theme.mobileL} {
    font-size: ${FONT_SIZE.SEMI_LARGE};
    padding: 0.1rem;
  }

  @media ${(props) => props.theme.mobileM} {
    font-size: ${FONT_SIZE.MEDIUM};
    padding: 0.1rem;
  }
`;

const MovieTitle = styled.h2`
  flex: 1;
  width: 5rem;
  font-weight: ${FONT_WEIGHT.REGULAR};
  color: ${COLOR.text.basicColor};

  @media ${(props) => props.theme.tabletS} {
    font-size: ${FONT_SIZE.SEMI_LARGE};
  }

  @media ${(props) => props.theme.mobileL} {
    font-size: ${FONT_SIZE.SEMI_SMALL};
    flex: 0.8;
  }

  @media ${(props) => props.theme.mobileM} {
    font-size: ${FONT_SIZE.SEMI_SMALL};
    flex: 0.6;
  }
`;

const InlineWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

const Label = styled.div`
  display: inline-block;
`;

const Value = styled.div`
  text-align: right;
  width: 100%;
  gap: 0.5rem;
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

const NewEntryFlag = ({ rankOldAndNew }) =>
  rankOldAndNew === 'NEW' && <NewEntryFlagText rankOldAndNew={rankOldAndNew}>{'new'}</NewEntryFlagText>;

const MovieItem = ({ title, openDt, id, rank, rankOldAndNew, audiAcc, ref }) => {
  const { date, nation } = FilterStore<IFilterStore>((state) => state);
  const { isLoading } = useQuery({
    queryKey: ['movieData', date, nation],
    staleTime: 10 * 60 * 1000,
  });
  const formattedAudiAcc = audiAcc?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //천 단위 (,) 붙이는 코드
  return (
    <MovieCardContainer ref={ref}>
      <MovieLeftSideWrapper>
        <RankWrapper>
          <NewEntryFlag rankOldAndNew={rankOldAndNew} />
          <MovieRank>{rank}</MovieRank>
        </RankWrapper>
        <MovieTitle>
          <SharedDefaultSkeleton isLoading={isLoading}>{title}</SharedDefaultSkeleton>
        </MovieTitle>
      </MovieLeftSideWrapper>
      <MovieRightSideWrapper>
        <InlineWrapper>
          <Label>개봉일 :</Label>
          <Value>
            <SharedDefaultSkeleton isLoading={isLoading}>
              {openDt !== 'null' && openDt !== ' ' ? openDt : '-'}
            </SharedDefaultSkeleton>
          </Value>
        </InlineWrapper>
        <InlineWrapper>
          <Label>누적 관객 수 :</Label>
          <Value>
            <SharedDefaultSkeleton isLoading={isLoading}>{formattedAudiAcc ?? '-'}</SharedDefaultSkeleton>
          </Value>
          명
        </InlineWrapper>
      </MovieRightSideWrapper>
    </MovieCardContainer>
  );
};

export default MovieItem;
