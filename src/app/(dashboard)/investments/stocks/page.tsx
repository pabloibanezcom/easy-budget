import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'My stocks',
  subtitle: 'This is my stocks page.'
};

export default async function Stocks() {
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}
