import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    console.log("ng form from login");
    console.log(form);
    this.router.navigateByUrl('/');
  }

}
