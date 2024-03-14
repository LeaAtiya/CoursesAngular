export class Category {
    id?: number;
    name?: string;
    iconRouting?: string;
    constructor(id?: number, name?: string, iconRouting?: string) {
        this.id = id;
        this.iconRouting = iconRouting;
        this.name = name;
    }
}