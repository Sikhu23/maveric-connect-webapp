import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) {


   }


   login(user:any){


    let url="http://localhost:8000/users/getUserByEmail/"+user.email


    return this.http.get(url)
   }

   getposts(page:any){
    let url="http://localhost:8000/posts?page="+page;
    return this.http.get(url);
   }

   getpostdetails(id:any){
    let url= "http://localhost:3010/posts/"+id;
    return this.http.get(url)

   }


   getcommentsonposts(id:any){
    let url="http://localhost:8000/posts/"+id+"/comments"
    return this.http.get(url)
   }

   authsignup(body:any){
    let url="http://localhost:3000/auth/signup"
    return this.http.post(url,body);
   }
}
