import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 1em 5em;
    background: #3d3c3c;
`

const ConditionWrapper = styled.div`
    display: inherit;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
`

const ButtonBlock = styled.div`
    display: flex;
    justify-content: space-around;
`

const SearchForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`

const NationButton = styled.button`
    outline: none;
    border: none;
    width: 6em;
    flex: 0.7;   
    margin-right: 0.5em;
    padding: 0.5rem 0;
    border-radius: 20px;

    &:hover{
        background: #adacac;
        cursor: pointer;
    }

    &:active{
        background: #7e7d7d;
        color: white;
    }

    &:focus{
        background: #adacac;
    }

    & + & {
        margin-left: 0.5em;
    }
`

const DateInput = styled.input`
    width: 13rem;
    font-size: 1.2rem;
    margin: 0;
    margin-right: 0.3rem;
    padding: 0;

    &::placeholder{
        font-size: 1rem;
    }
`
const SearchButton = styled.button`
    border-radius: 0;
    font-size: 0.96rem;
    width: 4rem;
    padding: 0.22rem 0;
    cursor: pointer;

    &:hover { 
        background: #64c6ff;
    }

    &:active{
        background: #448bb4;
    }

`

const Conditions = ({dateHandler, nationHandler, submitDate}) => {
    return (
        <Container>
            <ConditionWrapper>
                <ButtonBlock>
                    <NationButton value="K" onClick={nationHandler}>국내영화</NationButton>
                    <NationButton value="F" onClick={nationHandler}>해외영화</NationButton>
                </ButtonBlock>
                <SearchForm>
                    <DateInput
                        type="text" 
                        placeholder="조회 날짜 입력 예) 20210214"
                        onChange={dateHandler}>
                    </DateInput>
                    <SearchButton onClick={submitDate}>
                        검색
                    </SearchButton>

                </SearchForm>
            </ConditionWrapper>
        </Container>
    );
};

export default Conditions;