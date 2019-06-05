import { UserService } from './../../service/user.service';
import { LmsService } from './../../service/lms.service';
import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  }

  constructor(private modalService: BsModalService, private lmsService: LmsService, private userService: UserService) {}

  ngOnInit() {
    this.fetchCurrentUser();
  }

  fetchCurrentUser(){
    this.userService.getCurrentUser().subscribe(
      currentUser => {
        this.currentUser = currentUser;
        this.loading = false;
      },
      error => {
        this.error = error.message;
      }
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    // this.userService.updateUser(this.userProfile);
    //TODO: http
  }

  //no need, should included in onSubmit method
  // onSubmitPassword(){

  // }
}
