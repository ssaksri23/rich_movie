import React, { useState, useEffect } from 'react';
import { Button } from 'styled-button-component';
import { Dropdown, DropdownItem, DropdownMenu, DropdownDivider } from 'styled-dropdown-component';
import styled from 'styled-components';
//목록 감추기용 div
const HideItemsBlock = styled.div `
  cursor: pointer;
`;
const StyledButton = styled(Button) `
  width: 17.5rem;
`;
const DropdownComponent = ({ item1, item2, nation, nationHandler }) => {
    const [chooseText, setChooseText] = useState('검색하실 국가를 선택해주세요.');
    const [hidden, setHidden] = useState(true);
    const HideItems = () => {
        setHidden(!hidden);
    };
    useEffect(() => {
        if (nation === 'K')
            setChooseText(item1);
        else if (nation === 'F')
            setChooseText(item2);
        else
            setChooseText(chooseText);
    }, [nation]);
    return (React.createElement(Dropdown, null,
        React.createElement(StyledButton, { dropdownToggle: true, onClick: () => setHidden(!hidden) }, chooseText),
        React.createElement(DropdownMenu, { hidden: hidden, toggle: () => setHidden(!hidden), fullWidth: true },
            React.createElement(HideItemsBlock, { onClick: HideItems },
                React.createElement(DropdownItem, { value: "K", onClick: nationHandler }, item1)),
            React.createElement(DropdownDivider, null),
            React.createElement(HideItemsBlock, { onClick: HideItems },
                React.createElement(DropdownItem, { value: "F", onClick: nationHandler }, item2)))));
};
export default DropdownComponent;
