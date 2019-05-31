import { Utils } from './../../utils/utils';
import { LmsService } from './../../service/lms.service';
// import { Lesson } from './../../shared/models/lesson.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  providers: [LmsService]
})
export class LessonComponent implements OnInit {
  error = null;
  currentRole: string = null;
  //updated to the details which belong to the user clicked lesson
  details="";
  modalRef: BsModalRef;
  allLessons: [] = [];
  currentLessons: [] = [];
  currentCourse = null;

  lessonHeader = ['Title', 'Start Date', 'End Date', 'Options'];
  
  constructor(private modalService: BsModalService, private lmsService: LmsService, private http:HttpClient) { }

  ngOnInit() {
    this.currentRole = this.lmsService.getCurrentRole();
    this.fetchCurrentCourse();
    this.fetchAllLessons();
    this.fetchCurrentLessons();
  }

  hasLesson(lesson){
    for(let l of this.currentLessons){
      if(lesson.title === l["title"]){
        return true;
      }
    }
    return false;
  }

  canEdit(lesson){
    return this.currentRole === "tutor"||this.currentRole === "admin";
  }

  showDetails(template: TemplateRef<any>, lesson) {
    this.modalRef = this.modalService.show(template);
    this.details = lesson.description;
  }

  add(lesson){
    const lessonId = Utils.getIdFromLink(lesson);
    this.lmsService.addOneLessonToCurrentLessonsById(lessonId).subscribe(
      () => {
        this.fetchCurrentLessons();
      },
      error => {
        this.error = error.message;
      }
    )
  }

  delete(lesson){
    const lessonId = Utils.getIdFromLink(lesson);
    this.lmsService.deleteOneOfCurrentLessonsById(lessonId).subscribe(
      () => {
        this.fetchCurrentLessons();
      },
      error => {
        this.error = error.message;
      }
    )
  }

  // fetchAllLessons(){
  //   this.lmsService.getAllLessons().subscribe(
  //     allLessons => {
  //       this.allLessons = allLessons;
  //       },
  //       error => {
  //         this.error = error.message;
  //       }
  //   )
  // }

  fetchAllLessons(){
    // if(this.currentCourse != null){
      console.log(this.lmsService.getAllLessonsOfCurrentCourse());
      // this.lmsService.getAllLessonsOfCurrentCourse().subscribe(
      //   currentLessons => {
      //     this.currentLessons = currentLessons;
      //     },
      //     error => {
      //       this.error = error.message;
      //     }
      // )
    // }
    
  }

  fetchCurrentLessons(){
    this.lmsService.getCurrentLessons().subscribe(
      currentLessons => {
        this.currentLessons = currentLessons;
        },
        error => {
          this.error = error.message;
        }
    )
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

