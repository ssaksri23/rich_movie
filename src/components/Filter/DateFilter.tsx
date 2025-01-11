import styled from 'styled-components';
import { DatePickerInput } from '@mantine/dates';
import { FONT_SIZE } from '../../config/font';
import { COLOR } from '../../lib/palette';
import { CalendarIcon } from '../../shared/assets/icons';
import { DEFAULT_BORDER_RADIUS_REM } from '../../config/style';
import { useDatePicker } from './hooks/useDatePicker';

const DatePickerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DatePickerButton = styled.button`
  border-radius: 0.25rem;
  font-size: ${FONT_SIZE.SEMI_SMALL};
  width: 100%;
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

const StyledDatePicker = styled(DatePickerInput)`
  background-color: ${COLOR.sectionColor};
`;

interface Props {
  useDatePicker: ReturnType<typeof useDatePicker>;
}

const DateFilter = ({ useDatePicker }: Props) => {
  const { date, updateDate } = useDatePicker;
  console.log({ date });
  return (
    <DatePickerContainer>
      <StyledDatePicker value={date as Date} valueFormat="YYYY.MM.DD" onChange={updateDate} />
    </DatePickerContainer>
  );
};

export default DateFilter;
