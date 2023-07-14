import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Review } from 'src/app/models/Review';
import { RestApiService } from 'src/app/rest-api.service';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private restAPI: RestApiService) { }

  @ViewChild(AddReviewComponent)
  addReview: AddReviewComponent


  productCode = this.activeRoute.snapshot.paramMap.get('productCode');
  product: Product;
  review: Review[];
  reviewLength: number;

  ngOnInit(): void {
    this.restAPI.productAPI(this.productCode).subscribe(d => {
      this.product = d;
    })
    this.loadReviewsByProdCode(this.productCode);
  }

  loadReviewsByProdCode(code: string) {
    this.restAPI.getReviewByProdCodeAPI(code).subscribe(d => {
      this.review = d;
      this.reviewLength = this.review.length;
    });
  }

  openReviewForm() {
    this.addReview.reviewCancel('flex');
  }
}
