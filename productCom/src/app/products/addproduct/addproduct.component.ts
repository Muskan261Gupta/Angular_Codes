import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private restAPI: RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

  @Input()
  showProductForm = 'none';

  submitBtnDisabled = false;

  redirectCountdown: number = 30;
  redirectURL: string = "";
  intervalId: any;

  @ViewChild('productForm')
  productForm: NgForm;

  productSubmit(product: Product) {
    if (this.productForm.invalid) {
      return;
    }
    this.restAPI.addProductAPI(product).subscribe(d => {
      d = d[0];
      this.redirectURL = 'products/' + product.code;
      if (d?.status === 400) {
        this.productForm.form.setErrors({'required' : true});
      } else if (d?.status === 409) {
        this.productForm.form.setErrors({'conflict' : true});
        this.intervalId = setInterval(this.countDown.bind(this), 1000);
      } else if (d?.status === 200) {
        this.productForm.form.setErrors({'success' : true});
        this.intervalId = setInterval(this.countDown.bind(this), 1000);
        this.submitBtnDisabled = true;
      }
    });
  }

  productCancel(toggle: string) {
    this.showProductForm = toggle;
    clearInterval(this.intervalId);
    this.redirectCountdown = 30;
  }

  countDown() {
    this.redirectCountdown -= 1;
    if (this.redirectCountdown === 0) {
      clearInterval(this.intervalId);
      this.redirect();
    }
  }

  redirect() {
    this.router.navigate([this.redirectURL]);
  }

}
