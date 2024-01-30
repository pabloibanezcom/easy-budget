import { CryptoAccount } from '@/interfaces';
import classnames from 'classnames';
import { Card } from '../Card';
import styles from './cryptoWallet.module.scss';

type CryptoWalletProps = {
  className?: string;
  accounts: CryptoAccount[];
};

export const CryptoWallet = ({ className, accounts }: CryptoWalletProps) => {
  return (
    <div className={classnames(styles.cryptoWallet, className)}>
      <Card title="Crypto Wallet">
        <ul>
          {accounts.map(account => (
            <li key={account.balance}>
              {account.currency} - {String(account.balance)}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
