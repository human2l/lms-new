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
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit");
    //TODO authentication
    // this.router.navigate(['servers'], {relativeTo: this.route});
    this.router.navigate(['/lms/dashboard']);
  }

  onForgotPassword(){
    console.log("onForgotPassword");
  }

}
