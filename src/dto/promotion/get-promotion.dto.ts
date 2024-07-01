//GET - /promotion
//GET - /promotion/:id
export class GetPromotionDto {
    readonly id?: string;
    readonly title?: string;
    readonly description?: string;
    readonly savings?: number;
    readonly pictureId?: string;
}