export class Author{
  name: string;
  surname: string;
  yearBorn: number;
  yearDied?: number;

  constructor(name: string, surname: string, yearBorn: number, yearDied?: number) {
    this.name = name;
    this.surname = surname;
    this.yearBorn = yearBorn;

    if(yearDied !== undefined){
      this.yearDied = yearDied;
    }else{
      this.yearDied = null;
    }
  }
}
