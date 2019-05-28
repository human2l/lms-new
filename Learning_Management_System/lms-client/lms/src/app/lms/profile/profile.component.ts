import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild("profileForm") profileForm: NgForm;
  @ViewChild("passwordForm") passwordForm: NgForm;
//TODO: validation, front-back transmission, onSubmit
  userProfile = {
    firstName: "aaa",
    lastName: "bbb",
    email: "a@a.com",
    mobile: 123123
  };

  userPassword = {
    newPassword: "",
    confirmPassword: ""
  }

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.profileForm.form.setValue(this.userProfile);
    // });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    
  }

  onSubmitPassword(){

  }
}
