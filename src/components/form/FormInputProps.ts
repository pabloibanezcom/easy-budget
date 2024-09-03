import { SxProps, Theme } from '@mui/material';

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  value?: any;
  autoComplete?: string;
  sx?: SxProps<Theme>;
  multiple?: boolean;
}
