import { Lesson } from './../../shared/models/lesson.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  //updated to the details which belong to the user clicked lesson
  details="";
  modalRef: BsModalRef;
  lessons = [];

  lessonHeader = ['ID', 'Title', 'Start Date', 'End Date', 'Options'];
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    //TODO: set lessons to all lessons we have
    var lesson1: Lesson = {id:1,title:'title1',description:'des1', start_date:'sd1', end_date:'ed1'};
    var lesson2: Lesson = {id:2,title:'title2',description:'des2', start_date:'sd2', end_date:'ed2'}
    this.lessons.push(lesson1);
    this.lessons.push(lesson2);
  }

  //TODO
  checked(){
    return true;
  }

  hasLesson(lesson: Lesson){
    //TODO: check if the student has this lesson
    // console.log(lesson);
    return lesson.id === 1;
  }

  showDetails(template: TemplateRef<any>, lesson: Lesson) {
    this.modalRef = this.modalService.show(template);
    this.details = lesson.description;
  }
}

