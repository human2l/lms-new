import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils/utils';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: "root" })
export class UserService{
    // private currentRole: string = null;
    private currentUser;
    private serverUrl: string = "";
    
    constructor(private http:HttpClient){
        this.serverUrl = Utils.serverUrl;
    }


    getCurrentUser() {
        // return this.currentUser;
        // return this.http.get(this.serverUrl + "lms/users/1").pipe(
        //   map(responseData => {
        //     console.log(responseData);
        //     const currentUser = responseData;
        //     return currentUser;
        //   }),
        //   catchError(errorRes => {
        //     // Send to analytics server
        //     return throwError(errorRes);
        //   })
        // );
        return this.currentUser;
      }

    setCurrentUser(currentUser){
      this.currentUser = currentUser;
    }
    
      getCurrentRole() {
        //TODO: what if user has multiply role?
        console.log(this.currentUser);
        return this.currentUser.roles[0].role;
      }

      registNewUser(newUser, role:String){
        return this.http.post(this.serverUrl+"registration?role="+role,newUser).pipe(
          map(
            responseData => {
              if(responseData.hasOwnProperty("user")){
                this.currentUser = responseData["user"];
                this.currentUser.roleId = responseData["id"];
                return true;
              }else{
                //TODO: return error
                return false;
              }
            }
          ),catchError(errorRes => {
            // Send to analytics server
            return throwError(errorRes);
          })
        );
      }
}