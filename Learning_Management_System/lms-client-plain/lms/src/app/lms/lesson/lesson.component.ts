import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  elements: any = [
    {id: 1, title: 'Mark', start_date: 'Otto', end_date: '@mdo'},
    {id: 2, title: 'Jacob', start_date: 'Thornton', end_date: '@fat'},
    {id: 3, title: 'Larry', start_date: 'the Bird', end_date: '@twitter'},
  ];

  headElements = ['ID', 'Title', 'Start Date', 'End Date', 'Options'];
  
  constructor() { }

  ngOnInit() {
  }

  //TODO
  checked(){
    return true;
  }
}
