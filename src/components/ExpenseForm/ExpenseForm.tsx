'use client';

import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';

import { createExpense } from '@/actions';
import { FormInputDate, FormInputDropdown, FormInputText } from '@/components/form';
import { Currency } from '@/enums';
import { IBankAccountDocument, ICategoryDocument, ICompanyDocument, IExpenseDocument, ITagDocument } from '@/models';
import {
  bankAccountsToSelectOptions,
  categoriesToSelectOptions,
  companiesToSelectOptions,
  tagsToSelectOptions
} from '@/utils/form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';

const validationSchema = yup.object({
  description: yup.string().required('Missing description'),
  comments: yup.string().required('Missing comment'),
  amount: yup.number().required('Missing amount').positive('Amount must be positive'),
  date: yup.date().required('Missing date'),
  category: yup.string().required('Missing category')
});

interface IExpenseFormValues {
  description: string;
  comments: string;
  amount: number;
  date: Date;
  category: string;
}

interface IExpenseFormProps {
  expense?: IExpenseDocument;
  categories: ICategoryDocument[];
  bankAccounts: IBankAccountDocument[];
  companies: ICompanyDocument[];
  tags: ITagDocument[];
}

const ExpenseForm = ({ expense, categories, bankAccounts, companies, tags }: IExpenseFormProps) => {
  const { handleSubmit, control } = useForm<IExpenseFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      description: expense?.description || '',
      comments: expense?.comments || '',
      date: undefined,
      amount: expense?.amount || undefined,
      category: undefined
    }
  });

  const onSubmit = (data: IExpenseFormValues) => {
    const postExpense = async () => {
      const result = await createExpense({
        ...data,
        currency: 'EUR' as Currency,
        tags: ['66caed3833d28403482bcffe']
      });
    };

    postExpense();
  };
  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: '10px 300px'
      }}
    >
      <Typography variant="h5">Add expense</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText name="description" control={control} label="Description" sx={{ mb: 2 }} />
        <FormInputText name="comments" control={control} label="Comments" sx={{ mb: 2 }} />
        <FormInputText name="amount" control={control} label="Amount" sx={{ mb: 2 }} />
        <FormInputDate name="date" control={control} label="Date" sx={{ mb: 2 }} />
        <FormInputDropdown
          name="category"
          control={control}
          label="Category"
          sx={{ mb: 2 }}
          options={categoriesToSelectOptions(categories)}
        />
        <FormInputDropdown
          name="bankAccount"
          control={control}
          label="Bank Account"
          sx={{ mb: 2 }}
          options={bankAccountsToSelectOptions(bankAccounts)}
        />
        <FormInputDropdown
          name="issuer"
          control={control}
          label="Issuer"
          sx={{ mb: 2 }}
          options={companiesToSelectOptions(companies)}
        />
        <FormInputDropdown
          name="tags"
          control={control}
          label="Tags"
          sx={{ mb: 2 }}
          options={tagsToSelectOptions(tags)}
        />
        <Button type="submit" variant={'contained'} sx={{ mt: 2, display: 'block' }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default ExpenseForm;
