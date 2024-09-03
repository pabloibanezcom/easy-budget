import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

export const FormInputText = ({ name, control, label, sx, autoComplete = 'off' }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={renderProps => (
        <TextField
          size="small"
          onChange={renderProps.field.onChange}
          value={renderProps.field.value}
          error={!!renderProps.fieldState.error}
          helperText={renderProps.fieldState.error?.message ?? null}
          fullWidth
          autoComplete={autoComplete}
          label={label}
          variant="outlined"
          sx={sx}
        />
      )}
    />
  );
};
