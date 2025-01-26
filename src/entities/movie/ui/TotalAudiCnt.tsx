import { BoxOfficeApiReturnData } from '@shared/api/model/movie';
import { UNITS } from '@shared/config/unit';
import { getTotalData } from '@shared/lib/data';
import { SharedDefaultCard } from '@shared/ui';
import { FilterStore, IFilterStore } from '@store/filter';
import { useQuery } from '@tanstack/react-query';

/**
 * @desc Top 10 영화들에 대한 총 합계 관객 수를 보여주는 컴포넌트
 */
export const TotalAudiCnt: React.FC = () => {
  const { date, nation } = FilterStore<IFilterStore>((state) => state);
  const { data, isLoading, isFetching } = useQuery<BoxOfficeApiReturnData>({
    queryKey: ['movieData', date, nation],
  });
  const { boxOfficeResult } = data || {};

  const value: number = getTotalData({ dataArray: boxOfficeResult?.dailyBoxOfficeList, targetKey: 'audiCnt' });
  const formattedValue = value ? value.toLocaleString() : '-';
  const content = formattedValue;

  return (
    <SharedDefaultCard
      title="Top 10 총 관객 수"
      titleColor="#069668"
      isLoading={isLoading || isFetching}
      content={content}
      unit={UNITS.audi}
    />
  );
};
