import {Injectable} from "@angular/core";
import {User} from "../../models/user.model";
import {BehaviorSubject, Observable, Subject, Subscription} from "rxjs";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService{
  public user!: User;
  users: User[];
  error: Subject<string> = new Subject<string>();
  userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  subscription: Subscription = new Subscription();
  authState: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService, private router: Router) {
  }

  get fetchUser(){
    if(!this.user){
      this.user = JSON.parse(localStorage.getItem('user') as string);
    }

    return {...this.user};
  }

  login(username: string, pass: string){
    this.error.next('');
    console.log('Logging in ' + username);

    let user = new User(username, pass, '', '', '');
    this.userSubject = this.userService.getUsers();
    this.subscription = this.userSubject.subscribe((res) => {
      this.users = res;
    });

    new Observable((observer) => {
      setTimeout(() => {
        let userNext = this.users.find((u) => {
          if(u.username === username && u.password === pass){
            return u;
          }else return null;
        });
        observer.next(userNext);
      }, 1000);
    }).subscribe((user: any) => {
      if(user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.authState.next(true);
        this.router.navigate(['/home']);
      }else{
        this.error.next('Krivi podaci!');
      }
    });
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.authState.next(false);
    this.router.navigate(['/login']);
  }
}
