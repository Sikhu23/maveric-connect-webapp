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



    this.service.getpostdetails(this.id).subscribe((response:any)=>{

      this.post=response
      this.postedBy=response.postedBy;
    })


    this.service.getcommentsonposts(this.id).subscribe((response:any)=>{

      this.comments=response

    })
  }

  ngOnInit(): void {
  }

}
