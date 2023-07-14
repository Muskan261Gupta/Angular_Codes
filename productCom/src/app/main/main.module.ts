import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthModule } from '../user-auth/user-auth.module';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserAuthModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
