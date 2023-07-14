import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { MainComponent } from './main/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './products/dashboard/dashboard.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
    canActivate: [AuthGuardService]
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductComponent
      },
      {
        path: ':productCode',
        component: DashboardComponent
      }
    ],
    canActivate: [AuthGuardService]
  },
  {
    component: NotFoundComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
