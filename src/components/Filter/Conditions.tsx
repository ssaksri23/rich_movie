import styled from 'styled-components';
import { COLOR } from '../../lib/palette';
import DropdownComponent from './DropdownComponent';
import dayjs from 'dayjs';
import { FONT_SIZE } from '../../config/font';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
  display: flex;
  min-height: 15vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 5rem;
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
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DateInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
`;

const DateInput = styled.input`
  width: 100%;
  font-size: ${FONT_SIZE.SEMI_SMALL};
  margin: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  &::placeholder {
    font-size: 1rem;
  }
`;

const SearchButton = styled.button`
  border-radius: 0.25rem;
  font-size: ${FONT_SIZE.SEMI_SMALL};
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5rem;
  padding: 0.25rem;
  cursor: pointer;
  color: ${COLOR.text.whiteColor};
  background: ${COLOR.primaryButtonColor};

  &:hover {
    background: ${COLOR['strongColor']};
  }

  &:active {
    background: ${COLOR['basicColor']};
  }

  &:focus {
    outline: auto;
  }
`;

const Conditions = ({ date, nation, updateDate, nationHandler, searchExecute }) => {
  const enterKey = (): void => {
    const windowEvent = window.event as KeyboardEvent;
    if (windowEvent.key === 'Enter') {
      searchExecute();
    }
  };

  return (
    <Container>
      <ConditionWrapper>
        <SearchForm>
          <DropdownComponent nation={nation} nationHandler={nationHandler} />
          <DateInputWrapper>
            <DateInput type="date" value={date} onChange={updateDate} onKeyDown={enterKey} />
            <SearchButton onClick={searchExecute} onKeyDown={enterKey}>
              검색
            </SearchButton>
          </DateInputWrapper>
        </SearchForm>
        <h5 style={{ textAlign: 'center', width: '100%' }}>
          조회 날짜 범위: 2004.01.01 ~ {dayjs().subtract(1, 'day').format('YYYY.MM.DD')}
        </h5>
      </ConditionWrapper>
    </Container>
  );
};

export default Conditions;
