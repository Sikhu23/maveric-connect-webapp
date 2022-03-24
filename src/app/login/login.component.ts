import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }

  user:any={}



  login(){
    let body={
      email:this.user.email,
      password:this.user.password
    }
    console.log("Hello")
    // let url="http://localhost:8000/auth/login";
    let url ="http://localhost:8000/posts";
    // let url="https://apifromashu.herokuapp.com/api/login";

    this.http.get(url).subscribe((response:any)=>{

      console.log(response)
    },(error)=>alert('Login erro'))


  }

}
