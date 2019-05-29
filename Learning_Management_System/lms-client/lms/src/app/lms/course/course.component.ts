import { LmsService } from './../../service/lms.service';
import { Course } from './../../shared/models/course.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[LmsService]
})
export class CourseComponent implements OnInit {
  isCollapsed = true;
  allCourses = [];
  selectedCourse: Course = null;
  currentCourse: Course = null;
  constructor(private lmsService: LmsService) { }

  ngOnInit() {
    this.allCourses = this.lmsService.getAllCourses();
    this.currentCourse = this.lmsService.getCurrentCourse();
  }

  onSelectCourse(course: Course){
    this.isCollapsed = false;
    this.selectedCourse = course;
  }

  hasCourse(){
    return this.selectedCourse === this.currentCourse;
  }

  onSaveCourse(){
    this.currentCourse = this.selectedCourse;
    this.lmsService.setCurrentCourse(this.currentCourse);
    //TODO: http
  }

  isAdmin(){
    return this.lmsService.getCurrentRole() === "admin";
  }

  onEdit(){
    //TODO: edit the course selected
  }
}
