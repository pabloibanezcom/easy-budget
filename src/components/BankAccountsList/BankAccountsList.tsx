'use client';

import { BankAccountItem } from '@/components';
import { IBankAccountDoc } from '@/models';
import { useEffect, useState } from 'react';
import styles from './BankAccountsList.module.scss';

const BankAccountsList = () => {
  const [bankAccounts, setBankAccounts] = useState<IBankAccountDoc[]>([]);

  useEffect(() => {
    const fetchBankAccounts = async () => {
      const data = await fetch('/api/bank-accounts');
      const json = await data.json();
      setBankAccounts(json);
    };

    fetchBankAccounts();
  }, []);

  return (
    <div className={styles.bankAccountsList}>
      <h2>Bank accounts List</h2>
      {bankAccounts.map(bankAccount => (
        <BankAccountItem key={bankAccount._id} bankAccount={bankAccount} />
      ))}
    </div>
  );
};

export default BankAccountsList;
