import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { ApiServiceService } from './api-service.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';  

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    LoginComponent,
    ViewComponent,
    AddComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
