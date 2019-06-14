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

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.registNewUser(this.currentUser,this.role).subscribe(
      responseData => {
        if(responseData === true){
          this.router.navigate(['/lms'])
        }else{
          
          //TODO:handle error
          console.log("error");
        }
      }
    );  
  }
}
