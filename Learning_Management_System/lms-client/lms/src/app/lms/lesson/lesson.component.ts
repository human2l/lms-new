import { LmsService } from './../../service/lms.service';
import { Lesson } from './../../shared/models/lesson.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  providers: [LmsService]
})
export class LessonComponent implements OnInit {
  currentRole: string = null;
  //updated to the details which belong to the user clicked lesson
  details="";
  modalRef: BsModalRef;
  allLessons: Lesson[] = [];
  currentLessons: Lesson[] = [];

  lessonHeader = ['ID', 'Title', 'Start Date', 'End Date', 'Options'];
  
  constructor(private modalService: BsModalService, private lmsService: LmsService) { }

  ngOnInit() {
    this.currentRole = this.lmsService.getCurrentRole();
    this.allLessons = this.lmsService.getAllLessons();
    this.currentLessons = this.lmsService.getCurrentLessons();
    console.log(this.lmsService.getCurrentUser());
  }

  hasLesson(lesson: Lesson){
    for(let l of this.currentLessons){
      if(lesson.id === l.id){
        return true;
      }
    }
    return false;
  }

  canEdit(lesson: Lesson){
    return this.currentRole === "tutor"||this.currentRole === "admin";
  }

  showDetails(template: TemplateRef<any>, lesson: Lesson) {
    this.modalRef = this.modalService.show(template);
    this.details = lesson.description;
  }

  add(lesson: Lesson){
    //no need to update currentLessons in lmsService, it is auto double bind, which is weird
    this.lmsService.getCurrentLessons().push(lesson);
    //TODO: http
  }

  delete(lesson: Lesson){
    const index: number = this.currentLessons.indexOf(lesson);
    if (index !== -1) {
        this.currentLessons.splice(index, 1);
    } 
    //TODO: http
  }
}

