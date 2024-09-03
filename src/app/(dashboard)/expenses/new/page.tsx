import { getBankAccounts, getCategories, getCompanies, getTags } from '@/actions';
import { ExpenseForm } from '@/components';
import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'New expense'
};

export default async function NewExpense() {
  const [categories, bankAccounts, companies, tags] = await Promise.all([
    getCategories(),
    getBankAccounts(),
    getCompanies(),
    getTags()
  ]);

  return (
    <div>
      <PageTopBar title={pageInfo.title} />
      {categories && bankAccounts && companies && tags && (
        <ExpenseForm categories={categories} bankAccounts={bankAccounts} companies={companies} tags={tags} />
      )}
    </div>
  );
}
