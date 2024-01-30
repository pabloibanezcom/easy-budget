import { CryptoWallet } from '@/components/CryptoWallet';
import { PageTopBar, PageTopBarProps } from '@/components/PageTopBar/PageTopBar';
import { getCryptoAccounts } from '@/services/http';

const pageInfo: PageTopBarProps = {
  title: 'My cryptocurrencies',
  subtitle: 'This is my cryptocurrencies page.'
};

export default async function Cryptocurrencies() {
  const cryptoAccounts = await getCryptoAccounts();
  return (
    <div>
      <PageTopBar title={pageInfo.title} subtitle={pageInfo.subtitle} />
      {cryptoAccounts && <CryptoWallet accounts={cryptoAccounts} />}
    </div>
  );
}
