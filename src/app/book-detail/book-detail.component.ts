import {
  Component,
  OnInit
} from '@angular/core';
import {Book} from "../models/book.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../shared/services/book.service";
import {Author} from "../models/author.model";
import {AuthorService} from "../shared/services/author.service";
import {User} from "../models/user.model";
import {Loan} from "../models/loan.model";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

  book: Book;
  bookAuthor: Author = null;
  bookId: string;
  authorId: string;
  isFetching = false;
  user: User;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private authorService: AuthorService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.bookId = this.route.snapshot.url[1].path;
    this.authorId = this.route.snapshot.url[2].path;
    this.isFetching = true;

    this.getAuthor();
    this.getBook();

  }

  onDelete(){
    this.bookService.deleteBook(this.bookId).subscribe(res => {
      console.log(res);
      alert('Ova knjiga je izbrisana!')
      this.router.navigate(['books']);
    });
  }

  onLoan(){
    let loan = new Loan(this.bookId);

    this.userService.borrowBook(loan).subscribe(res => {
      console.log(res);
      alert('Knjiga je posuđena na korisničko ime: ' + this.user.username);
    });
  }

  private getBook(){
    this.bookService.getById(this.bookId).subscribe(res => {
      this.book = res;
      this.isFetching = false;
    }, error => {
      this.isFetching = false;
      console.log(error);
    });
  }

  private getAuthor(){
    this.authorService.getById(this.authorId).subscribe(res => {
      this.isFetching = false;
      this.bookAuthor = res;
    }, error => {
      this.isFetching = false;
      console.log(error);
    });
  }
}
