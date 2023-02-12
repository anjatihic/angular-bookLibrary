import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  login(regForm: NgForm, userData: {
    username: string,
    password: string
  }) {

    this.auth.login(userData.username, userData.password);
  }
}
