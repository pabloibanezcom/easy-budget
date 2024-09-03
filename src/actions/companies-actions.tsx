'use server';

import { Company, ICompanyDoc } from '@/models';

export async function getCompanies(): Promise<ICompanyDoc[]> {
  const companies = await Company.getAllCompanies();
  return JSON.parse(JSON.stringify(companies));
}
