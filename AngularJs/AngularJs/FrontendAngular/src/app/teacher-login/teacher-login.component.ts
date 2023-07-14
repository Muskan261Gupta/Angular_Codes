import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private service:ApiServiceService,private _router:Router,private router : ActivatedRoute) { }
errormsg:any;
data:any;
  ngOnInit(): void {

    // this.service.getStudent().subscribe((res)=>
    // {
    //   console.log(res);
    // })
  }
  techerValidation= new FormGroup({
'username':new FormControl('',Validators.required),
'password':new FormControl('',Validators.required)
  });


  teacherSubmit(){
    if(this.techerValidation.valid)
{console.log(this.techerValidation.value);
this.service.getteacher(this.techerValidation.value).subscribe((res)=>
{//console.log(res);
  this.data=res.data;
  if(this.data.length==0)
  {this._router.navigateByUrl('/login')}
  else
  this._router.navigate(['login/teacher-login/view'])

})
  }

else
this.errormsg='all fields are required'
  }

}
