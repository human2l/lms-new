import { CourseService } from './../../service/course.service';
import { LessonService } from './../../service/lesson.service';
import { LmsService } from "./../../service/lms.service";
// import { Lesson } from './../../shared/models/lesson.model';
import { Component, OnInit } from "@angular/core";
// import { Course } from 'src/app/shared/models/course.model';

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
  currentLessons: [] = [];
  constructor(private lmsService: LmsService, private lessonService:LessonService, private courseService:CourseService) {}

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
        this.error = error;
      }
    );
  }

  fetchCurrentLessons() {
    this.lessonService.getCurrentLessons().subscribe(
      currentLessons => {
        this.currentLessons = currentLessons;
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
