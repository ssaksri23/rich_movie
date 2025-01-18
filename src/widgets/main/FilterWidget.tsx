import { useCallback, useEffect, useRef } from 'react';
import Filters from '../../components/Filter';
import { FilterStore, IFilterStore } from '../../zustand/filter';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { fetchRankTop10Data } from '../../shared/api/movie';
import { formatCalcInputValueToInline } from '../../shared/lib/format';

export const FilterWidget = () => {
  const initRender = useRef(true);
  // ======== [ zustand state management] ==========
  const { date, nation, updateState } = FilterStore<IFilterStore>((state) => state);

  // ========= [ react-query ] ==========

  // Access the client

  // Qeuries
  const { data, isFetched, refetch } = useQuery({
    queryKey: ['movieData', date, nation],
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

  /* SECTION - [날짜 초기화] */
  useEffect(() => {
    setInitDate();
  }, []);

  useEffect(() => {
    searchExecute();
  }, [date, nation, searchExecute]);

  return <Filters nation={nation} nationHandler={NationHandler} />;
};
