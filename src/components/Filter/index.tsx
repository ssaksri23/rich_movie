import styled from 'styled-components';
import { COLOR } from '../../lib/palette';
import NationFilter from './NationFilter';
import dayjs from 'dayjs';
import DateFilter from './DateFilter';
import { useDatePicker } from './hooks/useDatePicker';
import { FilterStore } from '../../zustand/filter';
import { useEffect } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  background: ${COLOR['backgroundColor']};
  border-bottom: 1px solid ${COLOR['fontStrongColor']};
`;
const ConditionWrapper = styled.div`
  display: inherit;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const DateInputWrapper = styled.div`
  min-width: 8rem;
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
`;

const Filters = ({ nation, nationHandler }) => {
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
      <ConditionWrapper>
        <SearchForm>
          {/* 국가 필터 */}
          <NationFilter nation={nation} nationHandler={nationHandler} />
          <DateInputWrapper>
            {/* 날짜 필터 */}
            <DateFilter useDatePicker={customDatePicker} />
          </DateInputWrapper>
        </SearchForm>
        <h5 style={{ textAlign: 'center', width: '100%' }}>
          조회 날짜 범위: 2004.01.01 ~ {dayjs().subtract(1, 'day').format('YYYY.MM.DD')}
        </h5>
      </ConditionWrapper>
    </Container>
  );
};

export default Filters;
