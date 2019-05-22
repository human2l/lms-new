import { DashboardComponent } from './lms/dashboard/dashboard.component';
import { LessonComponent } from './lms/lesson/lesson.component';
import { CourseComponent } from './lms/course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LmsComponent } from './lms/lms.component';
import { PageNotFoundComponent } from './lms/page-not-found/page-not-found.component';
import { PersonnelComponent } from './lms/personnel/personnel.component';
import { ProfileComponent } from './lms/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LmsComponent,
    CourseComponent,
    LessonComponent,
    PageNotFoundComponent,
    PersonnelComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
