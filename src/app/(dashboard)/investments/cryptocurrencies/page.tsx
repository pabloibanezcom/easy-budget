import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';

const pageInfo: PageTopBarProps = {
  title: 'My cryptocurrencies',
  subtitle: 'This is my cryptocurrencies page.'
};

export default async function Cryptocurrencies() {
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
      CryptoCurrencies
    </div>
  );
}
