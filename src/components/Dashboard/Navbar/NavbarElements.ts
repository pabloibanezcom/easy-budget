import { NavbarSection } from './Navbar.types';

export const navbarElements: NavbarSection[] = [
  {
    elements: [
      {
        title: 'Home',
        icon: 'Home',
        path: '/'
      }
    ]
  },
  {
    title: 'Monthly accountancy',
    elements: [
      {
        title: 'Expenses',
        icon: 'Expenses'
      },
      {
        title: 'Banking',
        icon: 'Bank',
        elements: [
          {
            title: 'Accounts',
            path: '/banking/accounts'
          },
          {
            title: 'Cards',
            path: '/banking/cards'
          },
          {
            title: 'Deposits',
            path: '/banking/deposits'
          }
        ]
      }
    ]
  },
  {
    title: 'Long term',
    elements: [
      {
        title: 'Investments',
        icon: 'Investment',
        elements: [
          {
            title: 'Stocks',
            path: '/investments/stocks'
          },
          {
            title: 'Cryptocurrencies',
            path: '/investments/crpytos'
          }
        ]
      }
    ]
  }
];
