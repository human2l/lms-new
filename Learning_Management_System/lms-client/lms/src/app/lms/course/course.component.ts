import { Course } from './../../shared/models/course.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  isCollapsed = true;
  courses = [];
  selectedCourse: Course = null;
  currentCourse: Course = null;
  constructor() { }

  ngOnInit() {
    var course1: Course = {id:1, title:'title1', description:'des1'};
    var course2: Course = {id:2, title:'title2', description:'des2'};
    var course3: Course = {id:3, title:'title3', description:'des3'};
    var course4: Course = {id:4, title:'title4', description:'des4'};
    this.courses.push(course1,course2,course3,course4);
    
    this.currentCourse = course1;
  }

  onSelectCourse(course: Course){
    this.isCollapsed = false;
    this.selectedCourse = course;
  }

  hasCourse(){
    return this.selectedCourse === this.currentCourse;
  }

  onSaveCourse(){
    //TODO: update the course user current has
    this.currentCourse = this.selectedCourse;
  }

}
