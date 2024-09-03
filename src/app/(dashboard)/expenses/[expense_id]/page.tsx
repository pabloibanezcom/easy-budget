import { getBankAccounts, getCategories, getCompanies, getExpense, getTags } from '@/actions';
import { ExpenseForm } from '@/components';
import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'Edit Expense'
};

export default async function NewExpense({ params }: { params: { expense_id: string } }) {
  const [expense, categories, bankAccounts, companies, tags] = await Promise.all([
    getExpense(params.expense_id),
    getCategories(),
    getBankAccounts(),
    getCompanies(),
    getTags()
  ]);

  return (
    <div>
      <PageTopBar title={pageInfo.title} />
      {categories && expense && bankAccounts && companies && tags && (
        <ExpenseForm
          categories={categories}
          expense={expense}
          bankAccounts={bankAccounts}
          companies={companies}
          tags={tags}
        />
      )}
    </div>
  );
}
