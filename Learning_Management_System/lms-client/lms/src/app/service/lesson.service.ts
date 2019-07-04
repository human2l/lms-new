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

  getCurrentLessons() {
    console.log(this.serverUrl + "lms/lessons?role="+this.userService.getCurrentRole().toLowerCase()+"&roleId=" + this.userService.getCurrentUser().roleId);
    return this.http
      .get(
        // this.serverUrl +
        //   "lms/" +
        //   this.userService.getCurrentRole().toLowerCase() +
        //   "s/" +
        //   this.userService.getCurrentUser().roleId +
        //   "/lessons"
        this.serverUrl + "lms/lessons?role="+this.userService.getCurrentRole().toLowerCase()+"&roleId=" + this.userService.getCurrentUser().roleId
      )
      .pipe(
        map(responseData => {
          console.log("currentlessons");
          console.log(responseData);
          // const currentLessons = responseData["_embedded"]["lessons"];
          const currentLessons = responseData;
          return currentLessons;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  getAllLessons() {
    return this.http.get(this.serverUrl + "lms/lessons").pipe(
      map(responseData => {
        console.log("alllessons");
        console.log(responseData);
        // const allLessons = responseData["_embedded"]["lessons"];
        const allLessons = responseData;
        return allLessons;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

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
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

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

  // updateLesson(lesson){
  //   if(lesson.id !== undefined){
  //     return this.http.put(this.serverUrl + "lms/lessons/"+lesson.id,lesson)
  //   }else{
  //     return this.http.post(this.serverUrl + "lms/lessons",lesson)
  //   }
  // }

  addOrUpdateLesson(lesson, courseTitle, tutorId){
    return this.http.post(this.serverUrl + "lms/lessons?courseTitle=" + courseTitle + "&tutorId=" + tutorId,lesson);
  }

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
