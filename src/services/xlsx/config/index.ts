import { bbva } from './bbva';
import { revolut } from './revolut';

export const getConfiguration = (configName: string) => {
  switch (configName) {
    case 'bbva':
      return bbva;
    case 'revolut':
      return revolut;
    default:
      throw new Error('Configuration not found');
  }
};
