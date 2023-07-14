import { Component } from '@angular/core';
import { UserStatusService } from './user-status.service';
import Utils from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productCom';

  loggedIn= sessionStorage.getItem('userToken') === null;

  constructor (private userStatus: UserStatusService) {}

  ngOnInit() {
    this.userStatus.setStatus(sessionStorage.getItem('userToken') !== null);
  }
}
