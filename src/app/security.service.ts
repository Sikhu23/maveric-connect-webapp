import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService implements CanActivate {


 canActivate(){
   if(localStorage.token){
     return true;
   }
   else{
     this.router.navigate([""])
     return false;
   }

 }
 constructor(private router:Router) { }

}
