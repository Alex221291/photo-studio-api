//POST - /filming/update
export class UpdateFilmingDto {
    readonly id?: string;
    readonly title?: string;
    readonly description?: string;
    readonly order?: number;
    readonly price?: number;
    readonly otherPrice?: number;
}