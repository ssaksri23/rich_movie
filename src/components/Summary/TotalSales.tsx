import { useQuery } from '@tanstack/react-query';
import { UNITS } from '../../config/unit';
import { BoxOfficeApiReturnData } from '../../model/api';
import { SharedDefaultCard } from '../../shared/ui';
import { getTotalData } from '../../shared/lib/data';
import { formatWonToMillionWon } from '../../shared/lib/format';
import { FilterStore, IFilterStore } from '../../zustand/filter';

const TotalSales = () => {
  const { date, nation } = FilterStore<IFilterStore>((state) => state);
  const { data, isLoading, isFetching } = useQuery<BoxOfficeApiReturnData>({
    queryKey: ['movieData', date, nation],
  });
  const { boxOfficeResult } = data || {};

  const value: number = getTotalData({ dataArray: boxOfficeResult?.dailyBoxOfficeList, targetKey: 'salesAmt' });
  const formattedValue = value ? formatWonToMillionWon(value).toLocaleString() : '-';
  const content = formattedValue;
  return (
    <SharedDefaultCard
      title="Top 10 총 매출액"
      titleColor="#2663eb"
      isLoading={isLoading || isFetching}
      content={content}
      unit={UNITS.sales}
    />
  );
};

export default TotalSales;
