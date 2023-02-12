import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../shared/services/book.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

  book: Book;
  bookId: string;
  isFetching = false;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit() {
    this.bookId = this.route.snapshot.url[1].path;
    this.isFetching = true;
    this.bookService.getById(this.bookId).subscribe(res => {
      this.isFetching = false;
      this.book = res;
    }, error => {
      this.isFetching = false;
      console.log(error);
    });
  }
}
