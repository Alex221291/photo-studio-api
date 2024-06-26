//GET - /equipment
//GET - /equipment/:id
export class GetEquipmentDto {
    readonly id?: string;
    readonly title?: string;
    readonly description?: string;
    readonly count?: string;
    readonly pictureId?: string;
}