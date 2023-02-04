import {Author} from "./author.model";

export class Book{
  title: string;
  author: Author;
  coverURL: string;
  yearPublished: number;

  //genres: Genre[];


  constructor(title: string, author: Author, coverUrl: string, yearPublished: number, /*genres: Genre[]*/) {
    this.title = title;
    this.author = author;
    this.coverURL = coverUrl;
    this.yearPublished = yearPublished;
    //this.genres = genres;
  }


}
