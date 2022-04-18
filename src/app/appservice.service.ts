import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) {


   }
   loginurl="http://localhost:8000/users/getUserByEmail/";
   getpostsurl="http://localhost:8000/posts?page=";
   getpostdetailsurl="http://localhost:3010/posts/"
   getcommentsonpostsurl="http://localhost:8000/posts/";
   authsignupurl="http://localhost:3000/auth/signup";


   login(user:any){


    let url=this.loginurl+user.email


    return this.http.get(url)
   }

   getposts(page:any){
    let url=this.getpostsurl+page;
    return this.http.get(url);
   }

   getpostdetails(id:any){
    let url= this.getpostdetailsurl+id;
    return this.http.get(url)

   }


   getcommentsonposts(id:any){
    let url=this.getcommentsonpostsurl+id+"/comments"
    return this.http.get(url)
   }

   authsignup(body:any){
    let url=this.authsignupurl;
    return this.http.post(url,body);
   }
}
