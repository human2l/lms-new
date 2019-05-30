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

  lessonHeader = ['Title', 'Start Date', 'End Date', 'Options'];
  
  constructor(private modalService: BsModalService, private lmsService: LmsService, private http:HttpClient) { }

  ngOnInit() {
    this.currentRole = this.lmsService.getCurrentRole();
    this.fetchAllLessons();
    // this.allLessons = this.lmsService.getAllLessons();
    this.fetchCurrentLessons();
    // this.currentLessons = this.lmsService.getCurrentLessons();
    // console.log(this.lmsService.getCurrentUser());


    //for test
    // this.http
    //     .get(
    //         'http://localhost:8080/lms/lessons'
    //     )
    //     .subscribe(responseData => {
    //         console.log(responseData);
    //     });
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
    //no need to update currentLessons in lmsService, it is auto double bind, which is weird

    //TODO: uncomment
    // this.lmsService.getCurrentLessons().push(lesson);

    //TODO: http
  }

  delete(lesson){
    console.log(lesson);
    const lessonId = Utils.getIdFromLink(lesson["_links"]["self"]["href"]);
    console.log(lesson["_links"]["self"]["href"]);
    this.lmsService.deleteOneOfCurrentLessonsById(lessonId).subscribe(
      () => {
        this.fetchCurrentLessons();
      }
    )
  }

  fetchAllLessons(){
    this.lmsService.getAllLessons().subscribe(
      allLessons => {
        this.allLessons = allLessons;
        console.log(allLessons);
        },
        error => {
          this.error = error.message;
        }
    )
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
}

