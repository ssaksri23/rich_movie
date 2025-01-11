import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

interface Props {
  initialValue: Date | Dayjs;
  onChange?: () => void;
}

export const useDatePicker = ({ initialValue, onChange }: Props) => {
  const [date, setDate] = useState<Date | Date[] | Dayjs | Dayjs[]>(initialValue);

  const updateDate = (value: Date | Date[]) => {
    console.log({ value });
    setDate(value);
  };

  useEffect(() => {
    if (onChange) {
      onChange();
    }
  }, [date, onChange]);

  return { date, updateDate, onChange };
};
