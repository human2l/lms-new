import { UserService } from './../../service/user.service';
import { CourseService } from './../../service/course.service';
import { LessonService } from './../../service/lesson.service';
import { LmsService } from "./../../service/lms.service";
import { Component, OnInit } from "@angular/core";
import { Utils } from "src/app/utils/utils";
import { Router } from '@angular/router';

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
  providers: [LmsService]
})
export class CourseComponent implements OnInit {
  error = null;
  isCollapsed = true;
  allCourses = [];
  selectedCourse = null;
  currentCourse = null;
  alerting = false;
  // canAdd = false;
  currentRole = "";
  constructor(private lmsService: LmsService, private lessonService:LessonService, private courseService: CourseService, private userService:UserService,private router:Router) {}

  ngOnInit() {
    //TODO fetch currentrole, subscribe => if student => fetch current course
    this.fetchCurrentRole();
    this.fetchAllCourses();
    if(this.currentRole === "Student")
    this.fetchCurrentCourse();
    //need to modify when use http
    // this.canAdd = this.userService.getCurrentRole() !== "student";
  }

  onSelectCourse(course) {
    this.isCollapsed = false;
    this.selectedCourse = course;
    this.alerting = false;
  }

  hasCourse() {
    return Utils.areSame(this.currentCourse, this.selectedCourse);
  }

  isCurrentCourse(course) {
    return (
      this.currentCourse !== null && Utils.areSame(course, this.currentCourse)
    );
  }

  isSelectedCourse(course) {
    return (
      this.selectedCourse !== null && Utils.areSame(course, this.selectedCourse)
    );
  }

  onSaveCourse() {
    this.deleteAllCurrentLessons();
    this.courseService
      .setCurrentCourseById(Utils.getIdFromLink(this.selectedCourse))
      .subscribe(() => {
        this.fetchCurrentCourse();
      });
      this.alerting = false;
  }

  isAdmin() {
    return this.userService.getCurrentRole() === "admin";
  }

  onEdit() {
    //TODO: edit the course selected
  }

  fetchAllCourses() {
    this.courseService.getAllCourses().subscribe(
      allCourses => {
        this.allCourses = allCourses;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  fetchCurrentCourse() {
    this.courseService.getCurrentCourse().subscribe(
      currentCourse => {
        this.currentCourse = currentCourse;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  fetchCurrentRole(){
    //TODO:modify
    this.currentRole = this.userService.getCurrentRole();
  }

  deleteAllCurrentLessons(){
    this.lessonService.removeAllCurrentLessons().subscribe(
      ()=> console.log("deleted")
    )
  }
}
