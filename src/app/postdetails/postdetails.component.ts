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
  constructor(private http : HttpClient,private router:ActivatedRoute) {

    this.id=this.router.snapshot.params['id']
    console.log(this.id)

    let url= "http://localhost:3010/posts/"+this.id;
    this.http.get(url).subscribe((response:any)=>{
      console.log(response)
      this.post=response
      this.postedBy=response.postedBy;
    })

    let url1="http://localhost:8000/posts/"+this.id+"/comments"
    this.http.get(url1).subscribe((response:any)=>{
      console.log(response)
      this.comments=response

    })
  }

  ngOnInit(): void {
  }

}
