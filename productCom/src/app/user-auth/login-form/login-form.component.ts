import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { RestApiService } from 'src/app/rest-api.service';
import { UserStatusService } from 'src/app/user-status.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private restAPI: RestApiService, private router: Router, private userStatus: UserStatusService) { }

  @ViewChild('loginForm')
  loginForm!: NgForm;

  ngOnInit(): void {
  }

  handleLogin(form: Login) {
    
    if (this.loginForm.invalid) {
      return;
    }

    this.restAPI.loginAPI(form).subscribe(d => {
      d = d[0];
      if (d?.status === 401) {
        this.loginForm.form.setErrors({'invalidCred' : true});
      } else if (d?.status === 404) {
        this.loginForm.form.setErrors({'emailNotFound' : true});
      } else if (d?.status === 200) {
        this.userStatus.setStatus(true);
        sessionStorage.setItem('userToken', `{"email":"${form.email}", "token":"${d.token}"}`);
        this.router.navigate(['/products']);
      }
    });
  }

}
