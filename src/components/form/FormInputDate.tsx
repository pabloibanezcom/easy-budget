import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

export const FormInputDate = ({ name, control, label, sx }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={renderProps => (
        <div>
          <DatePicker
            onChange={renderProps.field.onChange}
            value={renderProps.field.value || null}
            label={label}
            sx={sx}
          />
        </div>
      )}
    />
  );
};
