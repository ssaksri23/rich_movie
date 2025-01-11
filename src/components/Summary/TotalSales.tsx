import { useQuery } from 'react-query';
import { UNITS } from '../../config/unit';
import { BoxOfficeApiReturnData } from '../../model/api';
import { SharedDefaultCard } from '../../shared/ui';
import { getTotalData } from '../../shared/lib/data';
import { formatWonToMillionWon } from '../../shared/lib/format';

const TotalSales = () => {
  const { data } = useQuery<BoxOfficeApiReturnData>({
    queryKey: ['movieData'],
  });

  const { boxOfficeResult } = data || {};

  const value: number = getTotalData({ dataArray: boxOfficeResult?.dailyBoxOfficeList, targetKey: 'salesAmt' });
  const formattedValue = value ? formatWonToMillionWon(value).toLocaleString() : '-';
  const content = `${formattedValue} ${UNITS.sales}`;
  return <SharedDefaultCard title="Top 10 총 매출액" titleColor="#2663eb" content={content} />;
};

export default TotalSales;
