import {GenreEnum} from "./genre.enum";

export class Book{
  title: string;
  authorId: string;
  coverURL: string;
  yearPublished: number;
  id?: string;
  genre: GenreEnum;


  constructor(title: string, authorId: string, coverUrl: string, yearPublished: number, genre: GenreEnum, id?: string) {
    this.title = title;
    this.authorId = authorId;
    this.coverURL = coverUrl;
    this.yearPublished = yearPublished;
    this.genre = genre

    id ? this.id = id : this.id = null;
  }


}
