import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usersCount: number | undefined;
  productCount: number | undefined;
  reviewDount: number | undefined;

  constructor(private restAPI: RestApiService) { }
  
  updateStats() {
    this.restAPI.getUsersCountAPI().subscribe(d => {
      this.usersCount = <number>d;
    });

    this.restAPI.getProdCountAPI().subscribe(d => {
      this.productCount = <number>d;
    });

    this.restAPI.getReviewCountAPI().subscribe(d => {
      this.reviewDount = <number>d;
    })
  }

  ngOnInit(): void {
    this.updateStats();
    setInterval(this.updateStats.bind(this), 5000);
  }

}
