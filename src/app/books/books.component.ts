import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";
import {BookService} from "../shared/services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  isFetching = false;
  books: Book[] = [];
  error = null;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.isFetching = true;
    this.bookService.getAllBooks().subscribe( books => {
      this.isFetching = false;
      this.books = books;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }
}
