export class Loan{
  bookId: string;
  dateLoaned: Date;
  dateDue: Date;


  constructor(bookId: string) {
    this.bookId = bookId;

    this.dateLoaned = new Date();

    this.dateDue = new Date();
    this.dateDue.setMonth(this.dateDue.getMonth() + 1);

  }

}
