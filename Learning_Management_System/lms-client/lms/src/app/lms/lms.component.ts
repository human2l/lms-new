import { UserService } from "./../service/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-lms",
  templateUrl: "./lms.component.html",
  styleUrls: ["./lms.component.css"]
})
export class LmsComponent implements OnInit {
  title = "lms";
  currentUser = null;
  error = null;
  loading = true;

  manageItems: string[] = ["course", "lesson"];
  manageItemsAfterDivider: string[] = ["personnel"];
  userItems: string[] = ["profile"];
  userItemsAfterDivider: string[] = ["logout"];
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
      this.loading = false;
  }

  onLogout() {
    //TODO: true logout
    this.router.navigate(["/auth/login"]);
  }
}
