import styled from 'styled-components';
import { FONT_SIZE } from '../../config/font';
import { COLOR } from '../../lib/palette';
import { CalendarIcon } from '../../shared/assets/icons';
import { Calendar } from '@mantine/dates';
import { DEFAULT_BORDER_RADIUS_REM } from '../../config/style';

const DatePickerContainer = styled.div`
  position: relative;
`;

const DatePickerButton = styled.button`
  border-radius: 0.25rem;
  font-size: ${FONT_SIZE.SEMI_SMALL};
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  color: ${COLOR.text.basicColor};
  background: ${COLOR.defaultButtonColor};
`;

const StyledCalendar = styled(Calendar)`
  position: absolute;
  top: 3rem;
  left: -5rem;
  background-color: ${COLOR.sectionColor};
  padding: 0.5rem 0.75rem;
  border-radius: ${DEFAULT_BORDER_RADIUS_REM};
`;

const Icon = styled(CalendarIcon)``;

const Label = styled.span``;

interface Props {
  onChange: (e) => void;
}

const DatePicker = ({ onChange }: Props) => {
  return (
    <DatePickerContainer>
      <DatePickerButton>
        <Icon />
        <Label>날짜 선택</Label>
      </DatePickerButton>
      <StyledCalendar
        getDayProps={(date) => ({
          onClick: () => onChange(date),
        })}
        onChange={onChange}
      />
      {/* <Bytt type="date" value={date} onChange={updateDate} onKeyDown={enterKey} /> */}
    </DatePickerContainer>
  );
};

export default DatePicker;
