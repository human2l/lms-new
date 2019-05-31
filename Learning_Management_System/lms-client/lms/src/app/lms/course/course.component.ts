import { LmsService } from "./../../service/lms.service";
// import { Course } from './../../shared/models/course.model';
import { Component, OnInit } from "@angular/core";
import { Utils } from "src/app/utils/utils";

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
  constructor(private lmsService: LmsService) {}

  ngOnInit() {
    this.fetchAllCourses();
    this.fetchCurrentCourse();
  }

  onSelectCourse(course) {
    this.isCollapsed = false;
    this.selectedCourse = course;
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
    this.lmsService
      .setCurrentCourseById(Utils.getIdFromLink(this.selectedCourse))
      .subscribe(() => {
        this.fetchCurrentCourse();
      });
  }

  isAdmin() {
    return this.lmsService.getCurrentRole() === "admin";
  }

  onEdit() {
    //TODO: edit the course selected
  }

  fetchAllCourses() {
    this.lmsService.getAllCourses().subscribe(
      allCourses => {
        this.allCourses = allCourses;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  fetchCurrentCourse() {
    this.lmsService.getCurrentCourse().subscribe(
      currentCourse => {
        this.currentCourse = currentCourse;
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
