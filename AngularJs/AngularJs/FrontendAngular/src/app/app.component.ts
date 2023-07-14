import { Component , OnInit} from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private service: ApiServiceService)
  {

  }
  mydata:any;
  buttonShow:any;
  ngOnInit(){
    this.getStudentFromAPI();
  }

  getStudentFromAPI()
  {

this.service.getStudent().subscribe((res)=>{
  console.log(res)
}
,(error)=>{
console.log(error);
}
)}


}

