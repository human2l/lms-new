import { UserService } from "./user.service";
import { HttpClient } from "@angular/common/http";
import { Utils } from "../utils/utils";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LessonService {
  private serverUrl: string = "";
  constructor(private http: HttpClient, private userService: UserService) {
    this.serverUrl = Utils.serverUrl;
  }

  //Get current role's lesson. Role can be student or tutor
  getCurrentLessons() {
    return this.http
      .get(
        this.serverUrl + "lms/lessons?role="+this.userService.getCurrentRole().toLowerCase()+"&roleId=" + this.userService.getCurrentUser().roleId
      )
      .pipe(
        map(responseData => {
          const currentLessons = responseData;
          return currentLessons;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  //Get ALL lessons in database.
  getAllLessons() {
    return this.http.get(this.serverUrl + "lms/lessons").pipe(
      map(responseData => {
        const allLessons = responseData;
        return allLessons;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  //Get all lessons belong to one specific course
  getAllLessonsOfOneCourse(course) {
    const id = Utils.getIdFromLink(course);
    return this.http
      .get(this.serverUrl + "lms/courses/" + id + "/lessons")
      .pipe(
        map(responseData => {
          const currentLessons = responseData["_embedded"]["lessons"];
          return currentLessons;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  //input: lesson id
  //Add one lesson to the current user's lesson list
  addOneLessonToCurrentLessonsById(id: number) {
    return this.http.post(
      this.serverUrl +
        "lms/" +
        this.userService.getCurrentRole().toLowerCase() +
        "s/" +
        this.userService.getCurrentUser().roleId +
        "/lessons",
      this.serverUrl + "lms/lessons/" + id,
      Utils.manyToManyHttpOptions
    );
  }

  //Clear up all current lessons from one specific role
  removeAllCurrentLessons() {
    return this.http.put(
      this.serverUrl +
        "lms/" +
        this.userService.getCurrentRole().toLowerCase() +
        "s/" +
        this.userService.getCurrentUser().roleId +
        "/lessons",
      Utils.manyToManyHttpOptions
    );
  }

  //Remove one lesson from current user's lesson list
  removeOneOfCurrentLessonsById(id: number) {
    return this.http.delete(
      this.serverUrl +
        "lms/" +
        this.userService.getCurrentRole().toLowerCase() +
        "s/" +
        this.userService.getCurrentUser().roleId +
        "/lessons/" +
        id
    );
  }

  //Add or Update a lesson to database
  addOrUpdateLesson(lesson, courseTitle, tutorId){
    return this.http.post(this.serverUrl + "lms/lessons?courseTitle=" + courseTitle + "&tutorId=" + tutorId,lesson);
  }

  //Remove one lesson from database
  delete(lesson){
    return this.http.delete(
      this.serverUrl+"lms/lessons/" + lesson.id
    ).pipe(
      catchError(
        errorRes => {
          return throwError(errorRes);
        }
      )
    )
  }
}
