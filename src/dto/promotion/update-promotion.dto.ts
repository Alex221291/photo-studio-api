//POST - /promotion/update
export class UpdatePromotionDto {
    readonly id?: string;
    readonly title?: string;
    readonly description?: string;
    readonly savings?: number;
}