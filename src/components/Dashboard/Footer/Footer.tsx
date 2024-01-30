import styles from './footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSide} />
      <div className={styles.rightSide}>@ {currentYear} - Pablo Ibanez</div>
    </footer>
  );
};
