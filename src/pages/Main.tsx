import { useCallback, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Filters from '../components/Filter';
import GlobalStyles from '../GlobalStyles';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useQuery } from '@tanstack/react-query';
import { IFilterStore, FilterStore } from '../zustand/filter';
import TotalAudiCnt from '../components/Summary/TotalAudiCnt';
import { CardLayoutContainer } from './Main.styled';
import TotalSales from '../components/Summary/TotalSales';
import { BoxOfficeApiReturnData } from '../model/api';
import MovieList from '../components/Movie/MovieList';
import { formatCalcInputValueToInline } from '../shared/lib/format';
import { DefaultSpinner } from '../shared/ui/spin/Default';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  /* min-height: 65vh; */
  /* height: 70%; */
  /* overflow-y: scroll; */
`;

const fetchRankTop10Data = async ({ date, nation }): Promise<BoxOfficeApiReturnData> => {
  const formattedDateForApi = date.split('-').join(''); // YYYY-MM-DD -> YYYYMMDD
  const response = await axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${formattedDateForApi}&repNationCd=${nation}`,
  );
  if (response.status < 200 || response.status > 300) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};

const Main = () => {
  const initRender = useRef(true);
  // ======== [ zustand state management] ==========
  const { date, nation, updateState } = FilterStore<IFilterStore>((state) => state);

  // ========= [ react-query ] ==========

  // Access the client

  // Qeuries
  const { isLoading, isError, data, isFetching, isFetched, refetch } = useQuery({
    queryKey: ['movieData'],
    queryFn: async () => fetchRankTop10Data({ date, nation }),
    refetchOnWindowFocus: false,
    // enabled: false, // 특정한 트리거 없이 자동으로 호출되지 않도록 설정
  });

  const validateDate = (inputDate: string): boolean => {
    let result: boolean = false;
    try {
      const [Year, Month, Day] = [
        Number(inputDate.slice(0, 4)),
        Number(inputDate.slice(4, 6)),
        Number(inputDate.slice(6)),
      ];

      if (0 < Month && Month < 13 && 0 < Day && Day < 32) {
        const date = dayjs(`${Year}-${Month}-${Day}`).format('YYYY-MM-DD');
        const monthRange = dayjs(date).daysInMonth();

        if (Day <= monthRange) {
          result = true;
        } else {
          alert('유효하지 않은 일자입니다.');
          throw Error('유효하지 않은 일자입니다.');
        }
      } else {
        alert('유효하지 않은 날짜입니다.');
        throw Error('유효하지 않은 날짜입니다.');
      }
    } catch (error) {
      console.log('Error:', error);
    }

    return result;
  };

  const searchExecute = useCallback(async () => {
    const formattedDateString = formatCalcInputValueToInline(date);
    // 필터 변경 시, refetch Trigger 구문
    if (formattedDateString.length === 8 && validateDate(formattedDateString) && nation !== null) refetch();
    else if (formattedDateString.length !== 8) alert('입력하신 날짜를 확인해주세요.');
    else if (nation === null) alert('검색할 국가를 선택해주세요.');
  }, [date, nation, refetch]);

  const NationHandler = useCallback(
    (e): void => {
      const {
        target: {
          attributes: {
            value: { value },
          },
        },
      } = e;
      let Nation =
        value === 'K' ? updateState({ key: 'nation', payload: 'K' }) : updateState({ key: 'nation', payload: 'F' });
      return Nation;
    },
    [updateState],
  );

  const setInitDate = (): void => {
    const yesterday: string = dayjs().subtract(1, 'day').format('YYYYMMDD'); // 어제 날짜
    updateState({ key: 'date', payload: yesterday });
  };

  useEffect(() => {
    if (!initRender.current && isFetched && data) {
      const {
        boxOfficeResult: { dailyBoxOfficeList },
      } = data || {};
      updateState({ key: 'movies', payload: dailyBoxOfficeList });
    } else {
      initRender.current = false;
    }
  }, [isFetched, data, updateState, initRender]);

  useEffect(() => {
    setInitDate();
  }, []);

  useEffect(() => {
    searchExecute();
  }, [date, nation, searchExecute]);

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Filters nation={nation} nationHandler={NationHandler} />
      <MainWrapper>
        {isError ? (
          <div>데이터 요청에 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.</div>
        ) : (
          <DefaultSpinner loading={isLoading || isFetching}>
            <CardLayoutContainer>
              <TotalAudiCnt />
              <TotalSales />
            </CardLayoutContainer>
            <MovieList data={data} />
          </DefaultSpinner>
        )}
      </MainWrapper>
      <Footer />
    </Container>
  );
};

export default Main;
