import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Utils } from "../utils/utils";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class UserService {
  private currentUser = null;
  private serverUrl: string = "";

  constructor(private http: HttpClient, private router: Router) {
    this.serverUrl = Utils.serverUrl;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(currentUser) {
    this.currentUser = currentUser;
  }

  getCurrentRole() {
    //TODO: what if user has multiply role?
    return this.currentUser.roles[0].role;
  }

  registNewUser(newUser, role: String) {
    return this.http
      .post(this.serverUrl + "registration?role=" + role, newUser)
      .pipe(
        map(responseData => {
          if (responseData.hasOwnProperty("user")) {
            this.currentUser = responseData["user"];
            this.currentUser.roleId = responseData["id"];
            return true;
          } else {
            //TODO: return error
            return false;
          }
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  login(user) {
    return this.http.post(this.serverUrl + "login", user).pipe(
      map(responseData => {
        const currentUser = responseData;
        switch (currentUser["roles"][0]["role"]) {
          case "Admin":
            currentUser["roleId"] = currentUser["admin"]["id"];
            break;
          case "Tutor":
              currentUser["roleId"] = currentUser["tutor"]["id"];
            break;
          case "Student":
              currentUser["roleId"] = currentUser["student"]["id"];
            break;
          default:
            break;
        }
        this.currentUser = currentUser;
        return true;
      })
    );
  }

  updateUser(user){
  //   return this.http.post(this.serverUrl + "login", user).pipe(
  //     map(responseData => {
  //       const currentUser = responseData;
      
      
  //     // return true;
  //   })
  // );
  }

  updateUserPassword(password){

  }
}
