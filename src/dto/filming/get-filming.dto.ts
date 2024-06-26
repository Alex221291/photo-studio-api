//GET - /filming
//GET - /filming/:id
export class GetFilmingDto {
    readonly id?: string;
    readonly title?: string;
    readonly description?: string;
    readonly order?: number;
    readonly price?: string;
    readonly pictureId?: string;
}