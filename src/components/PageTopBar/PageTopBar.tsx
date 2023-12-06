import styles from './pageTopBar.module.css';

type PageTopBarProps = {
  title: string;
  subtitle?: string;
};

export const PageTopBar = ({ title, subtitle }: PageTopBarProps) => {
  return (
    <div className={styles.pageTopBar}>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
    </div>
  );
};
