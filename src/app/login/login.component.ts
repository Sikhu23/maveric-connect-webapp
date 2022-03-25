import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    let body1={
      "firstName": "Fourth",
      "lastName": "Test",
      "middleName": "User",
      "phoneNumber": "7894561230",
      "email": "fourthyyyy@example.com",
      "address": "pune",
      "dateOfBirth": "2022-03-21",
      "employeeNumber": "564",
      "bloodGroup": "A_POS",
      "gender": "MALE",
      "martialStatus":"Bachelor",
      "password":"789"
    }

    let headers =new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');


    console.log("Hello")
    console.log({...body});
    let url="http://localhost:8000/auth/login";
    // let url ="http://localhost:8000/posts";
    // let url="https://apifromashu.herokuapp.com/api/login";

    this.http.post(url,body,{
      headers:headers
    }).subscribe((response:any)=>{

      console.log(response)
    },(error)=>alert('Login erro'))


  }

}
