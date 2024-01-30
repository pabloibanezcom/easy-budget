import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'My deposits',
  subtitle: 'This is my deposits page.'
};

export default async function Deposits() {
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}
