import { UserService } from './../../service/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("registerForm") registerForm: NgForm;
  currentUser = {firstName:"",lastName:"",email:"",mobile:"",password:"",confirmPassword:""}
  role = "";
  error;

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }

  //User press register button
  onSubmit(){
    this.userService.registNewUser(this.currentUser,this.role).subscribe(
      responseData => {
          this.router.navigate(['/lms'])
      },error=>{
        this.error = error;
      }
    );  
  }
}
