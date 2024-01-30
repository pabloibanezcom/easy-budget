import { XlsxConfig } from '../model/xlsxConfig';

const parseDateA = (date: string) => {
  const dateParts = date.split('/').map(part => parseInt(part, 10));
  return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
};

const parseDateB = (date: string) => {
  const dateParts = date.split('-').map(part => parseInt(part, 10));
  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};

export const revolut: XlsxConfig = {
  rowsToSkip: 1,
  fields: [
    {
      position: 0,
      name: 'type'
    },
    {
      position: 2,
      name: 'startedDate',
      type: 'date'
    },
    {
      position: 3,
      name: 'completedDate',
      type: 'date'
    },
    {
      position: 4,
      name: 'description'
    },
    {
      position: 5,
      name: 'amount',
      type: 'amount'
    },
    {
      position: 7,
      name: 'currency'
    }
  ],
  parsers: {
    date: (date: string) => {
      if (!date) {
        return null;
      }
      const onlyDate = date.split(' ')[0];
      return onlyDate.includes('/') ? parseDateA(onlyDate) : parseDateB(onlyDate);
    },
    amount: (amount: string) => {
      return Number(amount);
    }
  }
};
