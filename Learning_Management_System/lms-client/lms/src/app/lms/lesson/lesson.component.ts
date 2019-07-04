import { UserService } from "./../../service/user.service";
import { CourseService } from "./../../service/course.service";
import { LessonService } from "./../../service/lesson.service";
import { Utils } from "./../../utils/utils";
import { LmsService } from "./../../service/lms.service";
// import { Lesson } from './../../shared/models/lesson.model';
import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

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
  allLessons;
  currentLessons;
  editLesson = null;
  currentCourse = null;
  loadingCourse = true;
  loadingLesson = true;
  canAdd = false;
  canRemove = false;
  canCreate = false;
  canEdit = false;
  canDelete = false;
  editing = false;

  lessonHeader = ["Title", "Start Date", "End Date", "Options"];

  constructor(
    private modalService: BsModalService,
    private lmsService: LmsService,
    private http: HttpClient,
    private lessonService: LessonService,
    private courseService: CourseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
      this.currentRole = this.userService.getCurrentRole();
      this.fetchData();
    //TODO: when tutor click delete
  }

  fetchData(){
    switch (this.currentRole) {
      case "Student":
        this.fetchCurrentCourse();
        this.fetchAllLessons();
        this.fetchCurrentLessons();
        this.canRemove = true;
        this.canAdd = true;
        break;
      case "Tutor":
        this.fetchCurrentLessons();
        this.canCreate = true;
        this.canEdit = true;
        this.canDelete = true;
        break;
      case "Admin":
        this.fetchAllLessons();
        break;
      default:
        break;
  }
  }

  hasLesson(lesson) {
    for (let l of this.currentLessons) {
      if (lesson.title === l["title"]) {
        return true;
      }
    }
    return false;
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

  remove(lesson) {
    const lessonId = Utils.getIdFromLink(lesson);
    this.lessonService.removeOneOfCurrentLessonsById(lessonId).subscribe(
      () => {
        this.fetchCurrentLessons();
      },
      error => {
        this.error = error.message;
      }
    );
  }

  createNewLesson(){
    this.editLesson = null;
    this.editing = true;
  }

  edit(lesson){
    this.editLesson = lesson;
    this.editing = true;
  }

  onLessonSaved(){
    this.fetchData();
    this.editing = false;
    
  }

  fetchAllLessons() {
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

  fetchCurrentLessons() {
      this.lessonService.getCurrentLessons().subscribe(
        currentLessons => {
          this.currentLessons = currentLessons;
          if(this.currentRole === "Tutor"){
            this.allLessons = currentLessons;
          }
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
        this.loadingCourse = false;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  delete(lesson){
    this.lessonService.delete(lesson).subscribe(
      successRes =>{
        this.fetchCurrentLessons();
      },
      error => {
        this.error = error;
      }
    )
  }
}
