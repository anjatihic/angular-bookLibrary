import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {
  }

  onRegister(regForm: NgForm, userData: {
    username: string,
    password: string,
    email: string,
    name: string,
    surname: string
  }){

    this.userService.register(userData.username, userData.password, userData.email, userData.name, userData.surname);

    regForm.reset();
    alert('Sada se možeš prijaviti u aplikaciju!')
    this.router.navigate(['/login']);
    location.reload();
  }
}
