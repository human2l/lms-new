import { UserService } from "./../../service/user.service";
import { LmsService } from "./../../service/lms.service";
import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from '@angular/router';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [LmsService]
})
export class ProfileComponent implements OnInit {
  error = null;
  modalRef: BsModalRef;
  @ViewChild("profileForm") profileForm: NgForm;
  @ViewChild("passwordForm") passwordForm: NgForm;
  currentUser = null;
  loading = true;

  userPassword = {
    newPassword: "",
    confirmPassword: ""
  };

  constructor(
    private modalService: BsModalService,
    private lmsService: LmsService,
    private userService: UserService,
    private router:Router
  ) {}

  ngOnInit() {
      this.fetchCurrentUser();
  }

  fetchCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
    this.loading = false;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.userService.updateUser(this.currentUser).subscribe(
      responseData => {
        //TODO: show success
      },
      error=> {
        //TODO: show error
      }
    )
  }

  onSavePassword(){
    //TODO: password validation
    this.currentUser.password = this.userPassword.newPassword;
    if (!this.modalRef) {
      return;
    }
 
    this.modalRef.hide();
    this.modalRef = null;
  }
}
