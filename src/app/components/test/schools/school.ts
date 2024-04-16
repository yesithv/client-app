export class School {

    public id: number;
    public name: string;
    public capacity: number;
    public isPublic: boolean;

    constructor() {
        this.id = 0;
        this.name = 'New School';
        this.capacity = 1;
        this.isPublic = false;
    }
}