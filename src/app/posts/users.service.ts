import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient, private _authService: AuthService, private _router: Router) { }

  getUser() {

  }

  registerUser(formobj) {
    console.log(formobj)
    this._httpClient.post('http://localhost:3000/api/user', formobj)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  };

  loginUser(loginObj) {
    this._httpClient.post('http://localhost:3000/api/login', loginObj)
      .subscribe(res => {
        sessionStorage.setItem('token', JSON.stringify(res));
        this._authService.auth.next(this._authService.loggedIn());
        this._router.navigate(["/home"]);
        console.log(res);
        // if
      }, err => {
        console.log("error in login");
      })
    // return loginObj;
  }
}
