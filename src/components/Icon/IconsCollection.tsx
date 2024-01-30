import {
  AccountBalance,
  AccountBalanceWallet,
  CreditCard,
  CurrencyBitcoin,
  EuroSymbol,
  ExpandMore,
  Home,
  Savings,
  ShowChart
} from '@mui/icons-material';

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Home':
      return Home;
    case 'EuroSymbol':
      return EuroSymbol;
    case 'AccountBalance':
      return AccountBalance;
    case 'AccountBalanceWallet':
      return AccountBalanceWallet;
    case 'ExpandMore':
      return ExpandMore;
    case 'CreditCard':
      return CreditCard;
    case 'Savings':
      return Savings;
    case 'ShowChart':
      return ShowChart;
    case 'CurrencyBitcoin':
      return CurrencyBitcoin;
    default:
      return null;
  }
};
