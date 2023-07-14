import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private restAPI: RestApiService) { }

  @ViewChild('signupForm')
  signupForm!: NgForm;

  ngOnInit(): void {
  }

  handleSignup(form: User, event: Event) {

    if (this.signupForm.invalid) {
      return;
    }
    if (form.password !== form.confpassword) {
      this.signupForm.form.setErrors({'passwordMismatch' : true});
      return
    }
    delete form.confpassword;
    this.restAPI.registerAPI(form).subscribe(d => {
      d = d[0];
      if (d?.status === 400) {
        this.signupForm.form.setErrors({'required' : true});
      } else if (d?.status === 409) {
        this.signupForm.form.setErrors({'conflict' : true});
      } else if (d?.status === 200) {
        this.signupForm.form.setErrors({'success' : true});
        (<HTMLFormElement>event.target).reset();
        alert("User wiht email " + form.email + " has been creaded successfully, please go to LogIn tab.")
      }
    })
  }

}
