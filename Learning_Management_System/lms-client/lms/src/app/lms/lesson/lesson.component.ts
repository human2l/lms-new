import { UserService } from "./../../service/user.service";
import { CourseService } from "./../../service/course.service";
import { LessonService } from "./../../service/lesson.service";
import { Utils } from "./../../utils/utils";
import { LmsService } from "./../../service/lms.service";
// import { Lesson } from './../../shared/models/lesson.model';
import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"],
  providers: [LmsService]
})
export class LessonComponent implements OnInit {
  error = null;
  currentRole: string = null;
  //updated to the details which belong to the user clicked lesson
  details = "";
  modalRef: BsModalRef;
  //allLessons is all of the lessons available under currentCourse
  allLessons: [] = [];
  currentLessons: [] = [];
  currentCourse = null;
  loadingCourse = true;
  loadingLesson = true;

  lessonHeader = ["Title", "Start Date", "End Date", "Options"];

  constructor(
    private modalService: BsModalService,
    private lmsService: LmsService,
    private http: HttpClient,
    private lessonService: LessonService,
    private courseService: CourseService,
    private userService: UserService
  ) {}

  ngOnInit() {
    //TODO: fetch currentRole
    this.currentRole = this.userService.getCurrentRole();
    switch (this.currentRole) {
      case "student":
        this.fetchCurrentCourse();
        this.fetchAllLessons();
        this.fetchCurrentLessons();
        break;
      case "tutor":
        this.fetchCurrentLessons();
        this.allLessons = this.currentLessons;
        break;
      case "admin":
        this.fetchAllLessons();
        break;
      default:
        break;
    }
    //TODO: when tutor click delete
  }

  hasLesson(lesson) {
    for (let l of this.currentLessons) {
      if (lesson.title === l["title"]) {
        return true;
      }
    }
    return false;
  }

  canEdit(lesson) {
    return this.currentRole === "tutor" || this.currentRole === "admin";
  }

  showDetails(template: TemplateRef<any>, lesson) {
    this.modalRef = this.modalService.show(template);
    this.details = lesson.description;
  }

  add(lesson) {
    const lessonId = Utils.getIdFromLink(lesson);
    this.lessonService.addOneLessonToCurrentLessonsById(lessonId).subscribe(
      () => {
        this.fetchCurrentLessons();
      },
      error => {
        this.error = error.message;
      }
    );
  }

  delete(lesson) {
    const lessonId = Utils.getIdFromLink(lesson);
    this.lessonService.deleteOneOfCurrentLessonsById(lessonId).subscribe(
      () => {
        this.fetchCurrentLessons();
      },
      error => {
        this.error = error.message;
      }
    );
  }

  fetchAllLessons() {
    if (this.currentRole === "tutor") {
      this.lessonService.getAllLessons().subscribe(
        allLessons => {
          this.allLessons = allLessons;
        },
        error => {
          this.error = error.message;
        }
      );
    } else {
      this.courseService.getCurrentCourse().subscribe(
        currentCourse => {
          this.currentCourse = currentCourse;
          this.lessonService.getAllLessonsOfOneCourse(currentCourse).subscribe(
            allLessons => {
              this.allLessons = allLessons;
            },
            error => {
              this.error = error.message;
            }
          );
        },
        error => {
          this.error = error.message;
        }
      );
    }
  }

  fetchCurrentLessons() {
    if (this.currentRole === "tutor") {
      this.lessonService.getTutorLessons().subscribe(
        currentLessons => {
          this.currentLessons = currentLessons;
          this.allLessons = currentLessons;
        },
        error => {
          this.error = error.message;
        }
      );
    } else {
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

  fetchCurrentCourse() {
    this.courseService.getCurrentCourse().subscribe(
      currentCourse => {
        this.currentCourse = currentCourse;
        this.loadingCourse = false;
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
