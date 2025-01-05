import { useCallback, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Conditions from '../components/Conditions';
import GlobalStyles from '../GlobalStyles';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { IMainStore, mainStore } from '../zustand/main';
import { ScaleLoader } from 'react-spinners';
import TotalAudiCnt from '../components/Summary/TotalAudiCnt';
import { CardLayoutContainer } from './Main.styled';
import TotalSales from '../components/Summary/TotalSales';
import { BoxOfficeApiReturnData } from '../model/api';
import MovieList from '../components/Movie/MovieList';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  /* height: 100%; */
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

const fetchData = async ({ date, nation }): Promise<BoxOfficeApiReturnData> => {
  const response = await axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${date}&repNationCd=${nation}`,
  );
  if (response.status < 200 || response.status > 300) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};

const Main = () => {
  const initRender = useRef(true);
  // ======== [ zustand state management] ==========
  const { loading, reject, movies, date, nation, posters, names, updateState } = mainStore<IMainStore>(
    (state) => state,
  );

  // ========= [ react-query ] ==========

  // Access the client
  const queryClient = useQueryClient();

  // Qeuries
  const { isLoading, isError, data, error, isFetched, isSuccess, refetch } = useQuery({
    queryKey: ['movieData', date, nation],
    queryFn: async () => fetchData({ date, nation }),
    enabled: false,
  });

  // Mutations
  const mutation = useMutation('', {
    onSuccess: () => {
      queryClient.invalidateQueries('');
    },
  });

  useEffect(() => {
    if (!initRender.current && isFetched && data) {
      const {
        boxOfficeResult: { dailyBoxOfficeList },
      } = data;
      updateState({ key: 'movies', payload: dailyBoxOfficeList });
    } else {
      initRender.current = false;
    }
  }, [isFetched, data, updateState, initRender]);

  const updateDate = useCallback((e): void => {
    let inputDate = '';
    inputDate = e.target.value;
    if (inputDate.length === 8 || parseInt(inputDate) || inputDate === '') {
      updateState({ key: 'date', payload: e.target.value });
    } else {
      alert('숫자 형식으로 입력해주세요!');
      updateState({ key: 'date', payload: '' });
    }
  }, []);

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

  const searchExecute = useCallback(
    async (e) => {
      if (date.length === 8 && validateDate(date) && nation !== null) refetch();
      else if (date.length !== 8) alert('입력하신 날짜를 확인해주세요.');
      else if (nation === null) alert('검색할 국가를 선택해주세요.');
    },
    [date, nation],
  );

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
    const yesterday: string = dayjs().subtract(1, 'day').format('YYYYMMDD');
    updateState({ key: 'date', payload: yesterday });
  };

  useEffect(() => {
    setInitDate();
  }, []);

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Conditions
        date={date}
        nation={nation}
        updateDate={updateDate}
        nationHandler={NationHandler}
        searchExecute={searchExecute}
      />
      <MainWrapper>
        <CardLayoutContainer>
          <TotalAudiCnt />
          <TotalSales />
        </CardLayoutContainer>
        {isLoading ? (
          <LoaderWrapper>
            <ScaleLoader color="#36d7b7" />
          </LoaderWrapper>
        ) : movies ? (
          <MovieList />
        ) : (
          <LoaderWrapper>검색 조건을 설정해주세요.</LoaderWrapper>
        )}
      </MainWrapper>
      <Footer />
    </Container>
  );
};

export default Main;
