import { Pagination as MuiPagination } from '@mui/material';
import classnames from 'classnames';
import styles from './pagination.module.scss';

type PaginationProps = {
  className?: string;
};

export const Pagination = ({ className }: PaginationProps) => {
  return (
    <div className={classnames(styles.pagination, className)}>
      <MuiPagination showFirstButton showLastButton shape="rounded" count={10} color="primary" />
    </div>
  );
};
