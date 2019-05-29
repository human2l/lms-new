import { LmsService } from './../../service/lms.service';
import { Lesson } from './../../shared/models/lesson.model';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[LmsService]
})
export class DashboardComponent implements OnInit {
  currentCourse:Course;
  currentLessons:{id:number,title:string,description:string,start_date:string,end_date:string}[]=[];
  constructor(private lmsService: LmsService) { }

  ngOnInit() {
    // var lessona: Lesson = {id:1,title:"a",description:"a", start_date:"a",end_date:"a"};
    // var lessonb: Lesson = {id:1,title:"b",description:"b", start_date:"b",end_date:"b"};
    // var lessonc: Lesson = {id:1,title:"c",description:"c", start_date:"c",end_date:"c"};
    // this.lessons.push(lessona);
    // this.lessons.push(lessonb);
    // this.lessons.push(lessonc);
    this.currentCourse = this.lmsService.getCurrentCourse();
    this.currentLessons = this.lmsService.getCurrentLessons();
  }

}
