import { NavbarComponent } from './../navbar/navbar.component';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _authService: AuthService, private _formBuilder: FormBuilder, private UsersService: UsersService, private _router: Router) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  onSubmit(form: FormGroup) {
    var loginobj = {
      username: form.value.username,
      password: form.value.password
    }

    this._authService.auth;
    // console.log(loginobj);
    console.log(this.UsersService.loginUser(loginobj));
    // this._router.navigate(["/posts"]);
    // alert('login submit');
    // this._authService.auth;
  }

}
