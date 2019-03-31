import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _userService: UsersService) { }

  ngOnInit() {
    this.registrationForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    // console.log(form.value.username);
    var formobj = {
      username: form.value.username,
      password: form.value.password
    }
    this._userService.registerUser(formobj);
  }

}
