import { IconCalendar } from '@tabler/icons-react';

export const CalendarIcon = () => {
  return (
    <IconCalendar
      size={22}
      color="black" // set `stroke` color
      stroke={1} // set `stroke-width`
      strokeLinejoin="miter" // override other SVG props
    />
  );
};
