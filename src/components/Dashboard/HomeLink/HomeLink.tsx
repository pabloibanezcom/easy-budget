import { Equalizer } from '@mui/icons-material';
import classNames from 'classnames';
import styles from './homeLink.module.css';

type HomeLinkProps = {
  collapsed?: boolean;
};

export const HomeLink = ({ collapsed }: HomeLinkProps) => {
  return (
    <a href="/" className={classNames(styles.homeLink, collapsed && styles['homeLink--collapsed'])}>
      <Equalizer fontSize="large" />
      <span>Easy Budget</span>
    </a>
  );
};
