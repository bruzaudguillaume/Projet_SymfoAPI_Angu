export class Artist {
    id: number;
    name: string;
    yearOfBirth: number;

    public constructor(id: number,
                       name: string,
                       yearOfBirth: number) {
        this.id = id;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
}
