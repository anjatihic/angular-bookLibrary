export class Book{
  title: string;
  authorId: string;
  coverURL: string;
  yearPublished: number;
  id?: string;

  //genres: Genre[];


  constructor(title: string, authorId: string, coverUrl: string, yearPublished: number, id?: string /*genres: Genre[]*/) {
    this.title = title;
    this.authorId = authorId;
    this.coverURL = coverUrl;
    this.yearPublished = yearPublished;

    id ? this.id = id : this.id = null;
    //this.genres = genres;
  }


}
