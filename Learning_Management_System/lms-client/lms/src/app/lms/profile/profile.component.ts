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
  modalRef: BsModalRef;
  @ViewChild("profileForm") profileForm: NgForm;
  @ViewChild("passwordForm") passwordForm: NgForm;
//TODO: validation, front-back transmission, onSubmit
  userProfile:{firstName:string,lastName:string,email:string,mobile:string} = {firstName:"",lastName:"",email:"",mobile:""};

  userPassword = {
    newPassword: "",
    confirmPassword: ""
  }

  constructor(private modalService: BsModalService, private lmsService: LmsService) {}

  ngOnInit() {
    this.userProfile.firstName = this.lmsService.getCurrentUser().firstName;
    this.userProfile.lastName = this.lmsService.getCurrentUser().lastName;
    this.userProfile.email = this.lmsService.getCurrentUser().email;
    this.userProfile.mobile = this.lmsService.getCurrentUser().mobile;
    console.log(this.lmsService.getCurrentUser());
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    // this.lmsService.updateUser(this.userProfile);
    console.log(this.lmsService.getCurrentUser());
    //TODO: http
  }

  //no need, should included in onSubmit method
  // onSubmitPassword(){

  // }
}
