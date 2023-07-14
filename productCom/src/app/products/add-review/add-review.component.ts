import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/models/Review';
import { RestApiService } from 'src/app/rest-api.service';
import Utils from 'src/app/utils';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private restAPI: RestApiService) { }

  ngOnInit(): void {
  }

  @Input()
  showReviewForm = 'none';

  @Input()
  productCode: string;

  @Output()
  loadReview: EventEmitter<any> = new EventEmitter();

  @ViewChild('reviewForm')
  reviewForm: NgForm;

  reviewSubmit(review: Review, event: Event) {
    review['product_code'] = this.productCode;
    review['user_email'] = Utils.getEmail();
    review.rating = this.ratingValue;
    if (this.reviewForm.invalid) {
      return;
    }
    this.restAPI.addReviewAPI(review).subscribe(d => {
      d = d[0];
      if (d?.status === 400) {
        this.reviewForm.form.setErrors({'badError' : true});
      } else if (d?.status === 200) {
        this.reviewForm.form.setErrors({'success' : true});
        this.reviewCancel('none');
        this.loadReview.emit(this.productCode);
        (<HTMLFormElement>event.target).reset();
      }
    });
  }

  reviewCancel(toggle: string) {
    this.showReviewForm = toggle;
  }

  ratingValue = 3;
  ratingText = ['Very Poor', 'Poor', 'Average', 'Good', 'Excelent'];
  changerating(event: Event) {
    this.ratingValue = Number.parseInt((<HTMLInputElement>event.target).value);
  }
}
