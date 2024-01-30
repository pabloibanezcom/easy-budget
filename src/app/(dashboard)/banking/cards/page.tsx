import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'My cards',
  subtitle: 'This is my cards page.'
};

export default async function Cards() {
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}
