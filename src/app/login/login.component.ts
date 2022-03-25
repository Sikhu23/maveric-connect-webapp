import { AppserviceService } from './../appservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   headers =new HttpHeaders();
  constructor(private http:HttpClient , private service:AppserviceService) { }
  successMsg:any;

  ngOnInit(): void {
  }

  user:any={}



  login(){



    // let url="http://localhost:8000/auth/login";
    // let url="http://localhost:8000/users/getUserByEmail/"+this.user.email
    // let url ="http://localhost:8000/posts";
    // let url="https://apifromashu.herokuapp.com/api/login";

    // this.http.post(url,body,{
    //   headers:this.headers
    // }).subscribe((response:any)=>{

    //   console.log(response)
    //   localStorage.token=localStorage.token1
    // },(error)=>alert('Login erro'))

    this.service.login(this.user).subscribe((response:any)=>{
      console.log(response);
      if(response.userID){
        if(this.user.password===response.password){
          localStorage.token=localStorage.token1
          this.successMsg="Logged IN SuccessFully !!!"

        }
        else{
          alert("Password is incorrect")
        }
      }
    },(error)=> alert("Email Not Registered"))






  }

}
