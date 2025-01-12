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
  const maximumDate = new Date();
  maximumDate.setDate(maximumDate.getDate() - 1); // 어제 날짜로 설정
  return (
    <DatePickerContainer>
        maxDate={maximumDate}
    </DatePickerContainer>
  );
};

export default DateFilter;
