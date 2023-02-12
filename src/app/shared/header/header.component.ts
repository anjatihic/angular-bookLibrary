import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    console.log(this.user);
  }

  onLogout(){
    this.authService.logout();
    this.user = null;

  }
}
