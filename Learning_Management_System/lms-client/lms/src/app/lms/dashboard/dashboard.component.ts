import { UserService } from "./../../service/user.service";
import { CourseService } from "./../../service/course.service";
import { LessonService } from "./../../service/lesson.service";
import { LmsService } from "./../../service/lms.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [LmsService]
})
export class DashboardComponent implements OnInit {
  error = null;
  loading = true;
  currentCourse = null;
  currentLessons = null;
  constructor(
    private lmsService: LmsService,
    private lessonService: LessonService,
    private courseService: CourseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchCurrentCourse();
    this.fetchCurrentLessons();
  }

  fetchCurrentCourse() {
    this.courseService.getCurrentCourse().subscribe(
      currentCourse => {
        this.currentCourse = currentCourse;
        this.loading = false;
      },
      error => {
        if (error.error.message === "Not Found") {
          this.currentCourse = null;
          this.loading = false;
        }
        this.error = error;
      }
    );
  }

  fetchCurrentLessons() {
    this.lessonService.getCurrentLessons().subscribe(
      currentLessons => {
        this.currentLessons = currentLessons;
        this.loading = false;
      },
      error => {
        if (error.error.message === "Not Found") {
          this.currentCourse = null;
          this.loading = false;
        }
        this.error = error.message;
      }
    );
  }
}
