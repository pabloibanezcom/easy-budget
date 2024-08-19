import { IExpense } from '@/models';
import classnames from 'classnames';
import { Card } from '../Card';
import styles from './expenseCard.module.scss';

type ExpenseCardProps = {
  expense: IExpense;
  className?: string;
};

export const ExpenseCard = ({ expense, className }: ExpenseCardProps) => {
  return (
    <Card className={classnames(styles.expenseCard, className)} title="Expense">
      {expense.description}
    </Card>
  );
};