import styled from 'styled-components';
import { DatePickerInput } from '@mantine/dates';
import { COLOR } from '../../lib/palette';
import { useDatePicker } from './hooks/useDatePicker';

const DatePickerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledDatePicker = styled(DatePickerInput)`
  background-color: ${COLOR.sectionColor};
`;

interface Props {
  useDatePicker: ReturnType<typeof useDatePicker>;
}

const DateFilter = ({ useDatePicker }: Props) => {
  const { date, updateDate } = useDatePicker;
  return (
    <DatePickerContainer>
      <StyledDatePicker value={date as Date} valueFormat="YYYY.MM.DD" onChange={updateDate} />
    </DatePickerContainer>
  );
};

export default DateFilter;
