import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private service:ApiServiceService,private router : ActivatedRoute ,private _router:Router) { }
getrollno:any;
data:any;
  ngOnInit(): void {
     //this.getrollno=this.router.snapshot.paramMap.get('id');
  }

  studentValidation= new FormGroup({
    'rollno':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required)
      });

      StudentSubmit()
      {
        //console.log(this.studentValidation.value.rollno);
        if(this.studentValidation.valid)
        {
          this.service.getSingleDatas(this.studentValidation.value).subscribe((res)=>
          {//console.log(res.rollno)
            this.data=res.data;
          if(this.data.length!=0)
           {//console.log(res)
            
            
           
            this.getrollno=this.studentValidation.value.rollno;
            this._router.navigateByUrl('login/student-login/result/'+this.getrollno);

            
            
          }
         else
         {this._router.navigate(['/login'])}
            
          })
        }
      }

}
