// import React from 'react';
// import { TextField } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers';

// const DatepickerComponent = ({ selectedDate, setSelectedDate }) => {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label="Select Date"
//         value={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//         renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
//       />
//     </LocalizationProvider>
//   );
// };

// export default DatepickerComponent;

// src/Components/DatePicker.js
import React from 'react';

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => {
  return (
    <input
      type="date"
      value={selectedDate || ''}
      onChange={(e) => setSelectedDate(e.target.value)}
    />
  );
};

export default DatePickerComponent;


