import { AppserviceService } from './../appservice.service';
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
  successMsg:any

  constructor(private http:HttpClient,private service:AppserviceService) { }

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


          this.service.authsignup(body).subscribe((response:any)=>{
            console.log(response);
            localStorage.token1=response.jwtToken;
            this.successMsg="User Created Successfully ... Proceed with Login !!!"
          })
    }
    else{
      alert("Please check yur password")
    }




  }

}
