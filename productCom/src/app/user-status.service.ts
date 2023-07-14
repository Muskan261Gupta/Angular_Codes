import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  private isLoggedIn = new Subject<boolean>();

  constructor() {}

  loggedIn(): Observable<boolean>{
    return this.isLoggedIn.asObservable();
  }

  setStatus(x: boolean) {
    this.isLoggedIn.next(x);
  }
}
