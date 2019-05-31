import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Course } from "../shared/models/course.model";
// import { Lesson } from "../shared/models/lesson.model";

import { map, catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Utils } from "../utils/utils";

@Injectable({ providedIn: "root" })
export class LmsService {
  private serverUrl: string = "http://localhost:8080/";
  error = new Subject<string>();
  private currentRole: string = null;

  private manyToManyHttpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "text/uri-list"
    })
  };

  constructor(private http: HttpClient) {}

  //TODO: change password method

  getCurrentUser() {
    // return this.currentUser;
    return this.http.get(this.serverUrl + "lms/users/1").pipe(
      map(responseData => {
        console.log(responseData);
        const currentUser = responseData;
        return currentUser;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  getCurrentRole() {
    if (this.currentRole === null) {
      this.currentRole = "student";
    }
    return this.currentRole;
  }

  getCurrentCourse() {
    return this.http.get(this.serverUrl + "lms/students/1/course").pipe(
      map(responseData => {
        const currentCourse = responseData;
        return currentCourse;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  getAllCourses() {
    return this.http.get(this.serverUrl + "lms/courses").pipe(
      map(responseData => {
        const allCourses = responseData["_embedded"]["courses"];
        return allCourses;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  setCurrentCourseById(id: number) {
    return this.http.put(
      this.serverUrl + "lms/students/1/course",
      this.serverUrl + "lms/courses/" + id,
      this.manyToManyHttpOptions
    );
  }

  getCurrentLessons() {
    return this.http.get(this.serverUrl + "lms/students/1/lessons").pipe(
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

  getAllLessons() {
    return this.http.get(this.serverUrl + "lms/lessons").pipe(
      map(responseData => {
        const allLessons = responseData["_embedded"]["lessons"];
        return allLessons;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  getAllLessonsOfCurrentCourse() {
    // let course = null;
    // this.getCurrentCourse().subscribe(
    //   course => {
    //     const id = Utils.getIdFromLink(course);
    //     return this.http
    //       .get(this.serverUrl + "lms/courses/" + id + "/lessons")
    //       .pipe(
    //         map(responseData => {
    //           const allLessons = responseData["_embedded"]["lessons"];
    //           return allLessons;
    //         }),
    //         catchError(errorRes => {
    //           // Send to analytics server
    //           return throwError(errorRes);
    //         })
    //       );
    //   },
    //   error => {
    //     this.error = error.message;
    //   }
    // );
    return this.http.get(this.serverUrl + "lms/students/1/course")
    .concatMap
  }

  addOneLessonToCurrentLessonsById(id: number) {
    return this.http.post(
      this.serverUrl + "lms/students/1/lessons",
      this.serverUrl + "lms/lessons/" + id,
      this.manyToManyHttpOptions
    );
  }

  deleteOneOfCurrentLessonsById(id: number) {
    return this.http.delete(this.serverUrl + "lms/students/1/lessons/" + id);
  }
}
