import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Utils } from '../utils/utils';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: "root" })
export class CourseService{
    private serverUrl: string = "";
    constructor(private http:HttpClient, private userService:UserService){
        this.serverUrl = Utils.serverUrl;
    }

    getCurrentCourse() {
      //TODO: need to modify when apply http
      if(this.userService.getCurrentRole() !== "student"){
        return null;
      }
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
          Utils.manyToManyHttpOptions
        );
      }
}