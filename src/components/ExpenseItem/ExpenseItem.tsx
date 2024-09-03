import { IExpenseDoc } from '@/models';
import Link from 'next/link';
import styles from './ExpenseItem.module.scss';

type ExpenseItemProps = {
  expense: IExpenseDoc;
  className?: string;
};

const ExpenseItem = ({ expense, className }: ExpenseItemProps) => {
  return (
    <div className={styles.expenseItem}>
      <div>{expense.description}</div>
      <div>{expense.issuer.name}</div>
      <div>{expense.amount}</div>
      <div>{expense.bankAccount.alias}</div>
      <div>{expense.bankAccount.bank.name}</div>
      <div>{expense.category.name}</div>
      <Link href={`/expenses/${expense._id}`}>Details</Link>
    </div>
  );
};

export default ExpenseItem;
