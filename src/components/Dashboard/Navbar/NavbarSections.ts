import { NavbarSection } from './Navbar.types';

export const navbarSections: NavbarSection[] = [
  {
    title: 'Home',
    elements: [
      {
        title: 'Home',
        icon: 'Home',
        path: '/home'
      }
    ]
  },
  {
    title: 'Monthly accountancy',
    elements: [
      {
        title: 'Expenses',
        icon: 'EuroSymbol',
        path: '/expenses'
      }
    ]
  },
  {
    title: 'Banking',
    elements: [
      {
        title: 'Accounts',
        path: '/banking/accounts',
        icon: 'AccountBalance'
      },
      {
        title: 'Cards',
        path: '/banking/cards',
        icon: 'CreditCard'
      },
      {
        title: 'Deposits',
        path: '/banking/deposits',
        icon: 'Savings'
      }
    ]
  },
  {
    title: 'Investments',
    elements: [
      {
        title: 'Stocks',
        path: '/investments/stocks',
        icon: 'ShowChart'
      },
      {
        title: 'Cryptocurrencies',
        path: '/investments/cryptocurrencies',
        icon: 'CurrencyBitcoin'
      }
    ]
  }
];
