import styled from 'styled-components';
import { DailyBoxOffice } from '../../model/api';
import { FONT_SIZE, FONT_WEIGHT } from '../../config/font';
import { DEFAULT_BORDER_RADIUS_REM } from '../../config/style';

const TooltipContainer = styled.div`
  width: 100%;
  min-width: 25rem;
  max-width: 40rem;
  height: 100%;
  /* background: white; */
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;

  @media (prefers-color-scheme: dark) {
    background: #1f2937;
  }
`;

const Header = styled.div`
  padding: 1rem;
  background: #2563eb;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (prefers-color-scheme: dark) {
    background: #1d4ed8;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Badge = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const MovieTitle = styled.h3`
  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: 700;
  color: white;
  padding: 0 0.5rem;
`;

const OpenDate = styled.span`
  color: #bfdbfe;
  font-size: ${FONT_SIZE.SEMI_SMALL};
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 0.5rem;

  &::before {
    content: '📅';
    font-size: ${FONT_SIZE.SMALL};
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-flow: column nowrap;
  align-items: flex-start;
  max-height: min-content;
`;

const StatLabelWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

const StatIcon = styled.span`
  font-size: 1rem;
  color: #2563eb;
  text-align: center;
`;

const StatContent = styled.div`
  flex: 1;
  padding-left: 0.5rem;
`;

const StatLabel = styled.span<{ wasIncreased?: boolean }>`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const StatValue = styled.p`
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  font-size: ${FONT_SIZE.MEDIUM};
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const MovieTooltip: React.FC<{ data: Partial<DailyBoxOffice> }> = ({ data }) => {
  const checkIsIncreasedCompareYesterday = (value: string) => Number(value) > 0;

  return (
    <TooltipContainer>
      <Header>
        <HeaderTop>
          <Badge>#{data.rank}</Badge>
          <Badge>{data.rankOldAndNew}</Badge>
        </HeaderTop>
        <MovieTitle>{data.movieNm}</MovieTitle>
        <OpenDate>개봉일: {data.openDt}</OpenDate>
      </Header>
      <ContentWrapper>
        <StatItem>
          <StatLabelWrapper>
            <StatIcon>💰</StatIcon>
            <StatLabel wasIncreased={checkIsIncreasedCompareYesterday(data?.salesChange)}>일일 매출</StatLabel>
          </StatLabelWrapper>
          <StatContent>
            <StatValue>{Number(data.salesAmt).toLocaleString()}원</StatValue>
          </StatContent>
        </StatItem>
        <StatItem>
          <StatLabelWrapper>
            <StatIcon>👥</StatIcon>
            <StatLabel>당일 관객 수</StatLabel>
          </StatLabelWrapper>
          <StatContent>
            <StatValue>{Number(data.audiCnt).toLocaleString()}명</StatValue>
          </StatContent>
        </StatItem>
        <StatItem>
          <StatLabelWrapper>
            <StatIcon>🎬</StatIcon>
            <StatLabel>상영관</StatLabel>
          </StatLabelWrapper>
          <StatContent>
            <StatValue>{Number(data.scrnCnt).toLocaleString()}개</StatValue>
          </StatContent>
        </StatItem>

        <StatItem>
          <StatLabelWrapper>
            <StatIcon>📊</StatIcon>
            <StatLabel>점유율</StatLabel>
          </StatLabelWrapper>
          <StatContent>
            <StatValue>{data.salesShare}%</StatValue>
          </StatContent>
        </StatItem>
      </ContentWrapper>
    </TooltipContainer>
  );
};

// 사용 예시
const MovieDetailCard = ({ data }: { data: Partial<DailyBoxOffice> }) => {
  return <MovieTooltip data={data} />;
};

export default MovieDetailCard;
