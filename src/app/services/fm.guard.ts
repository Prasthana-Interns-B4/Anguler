import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FmGuard implements CanActivateChild {
  constructor(private route: Router){} 
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      {
        if (localStorage.getItem("role") === "facility_manager"){
          return true;
        }else{
          this.route.navigate(['/login']);        
          return false;
        }
      }
  }
  
}
