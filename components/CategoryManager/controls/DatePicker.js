import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';

const DatePicker = (props) => {
  const { name, value, onChange, label } = props;

  const convertToDefaultParams = () => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultParams(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
