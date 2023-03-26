import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private route: Router){} 
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {
      if (localStorage.getItem("role") === "employee"){
        return true;
      }else{
        this.route.navigate(['']);       
        return false;
      }
    }    
  }  

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {
      if (localStorage.getItem("role") === "hr_manager"){
        return true;
      }else{
        this.route.navigate(['']);        
        return false;
      }
    }    

  }
}
