import styles from './userBox.module.css';

export const UserBox = () => {
  return (
    <div className={styles.userBox}>
      <div>
        <span>Pablo Ibanez</span>
      </div>
      <div>
        <span>Personal account</span>
      </div>
    </div>
  );
};
