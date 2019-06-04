import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("registerForm") registerForm: NgForm;
  currentUser = {firstName:"",lastName:"",email:"",mobile:"",password:"",confirmPassword:""}
  // checkModel: any = { admin: false, tutor: true, student: false };
  role = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit");
    console.log(this.role);
  }
}
