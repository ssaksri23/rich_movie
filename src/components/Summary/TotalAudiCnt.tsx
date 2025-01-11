import { useQuery } from 'react-query';
import { UNITS } from '../../config/unit';
import { SharedDefaultCard } from '../../shared/ui';
import { getTotalData } from '../../shared/lib/data';
import { BoxOfficeApiReturnData } from '../../model/api';

const TotalAudiCnt = () => {
  const { data } = useQuery<BoxOfficeApiReturnData>({
    queryKey: ['movieData'],
  });

  const { boxOfficeResult } = data || {};

  const value: number = getTotalData({ dataArray: boxOfficeResult?.dailyBoxOfficeList, targetKey: 'audiCnt' });
  const formattedValue = value ? value.toLocaleString() : '-';
  const content = `${formattedValue} ${UNITS.audi}`;

  return <SharedDefaultCard title="Top 10 총 관객 수" titleColor="#069668" content={content} />;
};

export default TotalAudiCnt;
