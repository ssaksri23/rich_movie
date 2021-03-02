import React, {useState, useEffect, useContext} from 'react';
import {Button} from 'styled-button-component';
import {Dropdown, DropdownItem, DropdownMenu, DropdownDivider} from 'styled-dropdown-component';
import styled from 'styled-components';
import palette from '../lib/palette';

//목록 감추기용 div
const HideItemsBlock = styled.div`
    cursor: pointer;
`

const StyledButton = styled(Button)`
    width: 17.5rem;
`

const DropdownComponent = ({item1, item2, nation, nationHandler}) => {
    const [chooseText, setChooseText] = useState('검색하실 국가를 선택해주세요.');
    const [hidden, setHidden] = useState(true);
    

    const HideItems = () => {
        setHidden(!hidden);
    }

    useEffect(() => {
        if (nation === 'K')
            setChooseText(item1);
        else if (nation === 'F')
            setChooseText(item2);
        else
            setChooseText(chooseText);
    }, [nation]);

        return (
        <Dropdown>
            <StyledButton dropdownToggle onClick={()=> setHidden(!hidden)}>
                {chooseText}
            </StyledButton>
            <DropdownMenu hidden={hidden} toggle={()=> setHidden(!hidden)} fullWidth>
                <HideItemsBlock onClick={HideItems}>
                    <DropdownItem 
                        value="K" 
                        onClick={nationHandler}
                        >
                            {item1}
                    </DropdownItem>
                </HideItemsBlock>
                <DropdownDivider/>
                <HideItemsBlock onClick={HideItems}>
                    <DropdownItem 
                        value="F" 
                        onClick={nationHandler}
                    >
                            {item2}
                    </DropdownItem>
                </HideItemsBlock>
            </DropdownMenu>
        </Dropdown>
    );
} 

export default DropdownComponent;