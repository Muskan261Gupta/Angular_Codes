import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import {ApiServiceService} from '../api-service.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:ApiServiceService,private router : ActivatedRoute,private _router:Router) { }
errmssg:any;
succes:any;
getparamid:any;
  ngOnInit(): void {
    //console.log(this.router.snapshot.paramMap.get('id'),'getid');
    this.getparamid=this.router.snapshot.paramMap.get('id');
    this.service.getSingleData(this.getparamid).subscribe((res)=>
    {
console.log(res);
this.addRecord.patchValue({
  rollno:res.data[0].rollno,
  name:res.data[0].name,
  DOB:res.data[0].DOB,
  marks:res.data[0].marks
})
    });
  }

  addRecord= new FormGroup({
    'rollno':new FormControl('',Validators.required),
  'name':new FormControl('',Validators.required),
    'DOB':new FormControl('',Validators.required),
    'marks':new FormControl('',Validators.required)
      });

      SubmitRecord(){
          if(this.addRecord.valid)
          {
          this.service.addData(this.addRecord.value).subscribe((res)=>
          {console.log(res);
            this.addRecord.reset;
            this.succes='inserted';
            this._router.navigateByUrl('login/teacher-login/view')

          
          })
            }
          
          else
          this.errmssg='all fields are required'
        }

        Update()
        {

          console.log(this.addRecord.value);
          if(this.addRecord.valid)
          {
            this.service.updateRecord(this.addRecord.value,this.getparamid).subscribe((res)=>{
console.log("done");
            })
          }
        }
      }


