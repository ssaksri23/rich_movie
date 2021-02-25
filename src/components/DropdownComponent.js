import React, {useState, useContext} from 'react';
import {Button} from 'styled-button-component';
import {Dropdown, DropdownItem, DropdownMenu, DropdownDivider} from 'styled-dropdown-component';
import styled from 'styled-components';
import palette from '../lib/palette';

//목록 감추기용 div
const HideItemsBlock = styled.div`
    cursor: pointer;
`

const DropdownComponent = ({item1, item2, nationHandler}) => {

    const HideItems = () => {
        setHidden(!hidden);
    }

    const [hidden, setHidden] = useState(true);
        return (
        <Dropdown>
            <Button dropdownToggle onClick={()=> setHidden(!hidden)}>검색하실 국가를 선택해주세요.</Button>
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