export class Author{
  name: string;
  surname: string;
  yearBorn: number;
  yearDied?: number;
  id?: string;

  constructor(name: string, surname: string, yearBorn: number, yearDied?: number, id?: string) {
    this.name = name;
    this.surname = surname;
    this.yearBorn = yearBorn;

    yearDied ? this.yearDied = yearDied : this.yearDied = null;
    id ? this.id = id : this.id = null;


  }
}
