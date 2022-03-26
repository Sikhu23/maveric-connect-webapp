import { ActivatedRoute, Router } from '@angular/router';
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
page:any=1;
  constructor(private http:HttpClient,private service:AppserviceService,
    private router:Router,private route:ActivatedRoute) {

      this.route.queryParams.subscribe((response:any)=>{
        let pageres:any

        if(!response.page){
          pageres=1;
        }
        else{
          pageres=response.page;
        }
        console.log("response is "+response.page)

        this.page=pageres
        console.log("page is "+pageres)
        this.service.getposts(pageres).subscribe((response:any)=>{
          this.postArray=response
          console.log(response)

        })
      })

    // this.service.getposts().subscribe((response:any)=>{
    //   console.log(response)
    //   this.postArray=response;
    // })

   }

  ngOnInit(): void {
  }


  paginationforward(){
    ++this.page;

    if(this.page){
      this.router.navigate(['/posts'],{queryParams:{page:this.page}})
      console.log(this.page)
     }


  }
  paginationbackward(){
    --this.page;

    if(this.page){
      this.router.navigate(['/posts'],{queryParams:{page:this.page}})
      console.log(this.page)
     }

  }

}
