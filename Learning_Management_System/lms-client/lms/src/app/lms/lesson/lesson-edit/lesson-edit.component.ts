import { UserService } from './../../../service/user.service';
import { LessonService } from "./../../../service/lesson.service";
import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { DateFormatPipe } from "src/app/utils/date-format-pipe";
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: "app-lesson-edit",
  templateUrl: "./lesson-edit.component.html",
  styleUrls: ["./lesson-edit.component.css"],
  providers: [DateFormatPipe]
})
export class LessonEditComponent implements OnInit {
  @Input() editLesson;
  @Output() editCanceled = new EventEmitter();
  @Output() lessonSaved = new EventEmitter();
  title = "";
  bsRangeValue: Date[] = [];
  description = "";
  error;
  selectedCourse: string;
  allCourses = null;
  loading = true;
  allCoursesStringArray: string[] = [];
  constructor(
    private dateFormatPipe: DateFormatPipe,
    private lessonService: LessonService,
    private courseService:CourseService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(
      responseData => {
        this.allCourses = responseData;
        for(let index in this.allCourses){
          this.allCoursesStringArray.push((this.allCourses[index].title));
        }
        this.loading = false;
      },
      error=>{
        this.error = error;
      }
    )
    if (this.editLesson !== null) {
      this.title = this.editLesson.title;
      const startDate = new Date(this.editLesson.startDate);
      const endDate = new Date(this.editLesson.endDate);
      this.bsRangeValue.push(startDate, endDate);
      this.description = this.editLesson.description;
    }
  }

  courseExist(){
    return this.allCoursesStringArray.includes(this.selectedCourse);
  }

  onSaveLesson() {
    if(!this.courseExist()){
      return;
    }
    this.lessonService.addOrUpdateLesson({
      id:this.editLesson !== null?this.editLesson.id:0,
      title: this.title,
      startDate: this.dateFormatPipe.transform(this.bsRangeValue[0]),
      endDate: this.dateFormatPipe.transform(this.bsRangeValue[1]),
      description: this.description
      //Asume current user is tutor. Might change in the future design
    },this.selectedCourse,this.userService.getCurrentUser().roleId).subscribe(
      responseData =>{
        this.lessonSaved.emit();
      },
      error => {
        this.error = error;
      }
    )
  }

  goBack() {
    this.editCanceled.emit();
  }
}
