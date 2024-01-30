import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import classnames from 'classnames';
import styles from './card.module.scss';

type CardProps = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
};

export const Card = ({ className, children, title }: CardProps) => {
  return (
    <div className={classnames(styles.card, className)}>
      <div className={styles.cardHeader}>
        <h6>{title}</h6>
        <div className={styles.cardHeaderRight}>
          <IconButton aria-label="actions">
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {children}
    </div>
  );
};
