import CircleIcon from '@mui/icons-material/Circle';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

interface FormInputDropdownProps extends FormInputProps {
  options: { label: string; value: string; color?: string; icon?: string }[];
}

export const FormInputDropdown = ({ name, control, label, sx, multiple, options }: FormInputDropdownProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={renderProps => (
        <FormControl error={!!renderProps.fieldState.error} fullWidth>
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            onChange={renderProps.field.onChange}
            value={renderProps.field.value}
            sx={sx}
            multiple={multiple}
            size="small"
            label={name}
          >
            {options.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                style={option.color ? { borderLeft: `5px solid ${option.color}` } : {}}
              >
                {option.icon && <CircleIcon />}
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {renderProps.fieldState.error && <FormHelperText>{renderProps.fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
