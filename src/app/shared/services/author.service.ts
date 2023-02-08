import {Injectable} from "@angular/core";
import {Author} from "../../models/author.model";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import{map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthorService{
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAuthor(name: string, surname: string, yearBorn: number, yearDied?: number) {
    const authorData = new Author(name, surname, yearBorn);
    if(yearDied){
      authorData.yearDied = yearDied;
    }

    this.http.post(
      'https://library-7a884-default-rtdb.firebaseio.com/authors.json',
      authorData
    ).subscribe(responseData => {
      console.log(responseData);
    }, error => {
        this.error.next(error.message);
    });
  }

  getAllAuthors() {
    return this.http
      .get('https://library-7a884-default-rtdb.firebaseio.com/authors.json')
      .pipe(map(responseData => {
        const authorArray: Author[] = [];
        for(const key in responseData) {
          authorArray.push({...responseData[key], id: key});
        }

        return authorArray;
      }));
  }

}
