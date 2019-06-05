import { UserService } from './../service/user.service';
import { LmsService } from "./../service/lms.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lms",
  templateUrl: "./lms.component.html",
  styleUrls: ["./lms.component.css"]
})
export class LmsComponent implements OnInit {
  title = "lms";
  currentUser = null;
  error = null;
  loading=true;

  manageItems: string[] = ["course", "lesson"];
  manageItemsAfterDivider: string[] = ["personnel"];
  userItems: string[] = ["profile"];
  userItemsAfterDivider: string[] = ["logout"];
  constructor(private lmsService: LmsService, private userService:UserService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      responseData => {
        this.currentUser = responseData;
        this.loading = false;
      },
      error => {
        this.error = error;
      }
    );
  }
}
