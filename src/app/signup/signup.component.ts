import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname:any
  email:any
  password:any
  cpassword:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  signup(){
    if(this.cpassword===this.password){
      let body={

        "firstName": "Fourth",
        "lastName": this.firstname,
        "middleName": "User",
        "phoneNumber": "7894561230",
        "email": this.email,
        "address": "pune",
        "dateOfBirth": "2022-03-21",
        "employeeNumber": "564",
        "bloodGroup": "A_POS",
        "gender": "MALE",

        "password":this.password
          }
          let url="http://localhost:3000/auth/signup"

          this.http.post(url,body).subscribe((response:any)=>{
            console.log(response);
            localStorage.token1=response.jwtToken;
          })
    }
    else{
      alert("Please check yur password")
    }




  }

}
