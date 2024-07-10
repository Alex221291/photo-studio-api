//POST - /promotion/create
export class CreatePromotionDto {
    readonly title?: string;
    readonly description?: string;
    readonly savings?: number;
    readonly subject?: string;
    readonly time?: number;
}