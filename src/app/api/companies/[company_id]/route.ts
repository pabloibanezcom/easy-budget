import { authRoute } from '@/app/api/base_routes';
import { deletedResponse, notFoundResponse, objectResponse, updatedResponse } from '@/app/api/responses';
import { Company } from '@/models';

const itemName = 'Company';

interface IRequestParams {
  params: {
    company_id: string;
  };
}

export async function GET(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const company = await Company.findById(params.company_id);

    if (!company) {
      return notFoundResponse(itemName);
    }

    return objectResponse(company);
  });
}

export async function PUT(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const companyData = await request.json();

    let company;

    try {
      company = await Company.findByIdAndUpdate(params.company_id, companyData, { new: true });
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return updatedResponse(itemName, company);
  });
}

export async function DELETE(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    let company;

    try {
      company = await Company.findByIdAndDelete(params.company_id);
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return deletedResponse(itemName, company);
  });
}
