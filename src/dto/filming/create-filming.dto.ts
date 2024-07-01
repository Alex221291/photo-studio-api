//POST - /filming/create
export class CreateFilmingDto {
    readonly title?: string;
    readonly description?: string;
    readonly order?: number;
    readonly price?: number;
    readonly otherPrice?: number;
}