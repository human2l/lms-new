import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils/utils';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: "root" })
export class UserService{
    private currentRole: string = null;

    private serverUrl: string = "";
    
    constructor(private http:HttpClient){
        this.serverUrl = Utils.serverUrl;
    }


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
          this.currentRole = "tutor";
        }
        return this.currentRole;
      }
}