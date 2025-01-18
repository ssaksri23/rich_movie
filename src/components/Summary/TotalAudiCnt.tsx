import { useQuery } from '@tanstack/react-query';
import { UNITS } from '../../config/unit';
import { SharedDefaultCard } from '../../shared/ui';
import { getTotalData } from '../../shared/lib/data';
import { BoxOfficeApiReturnData } from '../../model/api';
import { FilterStore, IFilterStore } from '../../zustand/filter';

const TotalAudiCnt = () => {
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

export default TotalAudiCnt;
