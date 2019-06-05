import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils/utils';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class LessonService{
    private serverUrl: string = "";
    constructor(private http:HttpClient){
        this.serverUrl = Utils.serverUrl;
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

      getTutorLessons(){
        //TODO: change to tutor's
        //TODO: change to tutor's
        //TODO: change to tutor's
        //TODO: change to tutor's
        //TODO: change to tutor's
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

      getAllLessonsOfOneCourse(course) {
        const id = Utils.getIdFromLink(course);
        return this.http.get(this.serverUrl + "lms/courses/"+id+"/lessons").pipe(
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
          this.serverUrl + "lms/students/1/lessons",
          this.serverUrl + "lms/lessons/" + id,
          Utils.manyToManyHttpOptions
        );
      }

      deleteAllCurrentLessons(){
        return this.http.put(this.serverUrl + "lms/students/1/lessons/",Utils.manyToManyHttpOptions);
      }

      deleteOneOfCurrentLessonsById(id: number) {
        return this.http.delete(this.serverUrl + "lms/students/1/lessons/" + id);
      }
}