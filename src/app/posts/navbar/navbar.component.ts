import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private _authService: AuthService) { }

  // refresh = new BehaviorSubject(this.navbarRe());

  navbarRe() {
    this._authService.auth.subscribe((data: any) => {
      console.log(data);
      this.loggedIn = data;
    });
  }

  ngOnInit() {
    this._authService.auth.subscribe((data: any) => {
      this.loggedIn = data;
    });
  }

  logout() {
    this._authService.logout();
  }

}
