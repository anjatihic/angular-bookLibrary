import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit{

  user: User;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') as string);
  }

}
