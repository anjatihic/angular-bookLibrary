import {User} from "./user.model";
import {Book} from "./book.model";

export class Loan{
  user: User;
  dateLoaned: Date;
  dateDue: Date;
  book: Book;

}
