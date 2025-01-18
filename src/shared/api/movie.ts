import axios from 'axios';
import { BoxOfficeApiReturnData } from '../../model/api';

export const fetchRankTop10Data = async ({ date, nation }): Promise<BoxOfficeApiReturnData> => {
  const formattedDateForApi = date.split('-').join(''); // YYYY-MM-DD -> YYYYMMDD
  const response = await axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${formattedDateForApi}&repNationCd=${nation}`,
  );
  if (response.status < 200 || response.status > 300) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};
