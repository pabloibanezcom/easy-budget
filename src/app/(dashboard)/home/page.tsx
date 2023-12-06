import { PageTopBar } from '@/components/PageTopBar/PageTopBar';

export default async function Home() {
  const pageInfo = {
    title: 'Analytics Dashboard',
    subtitle: 'Welcome back, Pablo! We have missed you.'
  };

  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}
