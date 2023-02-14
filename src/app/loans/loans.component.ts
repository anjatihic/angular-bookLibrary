import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";
import {User} from "../models/user.model";
import {BookService} from "../shared/services/book.service";
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit{
  book: Book;
  user: User;
  isFetching = false;

  constructor(private bookService: BookService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    if(this.user.loan){
      this.isFetching = true;
      this.bookService.getById(this.user.loan.bookId).subscribe(res => {
        this.book = res;
        this.isFetching = false;
      }, error => {
        this.isFetching = false;
        console.log(error);
      });
    }
  }

  onReturn(){
    this.userService.returnBook().subscribe( res => {
      alert('Knjiga: ' + this.book.title + 'je vraćena');
      this.book = null;
      this.router.navigate(['']);
    })
  }
}
