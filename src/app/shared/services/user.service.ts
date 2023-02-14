import {Injectable} from "@angular/core";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";
import {Loan} from "../../models/loan.model";

@Injectable({providedIn: 'root'})
export class UserService{

  userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users: User[] = [];
  user: User;

  constructor(private http: HttpClient) {
    this.init();
  }

  init(){
    this.http.get("https://library-7a884-default-rtdb.firebaseio.com/users.json")
      .pipe(
        map((res: any) => {
          const users = [];
          for(let key in res){
            users.push({...res[key], id: key});
          }
          return users;
        })
      ).subscribe((res: User[]) => {
        this.users = res;
        this.userSubject.next([...this.users]);
    });
  }

  register(username: string, password: string, email: string, name: string, surname: string){
    let newUser = new User(username, password, email, name, surname);

    this.http.post("https://library-7a884-default-rtdb.firebaseio.com/users.json", newUser).subscribe((data: any) => {
      console.log(data);
    });
  }

  getUsers(){
    return this.userSubject;
  }

  borrowBook(loan: Loan){
    this.user = JSON.parse(localStorage.getItem('user') as string);

    this.user.loan = loan;


    return this.http.put("https://library-7a884-default-rtdb.firebaseio.com/users/" + this.user.id + ".json", this.user);
  }

  returnBook() {
    this.user = JSON.parse(localStorage.getItem('user') as string);

    this.user.loan = null;

    return this.http.put("https://library-7a884-default-rtdb.firebaseio.com/users/" + this.user.id + ".json", this.user);
  }



}
