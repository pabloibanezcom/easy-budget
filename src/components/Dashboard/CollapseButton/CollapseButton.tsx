import { ChevronLeft } from '@mui/icons-material';
import Button from '@mui/material/Button';
import styles from './collapseButton.module.css';

type CollapseButtonProps = {
  onClick: () => void;
};

export const CollapseButton = ({ onClick }: CollapseButtonProps) => {
  return (
    <Button variant="contained" color="primary" className={styles.collapseButton} onClick={onClick}>
      <ChevronLeft fontSize="large" />
    </Button>
  );
};
