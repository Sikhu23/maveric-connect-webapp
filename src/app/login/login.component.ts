import { Router } from '@angular/router';
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
  constructor(private http:HttpClient , private service:AppserviceService, private route:Router) { }
  successMsg:any;

  ngOnInit(): void {
  }

  user:any={}



  login(){





    this.service.login(this.user).subscribe((response:any)=>{

      if(response.userID){
        if(this.user.password===response.password){
          localStorage.token=localStorage.token1
          this.successMsg="Logged IN SuccessFully !!!"
          this.route.navigate(["/posts"],{queryParams:{page:1}});

        }

      }
    })






  }

}
