import { LmsComponent } from './lms/lms.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './lms/dashboard/dashboard.component';
import { CourseComponent } from './lms/course/course.component';
import { LessonComponent } from './lms/lesson/lesson.component';
// import {
//   NbAuthComponent,
//   NbLoginComponent,
//   NbLogoutComponent,
//   NbRegisterComponent,
//   NbRequestPasswordComponent,
//   NbResetPasswordComponent,
// } from '@nebular/auth';
// import { APP_ROOT } from '@angular/core/src/di/scope';

const routes: Routes = [
  { path: '', redirectTo:'/lms', pathMatch:'full'}, 
  { path: 'lms', component: LmsComponent, children: [
      { path: 'dashboard', component: DashboardComponent}, 
      { path: 'course', component: CourseComponent}, 
      { path: 'lesson', component: LessonComponent}, 
  ]}, 
  
  // { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })

    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
