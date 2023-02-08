import {Component, OnInit} from '@angular/core';
import {BookService} from "../../shared/services/book.service";
import {Book} from "../../models/book.model";
import {Author} from "../../models/author.model";
import {AuthorService} from "../../shared/services/author.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit{
  authors: Author[] = [];

  constructor(private bookService: BookService, private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorService.getAllAuthors().subscribe( authors => {
      console.log('Fetching authors');
      this.authors = authors;
    }, error => {
      alert(error.message());
    })
  }

  onCreateBook(bookData: Book) {
    console.log('onCreateBook()');
    this.bookService.createNewBook(bookData.title, bookData.authorId, bookData.coverURL, bookData.yearPublished);
    alert('Book is created');
  }

}
