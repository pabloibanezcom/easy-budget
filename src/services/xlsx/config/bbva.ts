import { XlsxConfig } from '../model/xlsxConfig';

export const bbva: XlsxConfig = {
  rowsToSkip: 3,
  fields: [
    {
      position: 0,
      name: 'date',
      type: 'date'
    },
    {
      position: 2,
      name: 'concepto'
    },
    {
      position: 3,
      name: 'Movimiento'
    },
    {
      position: 4,
      name: 'amount',
      type: 'amount'
    },
    {
      position: 5,
      name: 'currency'
    },
    {
      position: 8,
      name: 'comments'
    }
  ],
  parsers: {
    date: (date: string) => {
      console.log(date);
      const dateParts = date.split('/').map(part => parseInt(part, 10));
      return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    },
    amount: (amount: string) => {
      return Number(amount);
    }
  }
};
