import { Component, OnInit, ViewChild } from '@angular/core';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  searchQuery = "";

  @ViewChild(ResultComponent)
  result: ResultComponent;

  @ViewChild(AddproductComponent)
  addProduct: AddproductComponent

  ngOnInit(): void {
  }

  openProductForm() {
    this.addProduct.productCancel('flex');
  }

  changeQuery(event: Event) {
    this.searchQuery = (<HTMLInputElement>event.target).value;
    this.result.changeQuery(this.searchQuery);
  }

}
