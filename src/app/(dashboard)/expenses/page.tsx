import { getExpenses } from '@/actions';
import { ExpensesList } from '@/components';
import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'My expenses',
  subtitle: 'This is my expenses page.'
};

export default async function Expenses() {
  const expenses = await getExpenses();
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
      <div>
        <ExpensesList expenses={expenses} />
      </div>
    </div>
  );
}
