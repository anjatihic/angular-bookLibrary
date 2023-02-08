import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../models/book.model";
import {Subject} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BookService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createNewBook(title: string, authorId: string, coverURL: string, yearPublished){
    const bookData = new Book(title, authorId, coverURL, yearPublished);

    this.http.post('https://library-7a884-default-rtdb.firebaseio.com/books.json',
      bookData
    ).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    })
  }

  getAllBooks() {
    return this.http
      .get('https://library-7a884-default-rtdb.firebaseio.com/books.json')
      .pipe(map(responseData =>{
        const bookArray: Book[] = [];
        for(const key in responseData) {
          bookArray.push({...responseData[key], id: key});
        }

        return bookArray;
      }));
  }

}
