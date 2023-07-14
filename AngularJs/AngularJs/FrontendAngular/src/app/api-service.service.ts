import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  //apiUrl='http://localhost:3002/Student';
  getStudent():Observable<any>
  {
    return this.http.get('/api/Student');
    // '${this.apiUrl}''/api/Student'
  }

  getteacher(data:any):Observable<any>
  {
    console.log(data.username);
    return this.http.get('/api/Teacher/'+data.username);
  }

  addData(data:any):Observable<any>
  {

    return this.http.post('/api/Student',data);
  }

  deleteRecord(id:any):Observable<any>
  {
    let ids=id;
return this.http.delete('/api/Student/'+ids);
  }

  updateRecord(data:any,id:any):Observable<any>
  {
    let ids=id;
    return this.http.put('/api/Student/'+ids,data);
  }

  getSingleData(id:any):Observable<any>
  {
    let ids=id;
    return this.http.get('/api/Student/'+ids);
  }

  getSingleDatas(data:any):Observable<any>
  {
    let ids=data.rollno;
    return this.http.get('/api/Student/'+ids);
  }
}
