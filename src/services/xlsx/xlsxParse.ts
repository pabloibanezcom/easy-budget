import { IBankAccountDoc } from '@/models';
import * as XLSX from 'xlsx';
import { getConfiguration } from './config';
import { XlsxConfig } from './model/xlsxConfig';

const getHeaderFromConfig = (config: XlsxConfig) => {
  const header: string[] = [];
  for (let i = 0; i <= Math.max(...config.fields.map(f => f.position)); i++) {
    header.push(config.fields.find(field => field.position === i)?.name || `Unwanted${i}`);
  }
  return header;
};

const transformRow = (
  row: any,
  propsToTransform: { name: string; type: 'date' | 'amount' | undefined }[],
  parsers: any
) => {
  for (const prop of propsToTransform) {
    if (prop.type === 'date') {
      row[prop.name] = parsers['date'](row[prop.name]);
    } else if (prop.type === 'amount') {
      row[prop.name] = parsers['amount'](row[prop.name]);
    }
  }
  return row;
};

const sheetToJSON = (config: XlsxConfig, sheet: any) => {
  const propsToTransform = config.fields
    .filter(field => field.type)
    .map(field => {
      return { name: field.name, type: field.type };
    });
  return XLSX.utils
    .sheet_to_json(sheet, {
      header: getHeaderFromConfig(config),
      raw: false
    })
    .slice(config.rowsToSkip)
    .map((row: any) => {
      return transformRow(
        Object.fromEntries(Object.entries(row).filter(([key, value]) => !key.startsWith('Unwanted'))),
        propsToTransform,
        config.parsers
      );
    });
};

export const parseXLSX = async (bankAccount: IBankAccountDoc, file: any) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileContent = XLSX.read(buffer, { type: 'buffer' });

  const config = getConfiguration(bankAccount.bank.name.toLowerCase());

  const result = sheetToJSON(config, fileContent.Sheets[fileContent.SheetNames[0]]);
  return result;
};
