//PUT - /tariff
export class UpdateTariffDto {
    id: string;
    caption?: string;
    description?: string;
    price?: number;
}