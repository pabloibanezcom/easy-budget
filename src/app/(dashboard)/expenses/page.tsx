import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';
import { Pagination } from '@/components/Pagination';

const pageInfo: PageTopBarProps = {
  title: 'My expenses',
  subtitle: 'This is my expenses page.'
};

export default async function Expenses() {
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
      <div>
        Expenses
        <Pagination />
      </div>
    </div>
  );
}
