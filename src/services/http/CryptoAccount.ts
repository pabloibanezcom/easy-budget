import axios from 'axios';

export const getCryptoAccounts = async () => {
  const { data } = await axios.get('http://localhost:3000/api/crypto-account');
  return data;
};
