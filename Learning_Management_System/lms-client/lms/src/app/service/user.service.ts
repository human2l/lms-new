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

    //FOR DEVELOPING, SHOULD DELETE!!!
    // this.currentUser = {
    //   id: 20,
    //   firstName: "tutor1",
    //   lastName: "ln",
    //   email: "t@t.com",
    //   password: "$2a$10$giHnUtNgfPjdk5lTLu8T4Om8eLcufBuxKDFbdlguRk43cNAkcmFZ.",
    //   mobile: "mobile123",
    //   active: 1,
    //   admin: null,
    //   student: null,
    //   roleId: 3,
    //   tutor: {
    //     id: 3,
    //     user: "62b17674-4770-4b24-945f-af26696dbc40"
    //   },
    //   roles: [
    //     {
    //       id: 2,
    //       role: "Tutor"
    //     }
    //   ]
    // };
  }

  getCurrentUser() {
    return this.currentUser;
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
          const responseUser = responseData["user"];
          responseUser.roleId = responseData["id"];
          this.currentUser = responseUser;
          return true;
        }),
        catchError(errorRes => {
          //TODO: handle error
          console.log("register error");
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  login(user) {
    return this.http.post(this.serverUrl + "login", user).pipe(
      map(responseData => {
        const currentUser = responseData;
        this.currentUser = this.formatUser(currentUser);
        console.log(currentUser);
        return true;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  updateUser(user) {
    console.log(user);
    return this.http
      .post(this.serverUrl + "updateUser?email=" + user.email, user)
      .pipe(
        map(responseData => {
          const currentUser = responseData;
          this.currentUser = this.formatUser(currentUser);
          console.log("updateUser");
          console.log(this.currentUser);
          return true;
        }),
        catchError(errorRes => {
          //TODO: handle not found
          return throwError(errorRes);
        })
      );
  }

  private formatUser(currentUser) {
    switch (currentUser["roles"][0]["role"]) {
      case "Admin":
        currentUser["roleId"] = currentUser["admin"]["id"];
        delete currentUser["admin"];
        break;
      case "Tutor":
        currentUser["roleId"] = currentUser["tutor"]["id"];
        delete currentUser["tutor"];
        break;
      case "Student":
        currentUser["roleId"] = currentUser["student"]["id"];
        delete currentUser["student"];
        break;
      default:
        break;
    }
    return currentUser;
  }
}
