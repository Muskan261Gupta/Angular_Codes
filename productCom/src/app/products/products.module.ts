import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ProductComponent } from './product/product.component';
import { MainModule } from '../main/main.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';



@NgModule({
  declarations: [
    ResultComponent,
    ProductComponent,
    AddproductComponent,
    DashboardComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
