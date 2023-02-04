import { Component } from '@angular/core';
import {Book} from "../../models/book.model";
import {Author} from "../../models/author.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  books: Book[] = [
    new Book(
      "The Midnight Library",
      new Author("Matt", "Haig", 1975),
      "https://m.media-amazon.com/images/I/81tCtHFtOgL.jpg",
      2020),
    new Book(
      "Tomorrow, and Tomorrow, and Tomorrow",
      new Author("Gabrielle", "Zevin", 1977),
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
      2022)
  ]

}
