import { LanguageSelector } from '@/components/LanguageSelector';
import ContrastIcon from '@mui/icons-material/Contrast';
import Notifications from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styles from './header.module.scss';

type HeaderProps = {
  onToggleTheme: () => void;
};

export const Header = ({ onToggleTheme }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <Tooltip title="Notifications">
          <IconButton aria-label="notifications">
            <Notifications />
          </IconButton>
        </Tooltip>
        <LanguageSelector />
        <Tooltip title="Change theme">
          <IconButton aria-label="change theme" onClick={onToggleTheme}>
            <ContrastIcon />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};
