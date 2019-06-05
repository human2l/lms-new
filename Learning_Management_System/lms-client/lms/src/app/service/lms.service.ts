import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Course } from "../shared/models/course.model";
// import { Lesson } from "../shared/models/lesson.model";

import { map, catchError, concatMap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Utils } from "../utils/utils";
import { LessonService } from './lesson.service';
import { CourseService } from './course.service';

@Injectable({ providedIn: "root" })
export class LmsService {
  private serverUrl: string = "";
  error = new Subject<string>();
  private currentRole: string = null;

  

  constructor(private http: HttpClient, private lessonService:LessonService, private courseService:CourseService, private userService:UserService) {
    this.serverUrl = Utils.serverUrl;
  }

  //TODO: change password method





}
