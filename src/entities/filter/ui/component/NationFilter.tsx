import { useState, useEffect } from 'react';
import { Button } from 'styled-button-component';
import { Dropdown, DropdownItem, DropdownMenu } from 'styled-dropdown-component';
import styled from 'styled-components';

//목록 감추기용 div
const HideItemsBlock = styled.div`
  cursor: pointer;
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  padding: 0;
`;

const StyledDropdownItem = styled(DropdownItem)`
  padding: 0.75rem 0.5rem;
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  min-width: 6rem;
  height: 2.25rem;
  background: #6e68de;

  &:hover,
  &:focus {
    transition: background 0.2s;
    background: #4f47e5 !important;
  }
`;

export const NationFilter = ({ nation, nationHandler }) => {
  const [chooseText, setChooseText] = useState('검색하실 국가를 선택해주세요.');
  const [hidden, setHidden] = useState(true);

  const HideItems = (): void => {
    setHidden(!hidden);
  };

  useEffect(() => {
    if (nation === 'K') setChooseText('국내');
    else if (nation === 'F') setChooseText('해외');
    else setChooseText(chooseText);
  }, [nation]);

  return (
    <Dropdown>
      <StyledButton dropdownToggle onClick={() => setHidden(!hidden)}>
        {chooseText}
      </StyledButton>
      <StyledDropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)} fullWidth>
        <HideItemsBlock onClick={HideItems}>
          <StyledDropdownItem value="K" onClick={nationHandler}>
            국내
          </StyledDropdownItem>
        </HideItemsBlock>
        <HideItemsBlock onClick={HideItems}>
          <StyledDropdownItem value="F" onClick={nationHandler}>
            해외
          </StyledDropdownItem>
        </HideItemsBlock>
      </StyledDropdownMenu>
    </Dropdown>
  );
};

export default NationFilter;
