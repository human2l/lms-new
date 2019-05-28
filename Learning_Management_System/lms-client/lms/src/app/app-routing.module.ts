import { PersonnelComponent } from "./lms/personnel/personnel.component";
import { ProfileComponent } from "./lms/profile/profile.component";
import { LessonComponent } from "./lms/lesson/lesson.component";
import { CourseComponent } from "./lms/course/course.component";
import { DashboardComponent } from "./lms/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./lms/page-not-found/page-not-found.component";
import { LmsComponent } from './lms/lms.component';

const routes: Routes = [
  { path: "", redirectTo: "lms/dashboard", pathMatch: "full" },
  {
    path: "lms",
    component: LmsComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "course", component: CourseComponent },
      { path: "lesson", component: LessonComponent },
      { path: "personnel", component: PersonnelComponent },
      { path: "profile", component: ProfileComponent },
      { path: "logout", redirectTo: "dashboard" },
      { path: "page-not-found", component: PageNotFoundComponent },
      { path: "**", redirectTo: "page-not-found" }
    ]
  },
  { path: "**", redirectTo: "lms/page-not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
