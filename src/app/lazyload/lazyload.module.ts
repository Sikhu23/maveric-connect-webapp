import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { PostdetailsComponent } from '../postdetails/postdetails.component';

import { PostsComponent } from '../posts/posts.component';
import { SecurityService } from '../security.service';

let AdminRoutes : Routes    = [



  {path:'',canActivate:[SecurityService],component:PostsComponent},
  {path:'post-details/:id',canActivate:[SecurityService],component:PostdetailsComponent},
  {path:"**", component :ErrorComponent },

]

@NgModule({
  declarations:
  [ErrorComponent,PostdetailsComponent,PostsComponent,],


  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class LazyloadModule { }
