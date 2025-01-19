import styled from 'styled-components';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { COLOR } from '../../../lib/palette';
import { FilterStore } from '../../../zustand/filter';
import { useDatePicker } from '../hooks/useDatePicker';
import { NationFilter } from './component/NationFilter';
import { DateFilter } from './component/DateFilter';
import { RESPONSIVE_MEDIA_QUERY } from '../../../config/responsive';
import { FONT_SIZE } from '../../../config/font';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-flow: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  background: ${COLOR['backgroundColor']};
`;

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

const InfoText = styled.span`
  text-align: center;
  width: 100%;
`;

export const RankingSearchFilter = ({ nation, nationHandler }) => {
  const { updateState } = FilterStore();

  const customDatePicker = useDatePicker({
    initialValue: dayjs().subtract(1, 'day'),
  });

  useEffect(() => {
    updateState({
      key: 'date',
      payload: dayjs(customDatePicker.date as Date)
        .subtract(1, 'day')
        .format('YYYYMMDD'),
    });
  }, [customDatePicker.date, updateState]);

  return (
    <Container>
      <SearchFormWrapper>
        {/* 국가 필터 */}
        <NationFilter nation={nation} nationHandler={nationHandler} />
        {/* 날짜 필터 */}
        <DateFilter useDatePicker={customDatePicker} />
      </SearchFormWrapper>
      <InfoText>조회 가능 날짜: 2004.01.01 ~ {dayjs().subtract(1, 'day').format('YYYY.MM.DD')}</InfoText>
    </Container>
  );
};
