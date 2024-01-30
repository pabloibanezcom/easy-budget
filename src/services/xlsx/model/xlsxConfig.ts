interface field {
  position: number;
  name: string;
  type?: 'date' | 'amount';
}

export interface XlsxConfig {
  rowsToSkip: number;
  fields: field[];
  parsers?: {
    date?: (date: string) => Date | null;
    amount?: (amount: string) => number;
  };
}
