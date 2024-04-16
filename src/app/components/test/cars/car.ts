export class Car {
    public id: number;
    public model: string;
    public year: number;
    public automatic: boolean;

    constructor() {
        this.id = 0;
        this.model = 'New Car';
        this.year = 1900;
        this.automatic = false;
    }
}