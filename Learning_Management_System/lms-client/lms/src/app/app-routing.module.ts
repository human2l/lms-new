import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from "./lms/profile/profile.component";
import { LessonComponent } from "./lms/lesson/lesson.component";
import { CourseComponent } from "./lms/course/course.component";
import { DashboardComponent } from "./lms/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LmsComponent } from './lms/lms.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  {
    path: "lms",
    component: LmsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "course", component: CourseComponent },
      { path: "lesson", component: LessonComponent },
      { path: "profile", component: ProfileComponent },
      { path: "logout", redirectTo: "/auth/login" }
    ]
  },
  { path: "auth",
    component: AuthComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]},
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "page-not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
