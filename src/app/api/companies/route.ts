import { authRoute } from '@/app/api/base_routes';
import { createdResponse, notFoundResponse, objectResponse } from '@/app/api/responses';
import { Category, Company, ICompanyRequestBody } from '@/models';

const itemName = 'Company';

export async function GET() {
  return await authRoute(async () => {
    const companies = await Company.getAllCompanies();
    return objectResponse(companies);
  });
}

export async function POST(request: Request) {
  return await authRoute(async () => {
    const { name, bankConceptName, defaultCategory }: ICompanyRequestBody = await request.json();
    const companyData: ICompanyRequestBody = {
      name,
      bankConceptName
    };

    if (defaultCategory) {
      try {
        const category = await Category.findById(defaultCategory);
        companyData.defaultCategory = category?._id;
      } catch (error) {
        return notFoundResponse('Category');
      }
    }

    const company = await Company.create(companyData);
    return createdResponse(itemName, company);
  });
}
