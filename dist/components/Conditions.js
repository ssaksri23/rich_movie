import React from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import DropdownComponent from './DropdownComponent';
const Container = styled.div `
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 5rem;
  background: ${palette['backgroundColor']};
`;
const ConditionWrapper = styled.div `
  display: inherit;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;
const ButtonBlock = styled.div `
  display: flex;
  display: none;
  justify-content: space-around;
`;
const SearchForm = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const NationButton = styled.button `
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
const DateInput = styled.input `
  width: 13rem;
  font-size: 1.2rem;
  margin: 0;
  margin-right: 0.3rem;
  padding: 0.11rem 0;

  &::placeholder {
    font-size: 1rem;
  }
`;
const SearchButton = styled.button `
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
const Conditions = ({ date, nation, dateHandler, nationHandler, SearchExcute }) => {
    const enterKey = () => {
        var _a;
        if (((_a = window === null || window === void 0 ? void 0 : window.event) === null || _a === void 0 ? void 0 : _a.keyCode) === 13) {
            SearchExcute();
        }
    };
    return (React.createElement(Container, null,
        React.createElement(ConditionWrapper, null,
            React.createElement(ButtonBlock, null,
                React.createElement(NationButton, { value: "K", onClick: nationHandler }, "\uAD6D\uB0B4\uC601\uD654"),
                React.createElement(NationButton, { value: "F", onClick: nationHandler }, "\uD574\uC678\uC601\uD654")),
            React.createElement(DropdownComponent, { item1: "\uAD6D\uB0B4\uC601\uD654", item2: "\uD574\uC678\uC601\uD654", nation: nation, nationHandler: nationHandler }),
            React.createElement(SearchForm, null,
                React.createElement(DateInput, { type: "text", placeholder: "\uC870\uD68C \uB0A0\uC9DC ex) 20210214", value: date, onChange: dateHandler, onKeyPress: enterKey }),
                React.createElement(SearchButton, { onClick: SearchExcute, onKeyPress: enterKey }, "\uAC80\uC0C9")),
            React.createElement("h5", { style: { textAlign: 'center', width: '100%' } }, "\uAC80\uC0C9 \uAC00\uB2A5 \uC5F0\uB3C4: 2004\uB144 ~ 2021\uB144"))));
};
export default Conditions;
