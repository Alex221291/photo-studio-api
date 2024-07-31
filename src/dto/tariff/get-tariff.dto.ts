//GET - /tariff
//GET - /tariff/:id
export class GetTariffDto {
    id: string;
    caption?: string;
    description?: string;
    price?: number;
}