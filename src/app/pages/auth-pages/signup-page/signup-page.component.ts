import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signup(userDetails: User) {
    console.log("user details from signup")
    console.log(userDetails);
  }

}
