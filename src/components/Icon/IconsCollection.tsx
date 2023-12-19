import { AccountBalance, AccountBalanceWallet, EuroSymbol, ExpandMore, Home } from '@mui/icons-material';

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
    default:
      return null;
  }
};
