import { AppserviceService } from './../appservice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  post:any;
  postedBy:any={};
  comments:any;
  id:any;
  constructor(private http : HttpClient,private router:ActivatedRoute,private service:AppserviceService) {

    this.id=this.router.snapshot.params['id']
    console.log(this.id)


    this.service.getpostdetails(this.id).subscribe((response:any)=>{
      console.log("1 call "+response)
      this.post=response
      this.postedBy=response.postedBy;
    },(error)=>{
      console.log("post not found")
    })


    this.service.getcommentsonposts(this.id).subscribe((response:any)=>{
      console.log("2nd resoonse"+response)
      this.comments=response

    },(error)=>{
      console.log("Comments not found")
    })
  }

  ngOnInit(): void {
  }

}
