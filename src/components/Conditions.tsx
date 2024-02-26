import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import DropdownComponent from './DropdownComponent';

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
  margin-top: 1rem;
  margin-bottom: 1rem;
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
  width: 13rem;
  font-size: 1.2rem;
  margin: 0;
  margin-right: 0.3rem;
  padding: 0.11rem 0;

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

const Conditions = ({ date, nation, updateDate, nationHandler, searchExcute }) => {
  const enterKey = (): void => {
    const windowEvent = window.event as KeyboardEvent;
    if (windowEvent.key === 'Enter') {
      searchExcute();
    }
  };

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
          <DateInput
            type="text"
            placeholder="조회 날짜 ex) 20210214"
            value={date}
            onChange={updateDate}
            onKeyDown={enterKey}
          ></DateInput>
          <SearchButton onClick={searchExcute} onKeyDown={enterKey}>
            검색
          </SearchButton>
        </SearchForm>
        <h5 style={{ textAlign: 'center', width: '100%' }}>검색 가능 연도: 2004년 ~ 전일</h5>
      </ConditionWrapper>
    </Container>
  );
};

export default Conditions;
