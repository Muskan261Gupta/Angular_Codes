import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service:ApiServiceService,private router : ActivatedRoute, private _router:Router) { }
  getrollno:any;
  data:any;
  ngOnInit(): void {
    this.getrollno=this.router.snapshot.paramMap.get('id');
    if(this.getrollno==null)
    {this._router.navigate(['/login'])}
    this.service.getSingleData(this.getrollno).subscribe((res)=>{
      this.data=res.data;
      if(this.data.length==0)
      {this._router.navigate(['/login'])}
    })
  }

}
