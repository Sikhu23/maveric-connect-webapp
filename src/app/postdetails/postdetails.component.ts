import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  post:any;
  postedBy:any={};
  comments:any;
  constructor(private http : HttpClient) {
    let url= "http://localhost:3010/posts/2";
    this.http.get(url).subscribe((response:any)=>{
      console.log(response)
      this.post=response
      this.postedBy=response.postedBy;
    })

    let url1="http://localhost:8000/posts/2/comments"
    this.http.get(url1).subscribe((response:any)=>{
      console.log(response)
      this.comments=response

    })
  }

  ngOnInit(): void {
  }

}
