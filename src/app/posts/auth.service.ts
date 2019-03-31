import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor(private _router: Router) { }


  auth = new BehaviorSubject(this.loggedIn());

  loggedIn() {
    // this._router.navigate(["/posts"]);
    return sessionStorage.getItem('token') || '';
  }

  logout() {
    sessionStorage.removeItem("token");
    this.auth.next(this.loggedIn());

    this._router.navigate(["/login"]);
  }

  intercept(req, next) {
    var authRequest = req.clone({
      headers: new HttpHeaders().set(
        "token",
        this.loggedIn()
      )
    });
    // console.log("helloo");
    return next.handle(authRequest);
    // return next.handle(req);
  }

}
