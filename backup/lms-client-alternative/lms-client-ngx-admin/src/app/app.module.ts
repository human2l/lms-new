import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbUserModule, NbActionsModule, NbContextMenuComponent, NbContextMenuModule, NbContextMenuDirective, NbCardModule } from '@nebular/theme';
import { LmsComponent } from './lms/lms.component';
import { DashboardComponent } from './lms/dashboard/dashboard.component';
import { NbMenuInternalService, NbMenuService } from '@nebular/theme/components/menu/menu.service';
import { CourseComponent } from './lms/course/course.component';
import { LessonComponent } from './lms/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    LmsComponent,
    DashboardComponent,
    CourseComponent,
    LessonComponent
  ],
  imports: [
    NbCardModule,
    NbContextMenuModule,
    NbActionsModule,
    NbUserModule,
    NbMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [
    NbSidebarService,
    NbMenuService,
    NbMenuInternalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
