import { IBankAccountDoc } from '@/models';
import styles from './BankAccountItem.module.scss';

type BankAccountItemProps = {
  bankAccount: IBankAccountDoc;
  className?: string;
};

const BankAccountItem = ({ bankAccount, className }: BankAccountItemProps) => {
  return (
    <div className={styles.bankAccountItem}>
      <div>{bankAccount.alias}</div>
      <div>{bankAccount.bank.name}</div>
      <div>{bankAccount.sortCode}</div>
      <div>{bankAccount.accountNumber}</div>
    </div>
  );
};

export default BankAccountItem;
