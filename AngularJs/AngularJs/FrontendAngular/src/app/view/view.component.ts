import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service:ApiServiceService) { }
data:any;
success:any;
  ngOnInit(): void {
   this.alldata();
    
  }

  deleteId(id:any)
  {
    console.log(id);
    this.service.deleteRecord(id).subscribe((res)=>{

      console.log(res,'deleted');
      this.alldata();
    
    })
    
    
  }

  alldata()
  {
    this.service.getStudent().subscribe((res)=>
    {
      console.log(res);
      this.data=res.data;
    });
  }

}
