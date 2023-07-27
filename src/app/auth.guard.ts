import { Injectable } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if(localStorage.getItem('userToken')!=null){
return true;

}else{
  this._router.navigate(['/sign-in'])
  return false
}
  }
  
}
