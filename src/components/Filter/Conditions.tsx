import styled from 'styled-components';
import palette from '../../lib/palette';
import DropdownComponent from '../DropdownComponent';
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
  background: ${palette['backgroundColor']};
  border-bottom: 1px solid ${palette['fontStrongColor']};
`;
const ConditionWrapper = styled.div`
  display: inherit;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const ButtonBlock = styled.div`
  display: flex;
  display: none;
  justify-content: space-around;
`;
const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NationButton = styled.button`
  outline: none;
  border: none;
  width: 6em;
  flex: 0.7;
  margin-right: 0.5em;
  padding: 0.5rem 0;
  border-radius: 20px;

  &:hover {
    background: #adacac;
    cursor: pointer;
  }

  &:active {
    background: #7e7d7d;
    color: white;
  }

  &:focus {
    background: #adacac;
  }

  & + & {
    margin-left: 0.5em;
  }
`;
const DateInput = styled.input`
  width: 10rem;
  font-size: ${FONT_SIZE.SEMI_SMALL};
  margin: 0;
  margin-right: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  &::placeholder {
    font-size: 1rem;
  }
`;
const SearchButton = styled.button`
  border-radius: 2px;
  font-size: 0.96rem;
  width: 4rem;
  padding: 0.25rem 0;
  cursor: pointer;
  background: ${palette['basicColor']};

  &:hover {
    background: ${palette['strongColor']};
  }

  &:active {
    background: ${palette['basicColor']};
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

  console.log({ date });

  return (
    <Container>
      <ConditionWrapper>
        <ButtonBlock>
          <NationButton value="K" onClick={nationHandler}>
            국내영화
          </NationButton>
          <NationButton value="F" onClick={nationHandler}>
            해외영화
          </NationButton>
        </ButtonBlock>
        <DropdownComponent item1="국내영화" item2="해외영화" nation={nation} nationHandler={nationHandler} />
        <SearchForm>
          <DateInput type="date" value={date} onChange={updateDate} onKeyDown={enterKey} />
          <SearchButton onClick={searchExecute} onKeyDown={enterKey}>
            검색
          </SearchButton>
        </SearchForm>
        <h5 style={{ textAlign: 'center', width: '100%' }}>
          조회 날짜 범위: 2004.01.01 ~ {dayjs().subtract(1, 'day').format('YYYY.MM.DD')}
        </h5>
      </ConditionWrapper>
    </Container>
  );
};

export default Conditions;
