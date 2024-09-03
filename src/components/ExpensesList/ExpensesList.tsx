'use client';

import { ExpenseItem } from '@/components';
import { IExpenseDoc } from '@/models';
import { Button } from '@mui/material';
import Link from 'next/link';
import styles from './ExpensesList.module.scss';

interface IExpenseListProps {
  expenses: IExpenseDoc[];
}

const ExpensesList = ({ expenses }: IExpenseListProps) => {
  return (
    <div className={styles.expensesList}>
      <div className={styles.topBar}>
        <h2>Expenses List</h2>
        <Link href="/expenses/new">
          <Button variant={'contained'} size="small" sx={{ mt: 2, display: 'block' }}>
            Add Expense
          </Button>
        </Link>
      </div>
      {expenses.map(expense => (
        <ExpenseItem key={expense._id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;
