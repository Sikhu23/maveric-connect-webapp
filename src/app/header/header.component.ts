import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isloggedin:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    if(localStorage.token){
      this.isloggedin=true

    }
    else{
      this.isloggedin=false
    }
  }

  logout(){
    localStorage.clear()
  }

}
