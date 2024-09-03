import { IBankAccountDoc, IBankDoc, ICategoryDoc, ICompanyDoc, ITagDoc } from '@/models';

interface SelectOption {
  value: string;
  label: string;
  color?: string;
}

export const banksToSelectOptions = (banks: IBankDoc[]): SelectOption[] => {
  return banks.map(bank => {
    return { value: bank._id, label: bank.name };
  });
};

export const bankAccountsToSelectOptions = (bankAccounts: IBankAccountDoc[]): SelectOption[] => {
  return bankAccounts.map(bankAccount => {
    return { value: bankAccount._id, label: bankAccount.alias };
  });
};

export const categoriesToSelectOptions = (categories: ICategoryDoc[]): SelectOption[] => {
  return categories.map(category => {
    return { value: category._id, label: category.name, color: category.color };
  });
};

export const companiesToSelectOptions = (companies: ICompanyDoc[]): SelectOption[] => {
  return companies.map(company => {
    return { value: company._id, label: company.name };
  });
};

export const tagsToSelectOptions = (tags: ITagDoc[]): SelectOption[] => {
  return tags.map(tag => {
    return { value: tag._id, label: tag.name, color: tag.color };
  });
};
