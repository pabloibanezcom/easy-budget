import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'My accounts',
  subtitle: 'This is my accounts page.'
};

export default async function Accounts() {
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}
