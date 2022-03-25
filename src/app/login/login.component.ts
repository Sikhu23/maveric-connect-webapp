import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   headers =new HttpHeaders();
  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }

  user:any={}



  login(){





    // let url="http://localhost:8000/auth/login";
    let url="http://localhost:8000/users/getUserByEmail/"+this.user.email
    // let url ="http://localhost:8000/posts";
    // let url="https://apifromashu.herokuapp.com/api/login";

    // this.http.post(url,body,{
    //   headers:this.headers
    // }).subscribe((response:any)=>{

    //   console.log(response)
    //   localStorage.token=localStorage.token1
    // },(error)=>alert('Login erro'))

    this.http.get(url).subscribe((response:any)=>{
      console.log(response);
      if(response.userID){
        if(this.user.password===response.password){
          localStorage.token=localStorage.token1
        }
        else{
          alert("Password is incorrect")
        }
      }
    })


  }

}
