import { UserService } from './../../service/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm: NgForm;
  currentUser = {email:"", password:""};
  constructor(private router: Router, private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.login(this.currentUser).subscribe(
      responseData => {
        if(responseData){
          this.router.navigate(["/lms/dashboard"]);
        }else{
          //TODO: handle error
        }
        
      }
      //TODO: check if bad response
    )
  }

  onForgotPassword(){
    console.log("onForgotPassword");
  }

}
