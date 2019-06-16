import { UserService } from "./../../service/user.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm: NgForm;
  @ViewChild("submitBtn") submitBtn: NgModel;

  currentUser = { email: "", password: "" };
  error = null;
  submitButtonValue = "login";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.currentUser).subscribe(
        responseData => {
          this.router.navigate(["/lms/dashboard"]);
        },
        error => {
          console.log(error.error.message);
          if (error.error.message == "User Not Found") {
            this.submitButtonValue = "User not found, please try again.";
          } else if (error.error.message == "Password Incorrect") {
            this.submitButtonValue = "Password incorrect, please try again.";
          }
          this.error = error;
        }
      );
    }
  }

  onForgotPassword() {
    console.log("onForgotPassword");
  }
}
