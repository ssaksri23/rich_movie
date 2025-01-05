import { useQuery } from 'react-query';
import { UNITS } from '../../config/unit';
import { BoxOfficeApiReturnData } from '../../model/api';
import { SharedDefaultCard } from '../../shared/ui';
import { mainStore, IMainStore } from '../../zustand/main';
import { getTotalData } from '../../shared/lib/data';
import { formatWonToMillionWon } from '../../shared/lib/format';

const TotalSales = () => {
  const { date, nation } = mainStore<IMainStore>((state) => state);

  const { data } = useQuery<BoxOfficeApiReturnData>({
    queryKey: ['movieData', date, nation],
    enabled: false,
  });

  const { boxOfficeResult } = data || {};

  const valueNumber = getTotalData({ dataArray: boxOfficeResult.dailyBoxOfficeList, targetKey: 'salesAmt' });
  const formattedValue = formatWonToMillionWon(valueNumber).toLocaleString();
  const content = `${formattedValue} ${UNITS.sales}`;
  return <SharedDefaultCard title="Top 10 총 매출액" titleColor="#2663eb" content={content} />;
};

export default TotalSales;
