import { AppserviceService } from './../appservice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
postArray:[];
  constructor(private http:HttpClient,private service:AppserviceService) {

    this.service.getposts().subscribe((response:any)=>{
      console.log(response)
      this.postArray=response;
    })

   }

  ngOnInit(): void {
  }

}
