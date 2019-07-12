import { UserService } from "./../../service/user.service";
import { CourseService } from "./../../service/course.service";
import { LessonService } from "./../../service/lesson.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  error = null;
  loading = true;
  currentCourse = null;
  currentLessons = null;
  showCourse = false;
  showLesson = false;
  constructor(
    private lessonService: LessonService,
    private courseService: CourseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    switch (this.userService.getCurrentRole()) {
      case "Student":
        this.fetchCurrentCourse();
        this.fetchCurrentLessons();
        break;
      case "Tutor":
        this.fetchCurrentLessons();
        break;
      // case "Admin":
      //   break;
      default:
        break;
    }
  }

  fetchCurrentCourse() {
    this.showCourse = true;
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
    this.showLesson = true;
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
