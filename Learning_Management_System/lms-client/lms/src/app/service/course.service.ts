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

    //this function only for students
    //return the current student's course
    getCurrentCourse() {
      if(this.userService.getCurrentRole() !== "Student"){
        return null;
      }
        return this.http.get(this.serverUrl + "lms/"+this.userService.getCurrentRole().toLowerCase()+"s/"+this.userService.getCurrentUser().roleId+"/course").pipe(
          map(responseData => {
              return responseData;
          }),
          catchError(errorRes => {
            return throwError(errorRes);
          })
        );
      }
    
      //return all courses exist
      getAllCourses() {
        return this.http.get(this.serverUrl + "lms/courses").pipe(
          map(responseData => {
            const allCourses = responseData["_embedded"]["courses"];
            return allCourses;
          }),
          catchError(errorRes => {
            return throwError(errorRes);
          })
        );
      }
    
      //Set course to a role. Role can be student or tutor
      //Set up many to many bidirectional relationship
      setCurrentCourseById(id: number) {
        return this.http.put(
          this.serverUrl + "lms/"+this.userService.getCurrentRole().toLowerCase()+"s/"+this.userService.getCurrentUser().roleId+"/course",
          this.serverUrl + "lms/courses/" + id,
          Utils.manyToManyHttpOptions
        );
      }
}