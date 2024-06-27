//POST - /favor/update
export class UpdateFavorDto {
    readonly id?: string;
    readonly title?: string;
    readonly description?: string;
    readonly order?: number;
    readonly count?: string;

}