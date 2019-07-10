import { UserService } from "./../../service/user.service";
import { LmsService } from "./../../service/lms.service";
import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

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
  alerting = false;

  userPassword = {
    newPassword: "",
    confirmPassword: ""
  };

  alerts: any[] = [

  ];

  addAlert(messageType, message): void {
    this.alerting = true;
    this.alerts.push({
      type: messageType,
      msg: message,
      timeout: 5000
    });
  }
  
  onClosedAlert(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    if(this.alerts.length === 0){
      this.alerting = false;
    }
  }


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
        this.addAlert("success", `Profile saved! ${new Date().toLocaleTimeString()}`);
      },
      error=> {
        this.addAlert("danger", `Saving failed! Please try again. ${new Date().toLocaleTimeString()}`);
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
