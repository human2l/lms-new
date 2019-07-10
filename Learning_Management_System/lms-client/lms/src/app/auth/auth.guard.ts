import { UserService } from './../service/user.service';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  

  //Check if current user is null. If so, redirect to login page
  @Injectable({ providedIn: 'root' })
  export class AuthGuard implements CanActivate {
    constructor(private userService:UserService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
          const authenticated = this.userService.getCurrentUser() !== null;
        if(authenticated){
            return true;
        }
        return this.router.createUrlTree(['/auth/login']);
    }
  }
  