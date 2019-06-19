import { LessonService } from "./../../../service/lesson.service";
import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { DateFormatPipe } from "src/app/utils/date-format-pipe";
import { Utils } from "src/app/utils/utils";
import { throwError } from 'rxjs';

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
  constructor(
    private dateFormatPipe: DateFormatPipe,
    private lessonService: LessonService
  ) {}

  ngOnInit() {
    if (this.editLesson !== null) {
      // this.editLesson.id = Utils.getIdFromLink(this.editLesson);
      this.title = this.editLesson.title;
      const startDate = new Date(this.editLesson.startDate);
      const endDate = new Date(this.editLesson.endDate);
      this.bsRangeValue.push(startDate, endDate);
      this.description = this.editLesson.description;
    }
  }

  onSaveLesson() {
    this.lessonService.updateLesson({
      id:this.editLesson !== null?Utils.getIdFromLink(this.editLesson):0,
      title: this.title,
      startDate: this.dateFormatPipe.transform(this.bsRangeValue[0]),
      endDate: this.dateFormatPipe.transform(this.bsRangeValue[1]),
      description: this.description
    }).subscribe(
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
