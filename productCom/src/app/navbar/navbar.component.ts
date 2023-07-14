import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { UserStatusService } from '../user-status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserStatusService]
})
export class NavbarComponent implements OnInit {
  
  constructor(private router: Router, private userStatus: UserStatusService) {}
  
  isLoggedIn: string = sessionStorage.getItem('userToken') !== null ? 'initial' : 'none';

  ngOnInit() {
    this.userStatus.loggedIn().subscribe(d => {
      this.isLoggedIn = d ? 'initial' : 'none';
    });
  }

  logout() {
    this.isLoggedIn = 'none';
    sessionStorage.removeItem('userToken');
    this.router.navigate(['']);
    this.userStatus.setStatus(false);
  }
}
