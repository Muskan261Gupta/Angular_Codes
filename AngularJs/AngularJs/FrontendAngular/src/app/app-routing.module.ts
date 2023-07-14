import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {

    path:'',

    redirectTo:'/login',

    pathMatch:'full'

  },
    {path:'login/teacher-login',component:TeacherLoginComponent},
    {path:'login/student-login',component:StudentLoginComponent},
    {path:'login',component:LoginComponent},
    {path:'login/teacher-login/view',component:ViewComponent},
    {path:'login/teacher-login/view/add',component:AddComponent},
    {path:'login/teacher-login/view/add/:id',component:AddComponent},
    {path:'login/student-login/result/:id',component:ResultComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
